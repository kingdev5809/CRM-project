import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
function PageNotFound() {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const [slug, setSlug] = useState("");

  useEffect(() => {
    if (user?.rektor) {
      setSlug("/admin/schedule");
    } else if (user?.teacher) {
      setSlug("/teacher/schedule");
    } else if (user?.student) {
      setSlug("/student/schedule");
    } else {
      setSlug("/login");
    }
  },[]);
  return (
    <div>
      <div class="flex-container">
        <div class="text-center">
          <h1>
            <span class="fade-in" id="digit1">
              4
            </span>
            <span class="fade-in" id="digit2">
              0
            </span>
            <span class="fade-in" id="digit3">
              4
            </span>
          </h1>
          <h3 class="fadeIn">PAGE NOT FOUND</h3>
          <NavLink to={slug}>
            <button type="button" name="button">
              Return To Home
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
