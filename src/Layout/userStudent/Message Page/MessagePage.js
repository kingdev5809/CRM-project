import React from "react";
import Navbar from "../../../Components/Navbar";
import Groups from "./Groups";
import Message from "./Message";

function MessagePage() {
  return (
    <div className="flex">
      <Navbar />

      <div className="messagesPage container">
        <Groups />
        <div className="deskop-responsive">
          <Message />
        </div>
      </div>
    </div>
  );
}

export default MessagePage;
