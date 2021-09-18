import { useEffect, useState } from "react";
import axios from "axios";
import "./Posts.css";
import noAvatar from "../images/noAvatar.png";
import { Link } from "react-router-dom";
import moment from "moment";


export default function Cards({ post }) {
  const [user, setUser] = useState({});
  // console.log(user._id)
  
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/${post.userId}`);
      setUser(res.data);
      // console.log(res);
    };
    fetchUser();
  },[post.userId]);

  const serviceType = () => {
    let service = "";
    switch(post.service) {
      case 1: service = "Electrical"
        break;
      case 2: service = "Cleaning"
        break;
      case 3: service = "Plumbing"
        break;
      case 4: service = "Babysitting"
        break;
      default: service = ""
    }
    return service;
  }
  
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card d-flex">
        <div className="col-lg-4 col-md-6">
          <Link to={`profile/${user._id}`}>
          <img src={user.imageProfile?user.imageProfile:noAvatar} />
          </Link>
        </div>
          <div className="infos pt-3">
            <div className="name">
              <div className="d-flex align-items-center">
                <h2 className="me-auto">{user.firstName} {user.lastName}</h2> 
                {serviceType() ? <button className="btn mb-2 mb-md-0 text-right text-white" style={{ backgroundColor: "#2F5061", cursor: "auto" }}>{serviceType()}</button> 
                : <></> }
              </div>  
              <h4>{moment(post.createdAt).fromNow()}</h4>
            </div>
            <div id="descBox">
              <div className="card-body">
                {post.desc}
              </div>
            </div>
            {/* <p className="text"><b>Desc: </b>{post.desc}</p> */}
            <div className="links ms-4">
              <Link to={`profile/${user._id}`}>
                <button className="view ms-5">View profile</button>
              </Link>
            </div>
          </div>
      </div>
    </div>
	);
}
