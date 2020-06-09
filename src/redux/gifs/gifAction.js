import { GET_GIFS } from "./gifTypes";
import { GET_GIFS_SUCCESS } from "./gifTypes";
import { GET_GIFS_SEARCHFIELD } from "./gifTypes";

export const getGifRequest = () => {
  return {
    type: GET_GIFS,
  };
};

export const getGifSuccess = (gifs) => {
  return {
    type: GET_GIFS_SUCCESS,
    payload: gifs,
  };
};

export const getSearchField = (gifs) => {
  return {
    type: GET_GIFS_SEARCHFIELD,
    payload: gifs,
  };
};
