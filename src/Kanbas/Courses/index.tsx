import { Route, Routes, useParams } from "react-router";
// import courses from "../Database/courses.json";
import { useState, useEffect } from "react";
import * as courseClient from "./client";

function Courses() {
  // http://localhost:4000/api/courses/RS101
  const { courseId } = useParams();
  const [course, setCourse] = useState({ name: "" }); // courses.find((c) => c._id === courseId);
  const fetchCourse = async () => {
    const course = await courseClient.fetchCourseById(courseId);
    setCourse(course);
  };

  useEffect(() => {
    fetchCourse();
  }, [courseId]);

  return (
    <div>
      <h1>Courses / {course?.name}</h1>
      <Routes>
        <Route path="/Home" element={<h2>Home</h2>} />
        <Route path="/Modules" element={<h2>Modules</h2>} />
        <Route path="/Grades" element={<h2>Grades</h2>} />
        <Route path="/Assignments" element={<h2>Assignments</h2>} />
      </Routes>
      <pre>{JSON.stringify(course, null, 2)}</pre>
    </div>
  );
}

export default Courses;
