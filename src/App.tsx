import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BackButton } from "./components/UI/BackButton";
import { HelpButton } from "./components/UI/HelpButton";
import { HelpModal } from "./components/UI/HelpModal";
import { CargoView } from "./components/CargoView/CargoView";
import { LeftPanel } from "./components/LeftPanel/LeftPanel";
import { CustomDragLayer } from "./components/LeftPanel/CustomDragLayer";
import { cargos } from "./data/cargos";

function App() {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const currentCargo = cargos[0];

  return (
     <DndProvider backend={HTML5Backend}>
      <div className="root">
        <LeftPanel />

        <CargoView cargo={currentCargo} />

        <BackButton onClick={() => {}} />
        <HelpButton onClick={() => setIsHelpOpen(true)} />

        {isHelpOpen && <HelpModal onClose={() => setIsHelpOpen(false)} />}
      </div>

      <CustomDragLayer />
    </DndProvider>
  );
}

export default App;