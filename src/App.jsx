import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'

import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

import Create from './pages/Post/Create/Create'
import Edit from './pages/Post/Edit/Edit'
import Detail from './pages/Post/Detail/Detail'

function App() {

  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts/:id" element={<Detail />} />
          <Route
                path="/dashboard"
                element={<ProtectedRoute element={<Dashboard />} />}
          />
          <Route
                path="/posts/create"
                element={<ProtectedRoute element={<Create />} />}
          />
          <Route
                path="/posts/edit/:id"
                element={<ProtectedRoute element={<Edit />} />}
          />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
