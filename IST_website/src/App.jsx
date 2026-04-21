import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Portfolio from "./components/Portfolio/Portfolio"
import Home from "./components/Homepage/Home"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import Contact from "./components/Contact/Contact"


function App() {
    return (
        <Router>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <Routes>
                <Route path="/about" element={<About />} />     
            </Routes>

            <Routes>
                <Route path="/portfolio" element={<Portfolio />} />     
            </Routes>

            <Routes>
                <Route path="/services" element={<Services />} />     
            </Routes>
            
            <Routes>
                <Route path="/contact" element={<Contact />} />     
            </Routes>
        </Router>
  )
}

export default App
