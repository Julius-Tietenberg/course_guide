// route authentication
// 1. Determine if the token exists
// 2. If it exists, render it normally
// 3. If not exist redirect to login route

import { Navigate } from "react-router-dom"
import { getToken } from "../utils"

function AuthRoute ({ children }) {
  const isToken = getToken()
  if (isToken) {
    return <>{children}</>
  } else {
    return (
      <>
        <Navigate to="/start" replace />
      </>
    )
  }
}

export default AuthRoute
