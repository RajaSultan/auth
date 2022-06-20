import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormValidations from "../../Hooks/FormValidations";
import Navbar from "../navbar/Navbar";

const SignUp = () => {
  const [notMatched, setNotMatched] = useState(false);
  const [data, setData] = useState("");

  const {
    value: firstName,
    valueChange: inputFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputBlur: firstNameBlur,
    reset: resetFirstName,
  } = FormValidations((ele) => {
    return ele.trim() !== "";
  });

  const {
    value: lastName,
    valueChange: inputLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputBlur: lastNameBlur,
    reset: resetLastName,
  } = FormValidations((ele) => {
    return ele.trim() !== "";
  });
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
  const {
    value: confirmPassword,
    valueChange: inputConfirmPassword,
    isValid: confirmpasswordIsValid,
    hasError: confirmPasswordHasError,
    inputBlur: confirmPasswordBlur,
    reset: resetConfirmPassword,
  } = FormValidations((ele) => {
    return ele.trim() !== "";
  });
  async function signUpData(e) {
    e.preventDefault();
    if (
      !firstNameIsValid ||
      !lastNameIsValid ||
      !emailIsValid ||
      !passwordIsValid ||
      !confirmpasswordIsValid
    ) {
      return;
    }
    if (password !== confirmPassword) {
      setNotMatched(true);
      return;
    } else {
      setData({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });

      alert("Data Added Successfully !");
    }
  }
  const res = fetch(
    "https://react-app-920e6-default-rtdb.firebaseio.com/users.json",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "applications/json",
      },
    }
  );

  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 mb-5">
            {notMatched && (
              <p className="text-danger">Password is not Matched</p>
            )}
            <div className="card shadow">
              <div className="card-header bg-warning py-3 ps-5 ">
                <h6>USER SIGNUP FORM</h6>
              </div>
              <div className="card-body p-5">
                <form onSubmit={signUpData}>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      className="form-control"
                      id="exampleInputPassword1"
                      onChange={inputFirstName}
                      onBlur={firstNameBlur}
                    />
                    {firstNameHasError && (
                      <p className="text-danger">Enter First Name</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      onChange={inputLastName}
                      onBlur={lastNameBlur}
                      value={lastName}
                    />
                    {lastNameHasError && (
                      <p className="text-danger">Enter Last Name</p>
                    )}
                  </div>
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
                  <div className="mb-3">
                    <label for="exampleInputPassword2" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword2"
                      onChange={inputConfirmPassword}
                      onBlur={confirmPasswordBlur}
                      value={confirmPassword}
                    />
                    {confirmPasswordHasError && (
                      <p className="text-danger">Enter Confirm Password</p>
                    )}
                  </div>
                  <div className="signin-button d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-warning w-100 py-2 mt-3 "
                    >
                      SIGN UP
                    </button>
                  </div>
                </form>
                <div className="row mt-5 ">
                  <div className="no-account d-flex">
                    <p className="me-2">Already Have an account?</p>
                    <Link to="/" className="text-decoration-none text-dark">
                      Signin
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
