import React from 'react'
import './Messenger.css'
import noAvatar from "../images/noAvatar.png"
import moment from "moment";

export default function Message({message, own}) {
  return (
    <>
      <li className={own? "replies": "sent"}>
        <img
          src={noAvatar}
          alt=""
        />
        <p>{message.text}</p>
        {/* <div>{moment(message.createdAt).fromNow()}</div> */}
      </li>
    </>
  )
}
