// login module
import { makeAutoObservable } from "mobx"
import { http } from "../utils"
import { setToken, getToken, clearToken } from "../utils"

class LoginStore {
  token = getToken() || "";
  constructor() {
    makeAutoObservable(this)
  }

  // login function
  login = async ({ username, password }) => {
    //   call login API
    const res = await http.post("user/login", {
      username,
      password,
    })
    console.log(res)
    // get token
    this.token = res.data.token
    // store token in localstorage
    setToken(this.token)
  };

  // login out function
  logout = () => {
    this.token = ""
    clearToken()
  };
}
export default LoginStore
