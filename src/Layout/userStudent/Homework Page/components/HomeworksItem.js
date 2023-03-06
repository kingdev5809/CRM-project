import React, { useEffect } from "react";
import exclamationImg from "../../../../images/navbar-img/exclamation.png";

function HomeworksItem({ item, teacher, handleCheckRate }) {
  const HandleCreatedAt = (item) => {
    const date = new Date(item.createdAt);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  };
  useEffect(() => {
    handleCheckRate(item);
  }, [item]);
  return (
    <div>
      <div className="item">
        <div className="item-title">
          <img src={exclamationImg} alt="" />
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
              <h6>{HandleCreatedAt(item)}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeworksItem;
