import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom"
import Start from './pages/Start'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import CourseOverview from './pages/CourseOverview'
import AuthRoute from './components/AuthRouter'
import CourseDetail from './pages/CouseDetail'
import Profile from './pages/Profile'
import UserDashboard from './pages/UserDashboard'
import history from "./utils/history"

// import './App.css'

const App = () => {

  return (

    <HistoryRouter history={history}>
      <Routes>
        <Route path={"/"}
          element={
            <AuthRoute>
              <CourseOverview />
            </AuthRoute>
          } />
        <Route path={"/course"}
          element={
            <AuthRoute>
              <CourseDetail />
            </AuthRoute>
          } />
        <Route path={"/userdashboard"} element={<UserDashboard />} />
        <Route path={"/start"} element={<Start />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </HistoryRouter>


  )
}

export default App
