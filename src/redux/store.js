import { createStore } from "redux";
import gifReducer from "./gifs/gifReducer";

const store = createStore(gifReducer);

export default store;
