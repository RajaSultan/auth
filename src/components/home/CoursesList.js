import React, { useContext } from "react";
import { coursesContext } from "../coursesContext/CoursesContext";

const CoursesList = () => {
  const { courses } = useContext(coursesContext);
  return (
    <>
      {courses.length === 0 ? (
        <p>No List To Display</p>
      ) : (
        <ul>
          {courses.map((ele) => (
            <h6 className="mt-4">{ele.name}</h6>
          ))}
        </ul>
      )}
    </>
  );
};

export default CoursesList;
