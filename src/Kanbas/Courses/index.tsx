import { Route, Routes, useParams } from "react-router";
import courses from "../Database/courses.json";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((c) => c._id === courseId);
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
