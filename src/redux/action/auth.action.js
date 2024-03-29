import { Logout, Signing, Signup } from "./constnace";
import axios from "../../helpers/axios";

export const signing = (user) => {
  return async (dispatch) => {
    dispatch({
      type: Signing.LOGIN_REQUEST,
    });
    await axios
      .post("/user/signing", user)
      .then((res) => {
        if (res.status === 200) {
          const { token, user } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          dispatch({
            type: Signing.LOGIN_SUCCESS,
            payload: {
              token,
              user,
            },
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: Signing.LOGIN_FAILURE,
          payload: {
            errors: error.response.data.errors,
          },
        })
      });
  };
};
export const isUserLoggedIn = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const user = JSON.parse(localStorage.getItem("user"));
        dispatch({
          type: Signing.LOGIN_SUCCESS,
          payload: {
            user,
            token,
          },
        });
      } else {
        dispatch({
          type: Signing.LOGIN_FAILURE,
          payload: {
            error: "Failed to login",
          },
        });
      }
    } catch (error) {}
  };
};
export const signup = (user) => {
  return async (dispatch) => {
    dispatch({
      type: Signup.SIGNUP_REQUEST,
    });
    await axios
      .post("/user/signup", { ...user })
      .then((res) => {
        dispatch({
          type: Signup.SIGNUP_SUCCESS,
          payload: {
            message: res.data.message,
            user: res.data.user,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: Signup.SIGNUP_FAILURE,
          payload: {
            errors: error.response.data.errors,
          },
        });
      });
  };
};
export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: Logout.LOGOUT_REQUEST,
      });
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.reload();
      dispatch({
        type: Logout.LOGOUT_SUCCESS,
      });
    } catch (error) {}
  };
};
