import { Route,Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Erreur from "./pages/Erreur"

function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<Erreur />}/>
      </Routes>
    </>
  )
}

export default App
