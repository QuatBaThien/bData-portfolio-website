import React from "react";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import "./Messenger.css";

export default function Messenger(props) {
    return (
      <div className="messenger-chat-div">
          <MessengerCustomerChat
              pageId="106732379067322"
              appId="925920615323812"
           />,
      </div>
    );
}