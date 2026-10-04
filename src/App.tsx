import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { BackButton } from "./components/UI/BackButton";
import { HelpButton } from "./components/UI/HelpButton";
import { HelpModal } from "./components/UI/HelpModal";
import { CargoView } from "./components/CargoView/CargoView";
import { LeftPanel } from "./components/LeftPanel/LeftPanel";
import { CustomDragLayer } from "./components/LeftPanel/CustomDragLayer";
import { Waybill } from "./components/Waybill/Waybill";
import { cargos } from "./data/cargos";
import {
  cargoTypeOptions,
  packageOptions,
  fillerOptions,
} from "./data/options";
import type { Option } from "./types/game";

function App() {
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  // Временное состояние выбора
  const [typeValue, setTypeValue] = useState<Option | null>(null);
  const [packageValue, setPackageValue] = useState<Option | null>(null);
  const [fillerValue, setFillerValue] = useState<Option | null>(null);

  const currentCargo = cargos[0];

  // Временная функция поиска опции по id
  const findOption = (options: Option[], id: string) =>
    options.find((o) => o.id === id) ?? null;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="root">
        <LeftPanel />

        <CargoView cargo={currentCargo} />

        <Waybill
          cargo={currentCargo}
          typeValue={typeValue}
          packageValue={packageValue}
          fillerValue={fillerValue}
          onTypeDrop={(id) => setTypeValue(findOption(cargoTypeOptions, id))}
          onPackageDrop={(id) => setPackageValue(findOption(packageOptions, id))}
          onFillerDrop={(id) => setFillerValue(findOption(fillerOptions, id))}
          onSubmit={() => alert("Отправка!")}
          successCount={0}
          total={cargos.length}
          wrong={{ type: false, package: false, filler: false }}
        />

        <BackButton onClick={() => {}} />
        <HelpButton onClick={() => setIsHelpOpen(true)} />

        {isHelpOpen && <HelpModal onClose={() => setIsHelpOpen(false)} />}
      </div>

      <CustomDragLayer />
    </DndProvider>
  );
}

export default App;