
import { makeAutoObservable } from "mobx"
import { http } from "../utils"

class CourseStore {
  constructor() {
    //  make data responsive
    makeAutoObservable(this)
  }

  getAllCourse = async (page) => {
    //   call course API
    const res = await http.get("course/search", { params: { page: page, size: 12 } })
    console.log(res)
    return res.data
  };
}
export default CourseStore