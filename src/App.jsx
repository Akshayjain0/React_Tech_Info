// Builtin Modules
import { Routes , Route } from "react-router-dom"

// Components 
import Header from "./components/Header"
import Home from "./components/Home"
// import About from "./components/About"
// import Brand from "./components/Brand"
import Contact from "./components/Contact"
import Services from "./components/Services"
import Footer from "./components/Footer"

// Styles Components
import './styles/App.scss'
import './styles/header.scss'
import './styles/home.scss'
import './styles/footer.scss'
import './styles/contact.scss'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/about" element={<About/>}/> */}
      {/* <Route path="/brand" element={<Brand/>}/> */}
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
    <Footer/>

    </>
  )
}

export default App
