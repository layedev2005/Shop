
import Link_card from "./components/Link_card"
import Navbar from "./components/Navbar"
import "./main.css"

import CardGlobal from './view/CardGlobal'
import Categorie from "./view/Categorie"

function App() {

  return (
    <>
    {/* Header */}
    <Navbar/>
    {/* Body */}
    <Categorie/>

    <section className="back">
    <CardGlobal CatTitle="Categorie"/>
    
    </section>
    
    </>
  )
}

export default App
