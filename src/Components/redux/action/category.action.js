import axios from "../../helpers/axios";
import { categoryConstance } from "./constnace";

export const getAllCategory = () => {
  return async (dispatch) => {
    dispatch({
      type: categoryConstance.GET_ALL_CATEGORY_REQUEST,
    });
    try {
      const res = await axios.get("/category");
      if (res.status === 200) {
        dispatch({
          type: categoryConstance.GET_ALL_CATEGORY_SUCCESS,
          payload: {
            category: res.data.category,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
