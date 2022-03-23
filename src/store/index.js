import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./reducers/list.reducer";

export default configureStore({
  reducer: { myReducer },
});
