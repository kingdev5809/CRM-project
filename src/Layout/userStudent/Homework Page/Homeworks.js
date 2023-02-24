import React from "react";
import userImg from "../../../images/navbar-img/userImg.png";
import sendImd from "../../../images/navbar-img/sendmessageicon.png";
import succsesImg from "../../../images/navbar-img/success.png";
import exclamationImg from "../../../images/navbar-img/exclamation.png";

function Homeworks() {
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

    {
      messageText:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minim  dolores quod velit. Deserunt voluptas iure saepe, nihil asperiores  aliquam voluptatum recusandae ex repellat libero incidunt minima  voluptate nam nulla, iste earum atque! Possimus accusamus  repudiandae ipsa a commodi architecto hic. ",
      userImg: userImg,
      userName: "Shermorad Holmatov",
      userGrade: "Student",
      sendData: "2023-Feb 15",
      groupName: "ENGELSKA A2",
      titleImg: succsesImg,
    },

    {
      messageText:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minim  dolores quod velit. Deserunt voluptas iure saepe, nihil asperiores  aliquam voluptatum recusandae ex repellat libero incidunt minima  voluptate nam nulla, iste earum atque! Possimus accusamus  repudiandae ipsa a commodi architecto hic. ",
      userImg: userImg,
      userName: "Shermorad Holmatov",
      userGrade: "Student",
      sendData: "2023-Feb 15",
      groupName: "ENGELSKA A2",
      titleImg: succsesImg,
    },

    {
      messageText:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minim  dolores quod velit. Deserunt voluptas iure saepe, nihil asperiores  aliquam voluptatum recusandae ex repellat libero incidunt minima  voluptate nam nulla, iste earum atque! Possimus accusamus  repudiandae ipsa a commodi architecto hic. ",
      userImg: userImg,
      userName: "Shermorad Holmatov",
      userGrade: "Student",
      sendData: "2023-Feb 15",
      groupName: "ENGELSKA A2",
      titleImg: succsesImg,
    },

    {
      messageText:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minim  dolores quod velit. Deserunt voluptas iure saepe, nihil asperiores  aliquam voluptatum recusandae ex repellat libero incidunt minima  voluptate nam nulla, iste earum atque! Possimus accusamus  repudiandae ipsa a commodi architecto hic. ",
      userImg: userImg,
      userName: "Shermorad Holmatov",
      userGrade: "Student",
      sendData: "2023-Feb 15",
      groupName: "ENGELSKA A2",
      titleImg: succsesImg,
    },

    {
      messageText:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minim  dolores quod velit. Deserunt voluptas iure saepe, nihil asperiores  aliquam voluptatum recusandae ex repellat libero incidunt minima  voluptate nam nulla, iste earum atque! Possimus accusamus  repudiandae ipsa a commodi architecto hic. ",
      userImg: userImg,
      userName: "Shermorad Holmatov",
      userGrade: "Student",
      sendData: "2023-Feb 15",
      groupName: "ENGELSKA A2",
      titleImg: succsesImg,
    },

    {
      messageText:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minim  dolores quod velit. Deserunt voluptas iure saepe, nihil asperiores  aliquam voluptatum recusandae ex repellat libero incidunt minima  voluptate nam nulla, iste earum atque! Possimus accusamus  repudiandae ipsa a commodi architecto hic. ",
      userImg: userImg,
      userName: "Shermorad Holmatov",
      userGrade: "Student",
      sendData: "2023-Feb 15",
      groupName: "ENGELSKA A2",
      titleImg: succsesImg,
    },

    {
      messageText:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minim  dolores quod velit. Deserunt voluptas iure saepe, nihil asperiores  aliquam voluptatum recusandae ex repellat libero incidunt minima  voluptate nam nulla, iste earum atque! Possimus accusamus  repudiandae ipsa a commodi architecto hic. ",
      userImg: userImg,
      userName: "Shermorad Holmatov",
      userGrade: "Student",
      sendData: "2023-Feb 15",
      groupName: "ENGELSKA A2",
      titleImg: succsesImg,
    },
  ];

  return (
    <div className="homework messages-cards">
      <h1>Homeworks</h1>
      <div className="items">
        {smalData.map((item) => (
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
        ))}
      </div>
    </div>
  );
}

export default Homeworks;
