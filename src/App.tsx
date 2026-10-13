import { useState } from "react";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";

import { HelpButton } from "./components/UI/HelpButton";
import { HelpModal } from "./components/UI/HelpModal";
import { Notification } from "./components/UI/Notification";
import { Modal } from "./components/UI/Modal";
import { CargoView } from "./components/CargoView/CargoView";
import { LeftPanel } from "./components/LeftPanel/LeftPanel";
import { CustomDragLayer } from "./components/LeftPanel/CustomDragLayer";
import { Waybill } from "./components/Waybill/Waybill";
import { useGameState } from "./hooks/useGameState";

function App() {
  const {
    state,
    currentCargo,
    setType,
    setPackage,
    setFiller,
    submitCargo,
    nextCargo,
    markMistake,
    resetGame,
  } = useGameState();

  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  function handleSubmit() {
    if (
      !state.selection.type ||
      !state.selection.package ||
      !state.selection.filler
    ) {
      setNotification({
        message: "Заполните все пункты накладной",
        type: "error",
      });
      return;
    }

    const result = submitCargo();

    if (!result.success) {
      markMistake();
    }

    setNotification({
      message: result.success
        ? "Груз успешно отправлен"
        : "В результате транспортировки груз был повреждён!",
      type: result.success ? "success" : "error",
    });

    // Через 1.2 секунды переходим к следующему грузу
    setTimeout(() => {
      nextCargo();
    }, 1200);
  }

  return (
    <DndProvider
      backend={TouchBackend}
      options={{
        enableMouseEvents: true,
        enableTouchEvents: true,
      }}
    >
      <div className="root">
        <LeftPanel />

        {currentCargo && <CargoView cargo={currentCargo} />}

        {currentCargo && (
          <Waybill
            cargo={currentCargo}
            typeValue={state.selection.type}
            packageValue={state.selection.package}
            fillerValue={state.selection.filler}
            onTypeDrop={setType}
            onPackageDrop={setPackage}
            onFillerDrop={setFiller}
            onSubmit={handleSubmit}
            successCount={state.successCount}
            total={state.cargos.length}
            status={state.status}
          />
        )}

        <HelpButton onClick={() => setIsHelpOpen(true)} />

        {isHelpOpen && <HelpModal onClose={() => setIsHelpOpen(false)} />}

        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}

        {state.isFinished && (
          <Modal
            successCount={state.successCount}
            total={state.cargos.length}
            onRestart={resetGame}
          />
        )}
      </div>

      <CustomDragLayer />
    </DndProvider>
  );
}

export default App;