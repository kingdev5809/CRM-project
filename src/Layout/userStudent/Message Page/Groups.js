import React from "react";
import { NavLink } from "react-router-dom";
import userImg from "../../../images/navbar-img/userImg.png";

function Groups() {
  const smalData = [
    {
      groupName: "Engelska A2",
      describtion:
        " Here you can write yo your teachers and schoolmates,your message   is visible to everyone",
      teacherName: "Shermorad Holmatov",
      teacherImg: userImg,
      slug: "englesanka",
    },

    {
      groupName: "Engelska A2",
      describtion:
        " Here you can write yo your teachers and schoolmates,your message   is visible to everyone",
      teacherName: "Shermorad Holmatov",
      teacherImg: userImg,
      slug: "englesanka",
    },

    {
      groupName: "Engelska A2",
      describtion:
        " Here you can write yo your teachers and schoolmates,your message   is visible to everyone",
      teacherName: "Shermorad Holmatov",
      teacherImg: userImg,
      slug: "englesanka",
    },

    {
      groupName: "Engelska A2",
      describtion:
        " Here you can write yo your teachers and schoolmates,your message   is visible to everyone",
      teacherName: "Shermorad Holmatov",
      teacherImg: userImg,
      slug: "englesanka",
    },

    {
      groupName: "Engelska A2",
      describtion:
        " Here you can write yo your teachers and schoolmates,your message   is visible to everyone",
      teacherName: "Shermorad Holmatov",
      teacherImg: userImg,
      slug: "englesanka",
    },
  ];

  return (
    <div className="class-sec group-cards">
      <h1>Class Groups</h1>
      <div className="items">
        {smalData.map((item) => (
          <div className="item">
            <div className="item-box">
              <h3>{item.groupName}</h3>
              <p>{item.describtion}</p>
            </div>
            <div className="user-box">
              <img src={item.teacherImg} alt="" />
              <div className="user-box-inner">
                <h4>{item.teacherName}</h4>
                <h6>Teacher class group</h6>
              </div>
            </div>

            <div className="item-box-3"></div>
            <NavLink to={`/student/message/engelska`}>
              <div className="click-window"></div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Groups;
