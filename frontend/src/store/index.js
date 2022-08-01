// handle all store modules uniformly

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

// instantiate rootStore 
// export useStore context

const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }
