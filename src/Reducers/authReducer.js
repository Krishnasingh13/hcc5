const initialState = {
  authDetails: {},
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        authDetails: action.payload.authDetails,
      };
    case "USER_AUTHENTICATED":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "USER_UNAUTHENTICATED":
      return {
        ...state,
        isLoggedIn: false,
      };
    case "SIGN_OUT":
      return {
        ...state,
        authDetails: {},
        isLoggedIn: false,
      };

    // case AUTH_LOGOUT:
    //   return initialState;
    case "AUTH_SIGNUP":
      return { ...state };
    default:
      return state;
  }
};

export default authReducer;
// 9993171695
