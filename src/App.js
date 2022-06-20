import { Route, Switch } from "react-router-dom";
import "./App.css";
import SignIn from "./components/signin/SignIn";
import SignUp from "./components/signup/SignUp";
import Adminauth from "./components/admin/admin-auth/Admin-auth";
import CourseProvider from "./components/coursesContext/CoursesContext";
import Navbar from "./components/navbar/Navbar";
import AuthContextProvider from "./components/coursesContext/AuthContext";

function App() {
  return (
    <>
      <Navbar />
      <AuthContextProvider>
        <CourseProvider>
          <Switch>
            <Route exact path="/">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/admin">
              <Adminauth />
            </Route>
          </Switch>
        </CourseProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
