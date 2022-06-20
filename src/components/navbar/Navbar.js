import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../coursesContext/AuthContext";

const Navbar = () => {
  const authCtx = useContext(authContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-warning py-3">
        <div class="container">
          <Link class="navbar-brand">REACTAPP</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              {!isLoggedIn && (
                <>
                  <li class="nav-item me-4">
                    <Link class="nav-link " aria-current="page" to="/">
                      SIGN IN
                    </Link>
                  </li>

                  <li class="nav-item me-4">
                    <Link class="nav-link " aria-current="page" to="/signup">
                      SIGN UP
                    </Link>
                  </li>
                  <li class="nav-item me-4">
                    <Link class="nav-link" aria-current="page" to="/admin">
                      ADMIN
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
