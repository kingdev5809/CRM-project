import React from "react";
import navLogo from "../images/navbar-img/image_2023-02-21_19-16-22.png";
import navLogo2 from "../images/navbar-img/nav-logo-2.png";
import userImg from "../images/navbar-img/userImg.png";
import starImg from "../images/navbar-img/starts.png";
import {
  classesIcon,
  homeworkIcon,
  locationIcon,
  logoutIcon,
  schelduleIcon,
  studentIcon,
  teacherIcon,
} from "./icons/svgIcons";
import { Link } from "react-router-dom";
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
              <Link to={`/admin/scheldule`}>
                <span> {schelduleIcon} </span>
                <p>Schedule</p>
              </Link>
            </li>

            {/* <li>
            <Link href="#">
              <span> {homeworkIcon} </span>
              <p>Homework</p>
            </Link>
          </li> */}

            <li>
              <Link to={`/admin/classes`}>
                <span> {classesIcon} </span>
                <p>classes</p>
              </Link>
            </li>
            <li>
              <Link to={`/admin/teacher`}>
                <span> {teacherIcon}</span>
                <p>teacher </p>
              </Link>
            </li>
            <li>
              <Link to={`/admin/students`}>
                <span>{studentIcon}</span>
                <p>Students </p>
              </Link>
            </li>
            <li>
              <Link to={`/admin/location`}>
                <span>{locationIcon}</span>
                <p>location</p>
              </Link>
            </li>
            <li>
              <Link to={`/login`}>
                <span> {logoutIcon}</span>
                <p onClick={LOGOUT}>Log out </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
