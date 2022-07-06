
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import CourseOverview from './pages/CourseOverview'
import AuthRoute from './components/AuthRouter'
import CourseDetail from './pages/CouseDetail'
import UserDashboard from './pages/UserDashboard'





// import './App.css'

const App = () => {

  return (
    
<BrowserRouter>
      <Routes>
        <Route path={"/"}
          element={
            <AuthRoute>
              <CourseOverview />
            </AuthRoute>
          } />
        <Route path={"/course/:id"}
          element={
            <AuthRoute>
              <CourseDetail />
            </AuthRoute>
          } />
        <Route path={"/userdashboard"} element={<UserDashboard />} />
        <Route path={"/start"} element={<Start />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
