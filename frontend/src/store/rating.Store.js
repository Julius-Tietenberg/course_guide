
import { makeAutoObservable } from "mobx"
import { http } from "../utils"

class RatingStore {
  constructor() {
    //  make data responsive
    makeAutoObservable(this)
  }

  getRatingMessage = async (id, token) => {
    const res = await http.get("ratings/ratings_by_ic_course",
      {
        params: { id_course: id },
      })
    return res.data
  };

  addRating = async ({ content, stars }, id, token) => {
    const res = await http.post("ratings/add", { content, stars },
      {
        params: { id_course: id },
      }).then()
  }
}
export default RatingStore