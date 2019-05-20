import { USERNAME_CHANGE, PASSWORD_CHANGE,USER_ATTEMPT } from "../actions/types";
const INITIAL_STATE = {
  username: "",
  password: "",
  loading:false
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
    case USER_ATTEMPT :{
        return{...state,loading:true}
    }

    default:
      return state;
      break;
  }
};
