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
import Homeworks from "./Layout/userStudent/Homework Page/Homeworks";
import Message from "./Layout/userStudent/Message Page/Message";
const Routing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    if (user?.rektor) {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: user });
      navigate("/admin/scheldule");
    } else if (user?.techer) {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: user });
      navigate("/teacher/scheldule");
    } else if (user?.student) {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: user });
      navigate("/student/scheldule");
    } else {
      navigate("/login");
    }
  }, []);

  function AdminElement({ children }) {
    if (user?.rektor) {
      return <>{children}</>;
    } else {
      navigate("/login");
    }
  }

  function TeacherElement({ children }) {
    if (user?.techer) {
      return <>{children}</>;
    } else {
      navigate("/login");
    }
  }

  function StudentElement({ children }) {
    if (user?.student) {
      return <>{children}</>;
    } else {
      navigate("/login");
    }
  }
  return (
    <Routes>
      <Route
        path="admin/scheldule"
        element={
          <AdminElement>
            <Schedule />
          </AdminElement>
        }
      />
      <Route
        path="admin/classes"
        element={
          <AdminElement>
            <Classes />
          </AdminElement>
        }
      />
      <Route
        path="admin/teacher"
        element={
          <AdminElement>
            <Teachers />
          </AdminElement>
        }
      />
      <Route
        path="admin/students"
        element={
          <AdminElement>
            <Students />
          </AdminElement>
        }
      />
      <Route
        path="admin/location"
        element={
          <AdminElement>
            <Location />
          </AdminElement>
        }
      />

      {/* <Route 
          path="teacher/scheldule"
          element={
            <TeacherElement>
                
            </TeacherElement>
          }
          /> */}

      <Route
        path="student/scheldule"
        element={
          <StudentElement>
            <StudentsSchedule />
          </StudentElement>
        }
      />

      <Route
        path="student/message"
        element={
          <StudentElement>
            <MessagePage />
          </StudentElement>
        }
      />

      <Route
        path="student/classes"
        element={
          <StudentElement>
            <StudentsClasses />
          </StudentElement>
        }
      />

      <Route
        path="student/homework"
        element={
          <StudentElement>
            <StudentHomework />
          </StudentElement>
        }
      />
      <Route
        path="student/homework/engelska"
        element={
          <StudentElement>
            <Homeworks />
          </StudentElement>
        }
      />

      <Route
        path="student/message/engelska"
        element={
          <StudentElement>
            <Message />
          </StudentElement>
        }
      />

      <Route path="login" element={<Login />} />
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
