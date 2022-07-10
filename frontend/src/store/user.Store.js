import { makeAutoObservable } from "mobx"
import { http } from "../utils"

class UserStore {
  constructor() {
    //  make data responsive
    makeAutoObservable(this)
  }

  getUserInfo = async () => {
    const res = await http.get("user/dashboard/account")
    return res.data
  }

  editUserInfo = async ({ firstname, lastname, email, school }) => {
    const res = await http.post("user/dashboard/account_update",
      {
        firstName: firstname,
        lastName: lastname,
        email: email,
        school: school
      })
    return res.data
  }

  getCourseList = async (page) => {
    const res = await http.get("dashboard/my-courses",
      { params: { page: page - 1, size: 4 } }
    )
    return res.data
  }

  addCourse = async (id) => {
    const res = await http.get("dashboard/add", { params: { course_id: id } })
    return res.data
  }

  removeCourse = async (id) => {
    const res = await http.get("dashboard/remove", { params: { course_id: id } })
    return res.data
  }
}

export default UserStore