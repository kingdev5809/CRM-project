import React, { useEffect, useState } from "react";
import sendImd from "../../../images/navbar-img/sendmessageicon.png";
import "../../layout.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneGroup, putComment } from "../../../Redux/Actions/TeacherAction";
import { toast } from "react-toastify";
function Message({ group_id, group_name }) {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getGroup = useSelector((state) => state.oneGroup);
  const { oneGroupData } = getGroup;

  useEffect(() => {
    dispatch(getOneGroup(group_id));
  }, [group_id]);

  const handleSendMessage = (e) => {
    if (!message.trim()) {
      toast.warning("Enter comment");
      return;
    }
    dispatch(putComment(group_id, message));
    setMessage("");
  };

  return (
    <div className="messages-sec messages-cards">
      <h1>{group_name}</h1>
      <div className="items">
        {oneGroupData?.group?.comment?.map((item) => (
          <div className="item">
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
              if (e.key === "Enter") {
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
