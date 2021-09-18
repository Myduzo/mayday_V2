import React, { useEffect, useState } from "react";
import "./Messenger.css";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("/users?userId=" + friendId);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <>
      <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
      <p>Harvey Specter</p>
    </>
  );
}
