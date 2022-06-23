// encapsulate axios
import axios from "axios"

const http = axios.create({
  baseURL: "http://localhost:9000",
  timeout: 5000,
})

// add response interceptor
http.interceptors.response.use(
  (response) => {
    // All status codes in the 2xx range will trigger this function.
    // do something with the response data
    return response
  },
  (error) => {
    // Status codes outside the 2xx range will trigger this function.
    // do something with the response error
    if (error.response.status === 500) {
      console.log(error.response.data.message)
    }
    return Promise.reject(error)
  }
)

export { http }