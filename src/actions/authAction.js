import axios from "axios";
import { signInDetailsURL, signOutDetailsURL, signUpDetailsURL } from "../api";

export const authSignInAction = (data) => async (dispatch) => {
  const authData = await axios.post(signInDetailsURL(), data);

  if (authData.data.token) {
    dispatch({
      type: "SIGNIN",
      payload: {
        authDetails: authData.data,
      },
    });

    dispatch({
      type: "USER_AUTHENTICATED",
    });
  } else {
    dispatch({
      type: "SIGNIN",
      payload: {
        authDetails: authData.data,
      },
    });

    dispatch({
      type: "USER_UNAUTHENTICATED",
    });
  }
};

export const authSignOutAction = () => async (dispatch) => {
  dispatch({
    type: "SIGN_OUT",
  });
};

export const authSignUpAction = (data) => async () => {
  console.log(data);
  const authData = await axios.post(signUpDetailsURL(), { data });
  // dispatch({
  //   type: "AUTH_SIGNUP",
  //   payload: {
  //     authDetails: authData.data,
  //   },
  // });
  console.log(authData);
};
