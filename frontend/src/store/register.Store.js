// register module
import { makeAutoObservable } from "mobx"
import { http } from "../utils"

class RegisterStore {
  constructor() {
    //  make data responsive
    makeAutoObservable(this)
  }
  // register function
  register = async ({ firstName,
    lastName,
    username,
    email,
    password,
    position,
    school, }) => {
    //   call register API
    await http.post("user/register", {
      firstName,
      lastName,
      username,
      email,
      password,
      position,
      school,
    })
  };
}
export default RegisterStore