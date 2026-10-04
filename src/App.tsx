import './App.css'
import { useState } from "react";
import { BackButton } from './components/UI/BackButton'
import { HelpButton } from './components/UI/HelpButton'
import { HelpModal } from "./components/UI/HelpModal"

function App() {
   const [isHelpOpen, setIsHelpOpen] = useState(false);
   

  return (
    <div className="root">
       <h1>Моя игра</h1>
      <BackButton onClick={()=>{}}/>
      <HelpButton onClick={()=>setIsHelpOpen(true)}/>

      {isHelpOpen && <HelpModal onClose={() => setIsHelpOpen(false)} />}

        
    </div>
  )
}

export default App
