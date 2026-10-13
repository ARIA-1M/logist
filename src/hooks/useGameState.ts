import { useMemo, useState } from "react";
import type { GameState, Option } from "../types/game";

import { cargos } from "../data/cargos";
import { cargoTypeOptions, packageOptions, fillerOptions } from "../data/options";

// Статус подсветки: neutral — обычный, correct — зелёный, wrong — красный
export type FieldStatus = "neutral" | "correct" | "wrong";

type StatusMap = {
  type: FieldStatus;
  package: FieldStatus;
  filler: FieldStatus;
};

type ExtendedGameState = GameState & {
  hadMistake: boolean;
  status: StatusMap;
};

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

function findOptionById(id: string): Option | null {
  return (
    cargoTypeOptions.find((o) => o.id === id) ||
    packageOptions.find((o) => o.id === id) ||
    fillerOptions.find((o) => o.id === id) ||
    null
  );
}

const emptyStatus: StatusMap = {
  type: "neutral",
  package: "neutral",
  filler: "neutral",
};

export const useGameState = () => {
  const [state, setState] = useState<ExtendedGameState>(() => ({
    cargos: shuffle(cargos),
    currentCargoIndex: 0,
    successCount: 0,
    isFinished: false,
    selection: { type: null, package: null, filler: null },
    hadMistake: false,
    status: emptyStatus,
  }));

  const currentCargo = useMemo(() => {
    return state.cargos[state.currentCargoIndex] ?? null;
  }, [state.cargos, state.currentCargoIndex]);

  const setType = (optionId: string) => {
    const option = findOptionById(optionId);
    if (!option || option.category !== "cargoType") return;

    setState((prev) => ({
      ...prev,
      selection: { ...prev.selection, type: option },
      status: { ...prev.status, type: "neutral" },
    }));
  };

  const setPackage = (optionId: string) => {
    const option = findOptionById(optionId);
    if (!option || option.category !== "package") return;

    setState((prev) => ({
      ...prev,
      selection: { ...prev.selection, package: option },
      status: { ...prev.status, package: "neutral" },
    }));
  };

  const setFiller = (optionId: string) => {
    const option = findOptionById(optionId);
    if (!option || option.category !== "filler") return;

    setState((prev) => ({
      ...prev,
      selection: { ...prev.selection, filler: option },
      status: { ...prev.status, filler: "neutral" },
    }));
  };

  // Проверка ответа: записывает status, но НЕ переходит к следующему грузу
  const submitCargo = (): {
    success: boolean;
    awardedPoint: boolean;
    incomplete: boolean;
    status: StatusMap;
  } => {
    if (!currentCargo) {
      return {
        success: false,
        awardedPoint: false,
        incomplete: true,
        status: emptyStatus,
      };
    }

    const { type, package: pkg, filler } = state.selection;

    if (!type || !pkg || !filler) {
      return {
        success: false,
        awardedPoint: false,
        incomplete: true,
        status: emptyStatus,
      };
    }

    const status: StatusMap = {
      type: type.id === currentCargo.correct.type ? "correct" : "wrong",
      package: pkg.id === currentCargo.correct.package ? "correct" : "wrong",
      filler: filler.id === currentCargo.correct.filler ? "correct" : "wrong",
    };

    const isCorrect =
      status.type === "correct" &&
      status.package === "correct" &&
      status.filler === "correct";

    const awardedPoint = isCorrect && !state.hadMistake;

    setState((prev) => ({
      ...prev,
      successCount: awardedPoint ? prev.successCount + 1 : prev.successCount,
      status,
      hadMistake: isCorrect ? prev.hadMistake : true,
    }));

    return {
      success: isCorrect,
      awardedPoint,
      incomplete: false,
      status,
    };
  };

  // Отдельная функция — переход к следующему грузу
  const nextCargo = () => {
    setState((prev) => {
      const nextIndex = prev.currentCargoIndex + 1;
      const isFinished = nextIndex >= prev.cargos.length;

      return {
        ...prev,
        currentCargoIndex: nextIndex,
        isFinished,
        selection: { type: null, package: null, filler: null },
        hadMistake: false,
        status: emptyStatus,
      };
    });
  };

  // Пометить, что игрок уже ошибался в текущем грузе
  const markMistake = () => {
    setState((prev) => ({ ...prev, hadMistake: true }));
  };

  const resetGame = () => {
    setState({
      cargos: shuffle(cargos),
      currentCargoIndex: 0,
      successCount: 0,
      isFinished: false,
      selection: { type: null, package: null, filler: null },
      hadMistake: false,
      status: emptyStatus,
    });
  };

  return {
    state,
    currentCargo,
    setType,
    setPackage,
    setFiller,
    submitCargo,
    nextCargo,
    markMistake,
    resetGame,
  };
};