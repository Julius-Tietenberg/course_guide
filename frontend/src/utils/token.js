// Encapsulate localstorage access token

const TOKEN_KEY = "userkey"

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}
const setToken = (token) => {
  if (token) { return localStorage.setItem(TOKEN_KEY, token) }
}
const clearToken = () => {
  return localStorage.removeItem(TOKEN_KEY)
}
export { getToken, setToken, clearToken }