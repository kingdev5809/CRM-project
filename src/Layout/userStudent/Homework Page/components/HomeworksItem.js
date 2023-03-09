import moment from "moment";
import React from "react";
import exclamationImg from "../../../../images/navbar-img/exclamation.png";
import succsessImg from ".././../../../images/navbar-img/success.png";
function HomeworksItem({ item, teacher }) {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div>
      <div className="item">
        <div className="item-title">
          <img
            src={
              item.students.includes(user.stud._id)
                ? succsessImg
                : exclamationImg
            }
            alt=""
          />
          <h3>{item.name}</h3>
        </div>
        <div className="item-content">
          <p>{item.text}</p>
          <div className="item-box">
            <div className="user-box">
              <img src={teacher?.photo} alt="" />
              <div className="user-box-inner">
                <h4>{teacher?.name} </h4>
                <h6>Teacher </h6>
              </div>
            </div>
            <div className="created-time">
              <h6>
                {item.createdAt ? moment(item.createdAt).format("lll") : null}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeworksItem;
