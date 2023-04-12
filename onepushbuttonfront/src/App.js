import Navbar from "./Navbar"
import Game from "./pages/Game"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}


export default App;