import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as courseClient from "../Courses/client";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({ name: "" }); // courses.find((c) => c._id === courseId);
  const fetchAllCourses = async () => {
    const courses = await courseClient.fetchAllCourses();
    setCourses(courses);
  };
  const delteteCourse = async (courseId: string) => {
    const courses = await courseClient.deleteCourse(courseId);
    setCourses(courses);
  };
  const addCourse = async () => {
    const courses = await courseClient.createCourse(course);
    setCourses(courses);
  };
  useEffect(() => {
    fetchAllCourses();
  }, []);
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses (12)</h2>
      <hr />
      <input
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        value={course.name}
        type="text"
        className="form-control"
        placeholder="Course Name"
      />
      <button onClick={addCourse} className="btn btn-primary">
        Add Course
      </button>
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course: any) => (
            <div className="col" style={{ width: "350px" }}>
              <div className="card">
                <img
                  src="/images/reactjs.jpg"
                  className="card-img-top"
                  style={{ maxHeight: "150px" }}
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.name}
                  </Link>
                  <p className="card-text">Full Stack software developer</p>
                  <button
                    onClick={() => delteteCourse(course._id)}
                    className="btn btn-danger float-end"
                  >
                    Delete
                  </button>
                  <Link to={"#"} className="btn btn-primary">
                    Go
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
