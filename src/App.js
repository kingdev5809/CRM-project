import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Components/Auth/Login";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Teachers from "./Layout/userAdmin/Teachers/Teachers";
import Students from "./Layout/userAdmin/Students/Students";
import Location from "./Layout/userAdmin/Location/Location";
import Classes from "./Layout/userAdmin/Group/Classes";
import Schedule from "./Layout/userAdmin/Schedule/Schedule";
import { USER_LOGIN_SUCCESS } from "./Redux/Constants/UserConstants";
import StudentsSchedule from "./Layout/userStudent/Schedule/StudentsSchedule";
import StudentsClasses from "./Layout/userStudent/Group/StudentClasses.js";
import MessagePage from "./Layout/userStudent/Message Page/MessagePage";
import StudentHomework from "./Layout/userStudent/Homework Page/StudentHomework";
import Homeworks from "./Layout/userStudent/Homework Page/components/Homeworks";
import Message from "./Layout/userStudent/Message Page/Message";
import TeacherSchedule from "./Layout/userTeacher/Schedule/TeacherSchedule";
import TeacherClasses from "./Layout/userTeacher/Group/TeacherClasses";
import GroupStudents from "./Layout/userAdmin/Group/GroupStudents";
import TeacherGroupStudents from "./Layout/userTeacher/Group/TeacherGroupStudents";
import PageNotFound from "./Components/Page404/PageNotFound";
import TeacherMessagePage from "./Layout/userTeacher/Message Page/TeacherMessagePage";
import TeacherHomeworkPage from "./Layout/userTeacher/Homework Page/TeacherHomeworkPage";
import TeacherHomeworks from "./Layout/userTeacher/Homework Page/components/TeacherHomeworks";
const Routing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    if (user?.msg) {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: user });
      if (user?.rektor) {
        navigate("/admin/schedule");
      } else if (user?.teacher) {
        navigate("/teacher/schedule");
      } else if (user?.student) {
        navigate("/student/schedule");
      }
    } else {
      navigate("/login");
    }
  }, []);

  function AdminElement({ children }) {
    if (user?.rektor) {
      return <>{children}</>;
    } else {
      navigate("/notFound");
    }
  }

  function TeacherElement({ children }) {
    if (user?.teacher) {
      return <>{children}</>;
    } else {
      navigate("/notFound");
    }
  }

  function StudentElement({ children }) {
    if (user?.student) {
      return <>{children}</>;
    } else {
      navigate("/notFound");
    }
  }
  return (
    <Routes>
      {/* admin page start */}
      <Route
        path="/admin/schedule"
        element={
          <AdminElement>
            <Schedule />
          </AdminElement>
        }
      />
      <Route
        path="/admin/classes"
        element={
          <AdminElement>
            <Classes />
          </AdminElement>
        }
      />

      <Route
        path="/admin/classes/:token"
        element={
          <AdminElement>
            <GroupStudents />
          </AdminElement>
        }
      />
      <Route
        path="/admin/teacher"
        element={
          <AdminElement>
            <Teachers />
          </AdminElement>
        }
      />
      <Route
        path="/admin/students"
        element={
          <AdminElement>
            <Students />
          </AdminElement>
        }
      />
      <Route
        path="/admin/location"
        element={
          <AdminElement>
            <Location />
          </AdminElement>
        }
      />
      {/* admin page end */}

      {/* teacher page start */}
      <Route
        path="/teacher/schedule"
        element={
          <TeacherElement>
            <TeacherSchedule />
          </TeacherElement>
        }
      />

      <Route
        path="/teacher/classes"
        element={
          <TeacherElement>
            <TeacherClasses />
          </TeacherElement>
        }
      />

      <Route
        path="/teacher/classes/:token"
        element={
          <TeacherElement>
            <TeacherGroupStudents />
          </TeacherElement>
        }
      />

      <Route
        path="/teacher/message"
        element={
          <TeacherElement>
            <TeacherMessagePage />
          </TeacherElement>
        }
      />

      <Route
        path="/teacher/homework"
        element={
          <TeacherElement>
            <TeacherHomeworkPage />
          </TeacherElement>
        }
      />

      <Route
        path="/teacher/homework/:token"
        element={
          <TeacherElement>
            <TeacherHomeworks />
          </TeacherElement>
        }
      />

      {/* teacher page end */}

      {/* student page start */}
      <Route
        path="/student/schedule"
        element={
          <StudentElement>
            <StudentsSchedule />
          </StudentElement>
        }
      />

      <Route
        path="/student/message"
        element={
          <StudentElement>
            <MessagePage />
          </StudentElement>
        }
      />

      <Route
        path="/student/classes"
        element={
          <StudentElement>
            <StudentsClasses />
          </StudentElement>
        }
      />

      <Route
        path="/student/homework"
        element={
          <StudentElement>
            <StudentHomework />
          </StudentElement>
        }
      />
      <Route
        path="/student/homework/:token"
        element={
          <StudentElement>
            <Homeworks />
          </StudentElement>
        }
      />

      <Route
        path="/student/message/:token"
        element={
          <StudentElement>
            <Message />
          </StudentElement>
        }
      />

      {/* student page end */}

      <Route path="/notFound" element={<PageNotFound />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
};
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
