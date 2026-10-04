import './App.css'
import { useState } from "react";
import { BackButton } from './components/UI/BackButton'
import { HelpButton } from './components/UI/HelpButton'
import { HelpModal } from "./components/UI/HelpModal"
import { CargoView } from "./components/CargoView/CargoView"
import { cargos } from "./data/cargos"

function App() {
   const [isHelpOpen, setIsHelpOpen] = useState(false);
   const currentCargo = cargos[0];

  return (
    <div className="root">
      
      <CargoView cargo={currentCargo} />
      <BackButton onClick={()=>{}}/>
      <HelpButton onClick={()=>setIsHelpOpen(true)}/>

      {isHelpOpen && <HelpModal onClose={() => setIsHelpOpen(false)} />}

        
    </div>
  )
}

export default App
