import React, { createContext, useState } from "react";

export const coursesContext = createContext();

const CourseProvider = (props) => {
  const [courses, setCourses] = useState([
    {
      id: "h1",
      name: "",
    },
  ]);

  const addCourses = (name) => {
    setCourses([...courses, { name }]);
  };
  return (
    <>
      <coursesContext.Provider value={{ courses, addCourses }}>
        {props.children}
      </coursesContext.Provider>
    </>
  );
};

export default CourseProvider;
