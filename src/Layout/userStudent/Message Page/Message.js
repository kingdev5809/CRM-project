import React from "react";
import userImg from "../../../images/navbar-img/userImg.png";
import sendImd from "../../../images/navbar-img/sendmessageicon.png";
function Message() {
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
    {
      messageText:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minim  dolores quod velit. Deserunt voluptas iure saepe, nihil asperiores  aliquam voluptatum recusandae ex repellat libero incidunt minima  voluptate nam nulla, iste earum atque! Possimus accusamus  repudiandae ipsa a commodi architecto hic. ",
      userImg: userImg,
      userName: "Shermorad Holmatov",
      userGrade: "Student",
      sendData: "2023-Feb 15",
      groupName: "ENGELSKA A2",
    },

    {
      messageText:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minim  dolores quod velit. Deserunt voluptas iure saepe, nihil asperiores  aliquam voluptatum recusandae ex repellat libero incidunt minima  voluptate nam nulla, iste earum atque! Possimus accusamus  repudiandae ipsa a commodi architecto hic. ",
      userImg: userImg,
      userName: "Shermorad Holmatov",
      userGrade: "Student",
      sendData: "2023-Feb 15",
      groupName: "ENGELSKA A2",
    },

    {
      messageText:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minim  dolores quod velit. Deserunt voluptas iure saepe, nihil asperiores  aliquam voluptatum recusandae ex repellat libero incidunt minima  voluptate nam nulla, iste earum atque! Possimus accusamus  repudiandae ipsa a commodi architecto hic. ",
      userImg: userImg,
      userName: "Shermorad Holmatov",
      userGrade: "Student",
      sendData: "2023-Feb 15",
      groupName: "ENGELSKA A2",
    },

    {
      messageText:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minim  dolores quod velit. Deserunt voluptas iure saepe, nihil asperiores  aliquam voluptatum recusandae ex repellat libero incidunt minima  voluptate nam nulla, iste earum atque! Possimus accusamus  repudiandae ipsa a commodi architecto hic. ",
      userImg: userImg,
      userName: "Shermorad Holmatov",
      userGrade: "Student",
      sendData: "2023-Feb 15",
      groupName: "ENGELSKA A2",
    },

    {
      messageText:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minim  dolores quod velit. Deserunt voluptas iure saepe, nihil asperiores  aliquam voluptatum recusandae ex repellat libero incidunt minima  voluptate nam nulla, iste earum atque! Possimus accusamus  repudiandae ipsa a commodi architecto hic. ",
      userImg: userImg,
      userName: "Shermorad Holmatov",
      userGrade: "Student",
      sendData: "2023-Feb 15",
      groupName: "ENGELSKA A2",
    },

    {
      messageText:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minim  dolores quod velit. Deserunt voluptas iure saepe, nihil asperiores  aliquam voluptatum recusandae ex repellat libero incidunt minima  voluptate nam nulla, iste earum atque! Possimus accusamus  repudiandae ipsa a commodi architecto hic. ",
      userImg: userImg,
      userName: "Shermorad Holmatov",
      userGrade: "Student",
      sendData: "2023-Feb 15",
      groupName: "ENGELSKA A2",
    },

    {
      messageText:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minim  dolores quod velit. Deserunt voluptas iure saepe, nihil asperiores  aliquam voluptatum recusandae ex repellat libero incidunt minima  voluptate nam nulla, iste earum atque! Possimus accusamus  repudiandae ipsa a commodi architecto hic. ",
      userImg: userImg,
      userName: "Shermorad Holmatov",
      userGrade: "Student",
      sendData: "2023-Feb 15",
      groupName: "ENGELSKA A2",
    },

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

  return (
    <div className="messages-sec">
      <h1>Engleska A2</h1>
      <div className="items">
        {smalData.map((item) => (
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
          </div>
        ))}

        <div className="input-box">
          <input type="text" placeholder="You can write message here..." />
          <img src={sendImd} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Message;
