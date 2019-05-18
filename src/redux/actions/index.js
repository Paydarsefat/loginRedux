import {USERNAME_CHANGE} from "./types";

export const usernmaechange = text => {
  return {
    type: 'USERNAME_CHANGE',
    payload: text
  };
};
