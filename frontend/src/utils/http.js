// encapsulate axios
import axios from "axios"
import history from "./history"
import { getToken } from "./token"

const http = axios.create({
  baseURL: "https://course-guide-ude-server.herokuapp.com",
  timeout: 5000,
})

// add request interceptor
http.interceptors.request.use(
  (config) => {
    // if login set token as requst header
    const token = getToken()
    if (token) {
      config.headers.authorization = `authorization ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// add response interceptor
http.interceptors.response.use(
  (response) => {
    // All status codes in the 2xx range will trigger this function.
    // do something with the response data
    return response
  },
  (error) => {
    console.log(error.response)
    if (error.response.data === "Forbidden") {
      alert('Session was already expired, please log in again ')
      history.push("/login")
    }
    // Status codes outside the 2xx range will trigger this function.
    // do something with the response error
    return Promise.reject(error)
  }
)

export { http }