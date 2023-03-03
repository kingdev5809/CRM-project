import React, { useEffect, useState } from "react";
import userImg from "../../../images/navbar-img/userImg.png";
import sendImd from "../../../images/navbar-img/sendmessageicon.png";
import "../../layout.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneGroup, putComment } from "../../../Redux/Actions/StudentAction";
import { toast } from "react-toastify";
function Message({ group_id, group_name }) {
  const [message, setMessage] = useState("");
  const [refresh, setRefresh] = useState("");

  const smalData = [
    {
      messageText:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minim  dolores quod velit. Deserunt voluptas iure saepe, nihil asperiores  aliquam voluptatum recusandae ex repellat libero incidunt minima  voluptate nam nulla, iste earum atque! Possimus accusamus  repudiandae ipsa a commodi architecto hic. ",
      userImg: userImg,
      userName: "Shermorad Holmatov",
      userGrade: "Student",
      sendData: "2023-Feb 15",
      groupName: "ENGELSKA A2",
    },
  ];

  const dispatch = useDispatch();

  const getGroup = useSelector((state) => state.groupStudents);
  const { data } = getGroup;

  useEffect(() => {
    dispatch(getOneGroup(group_id));
  }, [group_id]);

  const handleSendMessage = (e) => {
    if (!group_id) {
      toast.warning("choose group");
      return;
    }
    if (!message.trim()) {
      toast.warning("Enter comment");
      return;
    }

    dispatch(putComment(group_id, message, setRefresh));
    setMessage("");
  };
  console.log(data);

  return (
    <div className="messages-sec messages-cards">
      <h1>{group_name}</h1>
      {group_id ? "" : <h1>Choose group</h1>}
      <div className="items">
        {data?.group?.comments?.map((item) => (
          <div className="item">
            <p>{item.content}</p>
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
            <NavLink to={`/student/message/engelska`}>
              <div className="click-window"></div>
            </NavLink>
          </div>
        ))}

        <div className="input-box">
          <input
            type="text"
            placeholder="You can write message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                handleSendMessage();
              }
            }}
          />
          <span onClick={handleSendMessage}>
            <img src={sendImd} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Message;
