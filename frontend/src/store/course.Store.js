
import { makeAutoObservable } from "mobx"
import { http } from "../utils"

class CourseStore {
  constructor() {
    //  make data responsive
    makeAutoObservable(this)
  }

  getAllCourse = async (page, courseName, profName, sort) => {
    //   call course API
    const res = await http.get("course/search",
      { params: { page: page - 1, size: 6, course_name: courseName, prof_name: profName, sort: sort } })
    return res.data
  };

  getCourseDetail = async (id) => {
    const res = await http.get("course/course_detail", { params: { id: id } })
    return res.data
  }

}
export default CourseStore