import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import Dashboard from "../admin-Dashboard/Dashboard";

const Adminauth = () => {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userNotFound, setUserNotFound] = useState(false);
  const [homeComp, setHomeComp] = useState(false);
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };
  const inputPassword = (event) => {
    setPassword(event.target.value);
  };
  async function getAdminData(e) {
    e.preventDefault();

    const res = await fetch(
      "https://react-app-920e6-default-rtdb.firebaseio.com/admin.json"
    );
    const data = await res.json();
    for (const user in data) {
      if (
        data[user].email !== userEmail &&
        data[user].password !== userPassword
      ) {
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
                  <h6>ADMIN SIGNIN FORM</h6>
                </div>
                <div className="card-body p-5">
                  <form onSubmit={getAdminData}>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        onChange={inputEmail}
                        className="form-control"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Password
                      </label>
                      <input
                        onChange={inputPassword}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {homeComp && <Dashboard />}
    </>
  );
};

export default Adminauth;
