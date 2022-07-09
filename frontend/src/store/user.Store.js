import { makeAutoObservable } from "mobx"
import { http } from "../utils"

class UserStore {
  constructor() {
    //  make data responsive
    makeAutoObservable(this)
  }

  getUserInfo = async () => {
    const res = await http.get("user/dashboard/account")
    console.log(res)
    return res.data
  };
  editeUserInfo = async ({ firstname, lastname, email, school }) => {
    const res = await http.post("user/dashboard/account_update",
      {
        firstname: firstname,
        lastname: lastname,
        email: email,
        school: school
      })
    console.log("success" + res)
  };
}

export default UserStore