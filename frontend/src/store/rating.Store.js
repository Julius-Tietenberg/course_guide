
import { makeAutoObservable } from "mobx"
import { http } from "../utils"

class RatingStore {
  constructor() {
    //  make data responsive
    makeAutoObservable(this)
  }

  getRatingMessage = async (id, page) => {
    const res = await http.get("ratings/ratings_by_ic_course",
      {
        params: { id_course: id, page: page - 1, size: 6 },
      })
    return res.data
  };

  addRating = async ({ content, stars }, id) => {
    await http.post("ratings/add", { content, stars },
      {
        params: { id_course: id },
      }).then()
  }
}
export default RatingStore