import React, { useEffect, useState } from "react";
import sendImd from "../../../images/navbar-img/sendmessageicon.png";
import "../../layout.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getComment, postComment } from "../../../Redux/Actions/TeacherAction";
import { toast } from "react-toastify";
function Message({ group_id, group_name }) {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getComments = useSelector((state) => state.comments);
  const { messageData } = getComments;

  useEffect(() => {
    dispatch(getComment(group_id));
  }, [group_id]);

  const handleSendMessage = (e) => {
    if (!message.trim()) {
      toast.warning("Enter comment");
      return;
    }
    dispatch(postComment(group_id, message));
    setMessage("");
  };
  console.log(messageData);
  const HandleCreatedAt = (item) => {
    const date = new Date(item.createdAt);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  };
  return (
    <div className="messages-sec messages-cards">
      <h1>{group_name}</h1>
      <div className="items">
        {messageData
          ?.map((item) => (
            <div className="item">
              <p>{item.content}</p>
              <div className="item-box">
                <div className="user-box">
                  <img src={item.sender.photo} alt="" />
                  <div className="user-box-inner">
                    <h4>
                      {item.sender.name} {item.sender.surname}
                    </h4>
                    <h6>{item.sender.teacher ? "teacher" : "student"}</h6>
                  </div>
                </div>
                <div className="created-time">
                  <h6>{HandleCreatedAt(item)}</h6>
                </div>
              </div>
              <NavLink to={`/student/message/engelska`}>
                <div className="click-window"></div>
              </NavLink>
            </div>
          ))
          .reverse()}

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
