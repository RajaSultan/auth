import React, { useContext, useState } from "react";
import { coursesContext } from "../coursesContext/CoursesContext";
import CoursesList from "./CoursesList";

const Home = () => {
  const { addCourses } = useContext(coursesContext);
  const [newCourse, setNewCourse] = useState({
    name: "",
  });
  const onInputChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };
  const { name } = newCourse;
  const submitData = (e) => {
    e.preventDefault();
    addCourses(name);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-8">
            <h3 className="text-center mb-5">Courses Details</h3>
            <div className="card shadow">
              <div className="card-header py-3 bg-warning">
                Please Add Your Courses
              </div>
              <div className="card-body">
                <form onSubmit={submitData}>
                  <div class="row g-3 mt-3 mb-5">
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Course Name"
                        aria-label="First name"
                        name="name"
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                    <div className="col">
                      <button className="btn btn-warning" type="submit">
                        Add Course
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div className="card shadow mt-4">
              <div className="card-header bg-warning py-3">
                Apply For Green Pass
              </div>
              <div className="card-body pt-4 pb-3">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Apply For Green Pass"
                    aria-label="First name"
                    name="name"
                  />
                </div>
                <div className="col mt-4">
                  <button className="btn btn-warning" type="submit">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row  mt-5">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-header py-3 bg-warning">
                Added Courses Details
                <CoursesList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
