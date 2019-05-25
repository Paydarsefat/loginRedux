import {
  USERNAME_CHANGE,
  PASSWORD_CHANGE,
  USER_ATTEMPT,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILD
} from "./types";

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
export const userlogin = ({ username, password }) => {
  return dispatch => {
    dispatch({ type: "USER_ATTEMPT" });
    fetch("http://192.168.1.10/student/user_login.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson === "Data Matched") {
          loginUserSuccess(dispatch);
        } else {
          loginUserFaild(dispatch);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
};
const loginUserSuccess = dispatch => {
  dispatch({ type: "USER_LOGIN_SUCCESS" });
};
const loginUserFaild = dispatch => {
  dispatch({ type: "USER_LOGIN_FAILD" });
};
