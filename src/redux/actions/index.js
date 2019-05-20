import { USERNAME_CHANGE, PASSWORD_CHANGE } from "./types";

export const usernmaechange = text => {
  return {
    type: "USERNAME_CHANGE",
    payload: text
  };
};
export const passwordchange = text => {
  return {
    type: "PASSWORD_CHANGE",
    payload: text
  };
};
