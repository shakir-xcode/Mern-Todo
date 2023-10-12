import axios from "axios";

/*
201: successfully registered
200: successfully logged In

409: user already exists
401: invalid credentials
*/

let authStateManager;

export function initializeAuth(values) {
  authStateManager = values;
}

export const signUpUser = (user) => {
  const url = "http://localhost:4000/auth/register";
  authStateManager.setIsLoading(true);
  axios
    .post(url, user)
    .then((res) => {
      if (res.status === 201) {
        // console.log("here 1");
        authStateManager.setUser(res.data);
        authStateManager.setMessage({
          code: 200,
          message: "successfully registered",
          isActive: true,
        });
        authStateManager.setIsLoggedIn(true);
      } else {
        // console.log("here 2");
        authStateManager.setMessage({
          code: 400,
          message: "something went wrong",
          isActive: true,
        });
      }
      authStateManager.setIsLoading(false);
    })
    .catch((err) => {
      // console.log(err.response.status);
      // console.log(err);
      // errorCallback(err.response.data.message);
      authStateManager.setMessage({
        code: 400,
        message: err.response?.data.message || "something went wrong",
        isActive: true,
      });
      authStateManager.setIsLoading(false);
    });
};

export const loginUser = (user) => {
  const url = "http://localhost:4000/auth/login";
  authStateManager.setIsLoading(true);
  axios
    .post(url, user)
    .then((res) => {
      if (res.status === 200) {
        authStateManager.setUser(res.data);
        authStateManager.setIsLoggedIn(true);
        authStateManager.setMessage({
          code: 200,
          message: "successfully logged In",
          isActive: true,
        });
      } else {
        authStateManager.setMessage({
          code: 400,
          message: "something went wrong",
          isActive: true,
        });
      }
      authStateManager.setIsLoading(false);
    })
    .catch((err) => {
      authStateManager.setMessage({
        code: 400,
        message: err.response?.data.message || "something went wrong",
        isActive: true,
      });
      authStateManager.setIsLoading(false);
    });
};
