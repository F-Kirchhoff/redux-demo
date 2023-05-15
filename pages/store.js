import { configureStore } from "@reduxjs/toolkit";
import artPiecesInfoReducer from "../lib/artPiecesInfoSlice";

export default configureStore({
  reducer: {
    artPiecesInfo: artPiecesInfoReducer,
  },
});
