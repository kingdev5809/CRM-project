import React, { useEffect, useState } from "react";
import navLogo from "../images/navbar-img/image_2023-02-21_19-16-22.png";
import navLogo2 from "../images/navbar-img/nav-logo-2.png";
import userImg from "../images/navbar-img/userImg.png";
import starImg from "../images/navbar-img/starts.png";
import classesImg from "../images/navbar-img/classes.png";
import teacherImg from "../images/navbar-img/teacher.png";
import studentImg from "../images/navbar-img/student.png";
import locationImg from "../images/navbar-img/location.png";
import logoutImg from "../images/navbar-img/logout.png";
import messageImg from "../images/navbar-img/message.png";
import homeworkImg from "../images/navbar-img/homework.png";
import schelduleImg from "../images/navbar-img/scheldule.png";
import closeBtn from "../images/navbar-img/chevron-left.png";

import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../Redux/Actions/UserAction";
import { useDispatch } from "react-redux";
import barsImg from "../images/navbar-img/bars.jpg";
function Navbar() {
  const [resNavActive, setResNavActive] = useState("navbar-component");
  const [navData, setNavData] = useState([]);
  const dispatch = useDispatch();
  const LOGOUT = () => {
    dispatch(logout());
  };

  const user = JSON.parse(localStorage.getItem("userInfo"));

  const smallData = {
    rektor: [
      {
        name: "Schedule",
        img: schelduleImg,
        slug: "/admin/scheldule",
      },
      {
        name: "Classes",
        img: classesImg,
        slug: "/admin/classes",
      },
      {
        name: "Teacher",
        img: teacherImg,
        slug: "/admin/teacher",
      },
      {
        name: "Student",
        img: studentImg,
        slug: "/admin/students",
      },
      {
        name: "Location",
        img: locationImg,
        slug: "/admin/location",
      },
    ],

    teacher: [
      {
        name: "Schedule",
        img: schelduleImg,
        slug: "/teacher/scheldule",
      },
      {
        name: "Classes",
        img: classesImg,
        slug: "/teacher/classes",
      },
      
      // {
      //   name: "Teacher",
      //   img: teacherImg,
      //   slug: "/teacher/teacher",
      // },
      // {
      //   name: "Student",
      //   img: studentImg,
      //   slug: "/teacher/students",
      // },
    ],

    student: [
      {
        name: "Schedule",
        img: schelduleImg,
        slug: "/student/scheldule",
      },
      {
        name: "Classes",
        img: classesImg,
        slug: "/student/classes",
      },
      {
        name: "Homework",
        img: homeworkImg,
        slug: "/student/homework",
      },
      {
        name: "Message",
        img: messageImg,
        slug: "/student/message",
      },
    ],
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.rektor) {
      setNavData(smallData.rektor);
    } else if (user?.teacher) {
      setNavData(smallData.teacher);
    } else if (user?.student) {
      setNavData(smallData.student);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className={resNavActive}>
      <div
        onClick={() => setResNavActive("navbar-component active")}
        className="response-nav-open"
      >
        <span>
          <img src={barsImg} alt="" />
        </span>
      </div>

      <div className="deskop-nav">
        <div className="navbar-header">
          <div
            onClick={() => setResNavActive("navbar-component")}
            className="response-nav-close"
          >
            <img src={closeBtn} alt="" />
          </div>
          <div className="box-1">
            <img className="image1" src={navLogo} alt="" />
            <img className="image2" src={navLogo2} alt="" />
          </div>
          <div className="box-2">
            <img className="userImg" src={userImg} alt="" />
            <h2>Muzzaffar Holmatov</h2>
            <h3>
              {user?.rektor ? "ADMIN" : user?.teacher ? "TEACHER" : "STUDENT"}
            </h3>
            <img className="starImg" src={starImg} alt="" />
          </div>
        </div>

        <div className="navbar-main">
          <ul>
            {navData.map((item) => (
              <li onClick={() => setResNavActive("navbar-component")}>
                <NavLink to={item.slug}>
                  <span>
                    <img src={`${item.img}`} alt="" />
                  </span>
                  <p>{item.name}</p>
                </NavLink>
              </li>
            ))}

            <li onClick={() => setResNavActive("navbar-component")}>
              <NavLink to={"/login"}>
                <span>
                  <img src={logoutImg} alt="" />
                </span>
                <p onClick={LOGOUT}>Log out</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="mobile-nav">
        <ul>
          {navData.map((item) => (
            <li className="list ">
              <NavLink
                to={item.slug}
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <span className="icon">
                  <img src={item.img} alt="" />
                </span>
                <span className="text">{item.name}</span>
              </NavLink>
            </li>
          ))}

          <li className="list ">
            <NavLink
              to={"/login"}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <span className="icon">
                <img src={logoutImg} alt="" />
              </span>
              <span onClick={LOGOUT} className="text">
                Log out
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
