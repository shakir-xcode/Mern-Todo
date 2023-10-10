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
        authStateManager.setMessage("successfully registered");
        authStateManager.setIsLoggedIn(true);
      } else {
        // console.log("here 2");
        authStateManager.setMessage("something went wrong");
      }
      authStateManager.setIsLoading(false);
    })
    .catch((err) => {
      // console.log(err.response.status);
      // console.log(err);
      // errorCallback(err.response.data.message);
      authStateManager.setMessage(
        err.response?.data.message || "something went wrong"
      );
      authStateManager.setIsLoading(false);
    });
};

export const loginUser = (user) => {
  const url = "http://localhost:4000/auth/login";
  authStateManager.setIsLoading(true);
  axios
    .post(url, user)
    .then((res) => {
      // console.log(res.status);
      // console.log(res.data);
      if (res.status === 200) {
        // console.log("status --------- ", res.status);
        authStateManager.setUser(res.data);
        authStateManager.setIsLoggedIn(true);
        authStateManager.setMessage("successfully logged In");
      } else {
        // console.log("here 2");
        authStateManager.setMessage("something went wrong");
      }
      authStateManager.setIsLoading(false);
    })
    .catch((err) => {
      // console.log(err.response.data.message);
      authStateManager.setMessage(
        err.response?.data.message || "something went wrong"
      );
      authStateManager.setIsLoading(false);
    });
};
