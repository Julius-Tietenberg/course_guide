// register module
import { makeAutoObservable } from "mobx"
import { http } from "../utils"

class CourseStore {
  constructor() {
    //  make data responsive
    makeAutoObservable(this)
  }
  // register function
  getAllCourse = async () => {
    //   call register API
    const res = await http.get("course/search")
    console.log(res)
    return res.data
  };
}
export default CourseStore