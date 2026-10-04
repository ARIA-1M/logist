import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { BackButton } from "./components/UI/BackButton";
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

    setNotification({
      message: result.success
        ? "Груз успешно отправлен"
        : "В результате транспортировки груз был повреждён!",
      type: result.success ? "success" : "error",
    });
  }

  return (
    <DndProvider backend={HTML5Backend}>
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
            wrong={state.wrong}
          />
        )}

        <BackButton onClick={() => {}} />
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