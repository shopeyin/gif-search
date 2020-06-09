import { GET_GIFS } from "./gifTypes";
import { GET_GIFS_SUCCESS } from "./gifTypes";
import { GET_GIFS_SEARCHFIELD } from "./gifTypes";
const initialState = {
  loading: false,
  gifs: [],
  searchField: "",
};
const gifReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GIFS:
      return {
        ...state,
        loading: true,
      };

    case GET_GIFS_SUCCESS:
      return {
        loading: false,
        gifs: action.payload,
        error: "",
      };

    case GET_GIFS_SEARCHFIELD:
      return {
        loading: false,
        gifs: [],
        searchField: action.payload,
      };

    default:
      return state;
  }
};

export default gifReducer;
