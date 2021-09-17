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
              <h2>{user.firstName} {user.lastName}</h2>

              <h4>{moment(post.createdAt).fromNow()}</h4>
            </div>
            <p className="text"><b>Desc: </b>{post.desc}</p>
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
