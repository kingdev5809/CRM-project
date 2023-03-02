import React, { useEffect } from "react";
import userImg from "../../../images/navbar-img/userImg.png";
import sendImd from "../../../images/navbar-img/sendmessageicon.png";
import succsesImg from "../../../images/navbar-img/success.png";
import exclamationImg from "../../../images/navbar-img/exclamation.png";
import { useDispatch, useSelector } from "react-redux";
import { getOneGroup } from "../../../Redux/Actions/TeacherAction";

function TeacherHomeworks({ group_id }) {
  const dispatch = useDispatch();

  const getGroup = useSelector((state) => state.groupStudents);
  const { data } = getGroup;

  useEffect(() => {
    dispatch(getOneGroup(group_id));
  }, [group_id]);

  console.log(data);
  const smalData = [
    {
      messageText:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minim  dolores quod velit. Deserunt voluptas iure saepe, nihil asperiores  aliquam voluptatum recusandae ex repellat libero incidunt minima  voluptate nam nulla, iste earum atque! Possimus accusamus  repudiandae ipsa a commodi architecto hic. ",
      userImg: userImg,
      userName: "Shermorad Holmatov",
      userGrade: "Student",
      sendData: "2023-Feb 15",
      groupName: "ENGELSKA A2",
      titleImg: exclamationImg,
    },
  ];

  return (
    <div className="homework messages-cards">
      <div className="flex homework-title">
        <h1>Homeworks</h1>
        <button>Create</button>
      </div>
      <div className="items">
        {data ? (
          data?.group?.homeworks?.map((item) => (
            <div className="item">
              <div className="item-title">
                <img src={item.titleImg} alt="" />
                <h3>Engelska book 23 page eassy</h3>
              </div>
              <div className="item-content">
                <p>{item.messageText}</p>
                <div className="item-box">
                  <div className="user-box">
                    <img src={item.userImg} alt="" />
                    <div className="user-box-inner">
                      <h4>{item.userName}</h4>
                      <h6>{item.userGrade}</h6>
                    </div>
                  </div>
                  <div className="created-time">
                    <h6>{item.sendData}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default TeacherHomeworks;
