import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../../components/home/Home";
import FormValidations from "../../Hooks/FormValidations";

const SignIn = () => {
  const [userNotFound, setUserNotFound] = useState(false);
  const [homeComp, setHomeComp] = useState(false);

  const {
    value: email,
    valueChange: inputEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputBlur: emailBlur,
    reset: resetEmail,
  } = FormValidations((ele) => {
    return ele.trim() !== "";
  });
  const {
    value: password,
    valueChange: inputPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    inputBlur: passwordBlur,
    reset: resetPassword,
  } = FormValidations((ele) => {
    return ele.trim() !== "";
  });

  async function getFormData(e) {
    e.preventDefault();

    const res = await fetch(
      "https://react-app-920e6-default-rtdb.firebaseio.com/users.json"
    );
    const data = await res.json();
    for (const key in data) {
      if (data[key].email !== email && data[key].password !== password) {
        setUserNotFound(true);

        return;
      } else {
        return setHomeComp(true);
      }
    }
  }
  return (
    <>
      {!homeComp && (
        <div className="container mt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-5 mt-5">
              {userNotFound && <p className="text-danger">User Not Found</p>}
              <div className="card shadow">
                <div className="card-header bg-warning py-3 ps-5 ">
                  <h6>USER SIGNIN FORM</h6>
                </div>
                <div className="card-body p-5">
                  <form onSubmit={getFormData}>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={inputEmail}
                        onBlur={emailBlur}
                        value={email}
                      />
                      {emailHasError && (
                        <p className="text-danger">Enter Email</p>
                      )}
                      <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={inputPassword}
                        onBlur={passwordBlur}
                        value={password}
                      />
                      {passwordHasError && (
                        <p className="text-danger">Enter Password</p>
                      )}
                    </div>
                    <div className="signin-button d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-warning w-100 py-2 mt-3 "
                      >
                        SIGN IN
                      </button>
                    </div>
                  </form>
                  <div className="row mt-5 ">
                    <div className="no-account d-flex">
                      <p className="me-2">Dont have an account?</p>
                      <Link
                        to="/signup"
                        className="text-decoration-none text-dark"
                      >
                        Signup
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {homeComp && <Home />}
    </>
  );
};

export default SignIn;
