import React from "react";
import navLogo from "../images/navbar-img/image_2023-02-21_19-16-22.png";
import navLogo2 from "../images/navbar-img/nav-logo-2.png";
import userImg from "../images/navbar-img/userImg.png";
import starImg from "../images/navbar-img/starts.png";
import classesImg from "../images/navbar-img/classes.png";
import teacher from "../images/navbar-img/teacher.png";
import studentImg from "../images/navbar-img/student.png";
import location from "../images/navbar-img/location.png";
import logoutImg from "../images/navbar-img/logout.png";
import schelduleImg from "../images/navbar-img/scheldule.png";

import {
  classesIcon,
  homeworkIcon,
  locationIcon,
  logoutIcon,
  schelduleIcon,
  studentIcon,
  teacherIcon,
} from "./icons/svgIcons";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../Redux/Actions/UserAction";
import { useDispatch } from "react-redux";
function Navbar() {
  const dispatch = useDispatch();
  const LOGOUT = () => {
    dispatch(logout());
  };
  return (
    <div className="navbar-component">
      <div className="deskop-nav">
        <div className="navbar-header">
          <div className="box-1">
            <img className="image1" src={navLogo} alt="" />
            <img className="image2" src={navLogo2} alt="" />
          </div>
          <div className="box-2">
            <img className="userImg" src={userImg} alt="" />
            <h2>Muzzaffar Holmatov</h2>
            <h3>STUDENT</h3>
            <img className="starImg" src={starImg} alt="" />
          </div>
        </div>

        <div className="navbar-main">
          <ul>
            <li>
              <NavLink to={`/admin/scheldule`}>
                <span> {schelduleIcon} </span>
                <p>Schedule</p>
              </NavLink>
            </li>

            {/* <li>
            <Link href="#">
              <span> {homeworkIcon} </span>
              <p>Homework</p>
            </Link>
          </li> */}

            <li>
              <NavLink to={`/admin/classes`}>
                <span> {classesIcon} </span>
                <p>classes</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={`/admin/teacher`}>
                <span> {teacherIcon}</span>
                <p>teacher </p>
              </NavLink>
            </li>
            <li>
              <NavLink to={`/admin/students`}>
                <span>{studentIcon}</span>
                <p>Students </p>
              </NavLink>
            </li>
            <li>
              <NavLink to={`/admin/location`}>
                <span>{locationIcon}</span>
                <p>location</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={`/login`}>
                <span> {logoutIcon}</span>
                <p onClick={LOGOUT}>Log out </p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="mobile-nav">
        <ul>
          <li className="list ">
            <NavLink
              to={`/admin/classes`}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <span className="icon">
                <img src={classesImg} alt="" />
              </span>
              <span className="text">Home</span>
            </NavLink>
          </li>

          <li className="list-1">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={`/admin/teacher`}
            >
              <span className="icon">
                <img src={teacher} alt="" />
              </span>
              <span className="text">Teacher</span>
            </NavLink>
          </li>

          <li className="list-2">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={`/admin/scheldule`}
            >
              <span className="icon">
                <img src={schelduleImg} alt="" />
              </span>
              <span className="text">Scheldule</span>
            </NavLink>
          </li>

          <li className="list">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={`/admin/students`}
            >
              <span className="icon">
                <img src={studentImg} alt="" />
              </span>
              <span className="text">Students</span>
            </NavLink>
          </li>

          <li className="list">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={`/login`}
            >
              <span className="icon">
                <img src={logoutImg} alt="" />
              </span>
              <span className="text">Log out</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
