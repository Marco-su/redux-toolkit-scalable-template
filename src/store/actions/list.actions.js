import axios from "axios";
import { setList } from "../reducers/list.reducer";

const URL = "https://jsonplaceholder.typicode.com/users";

export const axiosCall = () => (dispatch) => {
  axios
    .get(URL)
    .then((res) => {
      dispatch(setList(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
