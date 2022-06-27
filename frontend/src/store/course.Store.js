
import { makeAutoObservable } from "mobx"
import { http } from "../utils"

class CourseStore {
  constructor() {
    //  make data responsive
    makeAutoObservable(this)
  }

  getAllCourse = async (page, courseName) => {
    //   call course API
    const res = await http.get("course/search", { params: { page: page - 1, size: 12, course_name: courseName } })
    console.log(res)
    return res.data
  };

}
export default CourseStore