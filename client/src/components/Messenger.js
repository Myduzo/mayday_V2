import React, { useEffect, useState, useContext, useRef } from "react";
import Header from "./home/Header";
import "./Messenger.css";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Conversation from "./Conversation";
import Message from "./Message";
import {io} from "socket.io-client";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [socket, setSocket] = useState(null);

  const { user } = useContext(AuthContext);
  const scrollRef = useRef();

  useEffect(() => {
    const getConversations = async() => {
        try {
            const res = await axios.get("/conversations/" + user._id);
            setConversations(res.data);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
      const getMessages = async() => {
          try {
              const res = await axios.get("/messages/" + currentChat?._id);
              setMessages(res.data);
              // console.log(res.data);
          } catch (err) {
              console.log(err);
          }
      };
      getMessages();
  }, [currentChat]);
  // console.log(messages);


  const handleSubmit = async(e) => {
      e.preventDefault();
      const message = {
          sender: user._id,
          text: newMessage,
          conversationId: currentChat._id,
      };
      console.log(message);
      try {
          const res = await axios.post("/messages", message);
          setMessages([...messages, res.data]);
      } catch (err) {
          console.log(err);
      }
  };

  useEffect(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages])

  useEffect(() => {
    setSocket(io("ws://localhost:8900"))
  }, [])

  return (
  <div >
      <Header / >
      <div id = "frame" >
          <div className = "contact-profile" > {
              conversations.map(c => (
              <div onClick = {
                      () => setCurrentChat(c) } >
                  <Conversation conversation = { c }
                  currentUser = { user }/>
              </div>
              ))
          }

          </div>
          <div className = "content" >
              {currentChat ? (
                  <div className = "messages" >
                      <ul > {messages.map((m) => (
                          <div ref = { scrollRef } >
                              <Message message = { m } own = { m.sender === user._id }/>
                          </div>
                          ))}
                      </ul>
                  </div>
                  ) : ( <span > Start a conversation </span>)
              }


              <div className = "message-input mb-4" >
                  <div className = "wrap d-flex justify-content-center" >
                      <input className = "rounded-pill ps-4"
                          type = "text"
                          placeholder = "Write your message..."
                          onChange = { (e) => setNewMessage(e.target.value) }
                          value = { newMessage }/>
                      <button className = "submit ms-3" onClick = { handleSubmit } >
                      Send
                      </button>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
}
