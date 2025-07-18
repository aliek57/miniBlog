import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </div>
  )
}

export default App
