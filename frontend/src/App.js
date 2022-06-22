
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import Login from './pages/Login'
import Register from './pages/Register'
// import './App.css'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Start />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App
