import React, { useEffect, useState } from "react";
import axios from "axios";
import noAvatar from "../images/noAvatar.png"


export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("/users/" + friendId);
        setUser(res.data);
        // console.log(user.firstName);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="tags" style={{ cursor: "pointer"}}>
      <img src={user?.profilePicture ? user?.profilePicture : noAvatar} alt="" />
      <span className="">{user?.firstName} {user?.lastName}</span>
    </div>
  );
}
