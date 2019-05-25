import {
  USERNAME_CHANGE,
  PASSWORD_CHANGE,
  USER_ATTEMPT,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL
} from "../actions/types";
const INITIAL_STATE = {
  username: "",
  password: "",
  loading: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_CHANGE:
      return { ...state, username: action.payload };
      break;
    case PASSWORD_CHANGE: {
      return {
        ...state,
        password: action.payload
      };
    }
    case USER_ATTEMPT: {
      return { ...state, loading: true };
    }
    case USER_LOGIN_SUCCESS: {
      return { ...state, INITIAL_STATE };
    }

    case USER_LOGIN_FAIL: {
      return { ...state, loading: false, password: "",error:"نام کاربری و یا پسورد اشتباه میباشد" };
    }
    default:
      return state;
      break;
  }
};
