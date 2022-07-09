// 把所有的模块做统一处理
// 导出一个统一的方法useStore

import React from "react"
import LoginStore from "./login.Store"
import RegisterStore from "./register.Store"
import CourseStore from "./course.Store"
import RatingStore from "./rating.Store"
import UserStore from "./user.Store"


class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
    this.registerStore = new RegisterStore()
    this.courseStore = new CourseStore()
    this.ratingStore = new RatingStore()
    this.userStore = new UserStore()
  }
}

// 实例化根
// 导出useStore context

const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }
