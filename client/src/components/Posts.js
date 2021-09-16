import React, { useEffect, useState, useContext, useRef} from "react";
import axios from "axios";
import "./Posts.css";
import Header from "./home/Header";
import Cards from "./card";
import { AuthContext } from "../context/AuthContext";
import noAvatar from "../images/noAvatar.png";


export default function Posts({ userId }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  const desc = useRef();
  
  const submitHundler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }

    try{
      await axios.post("/posts", newPost)
      window.location.reload();
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/timeline/" + user._id)
      
      //await axios.get("/posts/profile/" + userId ) || 
      setPosts(res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
      //console.log(res)
    };
    fetchPosts();
  }, [userId]);

  return (
    <div>
      <Header />
      <div id="posts">

        <div className="container bootstrap snippets bootdey">
          <div className="row">
            <div className="col-md-offset-3 col-md-6 col-xs-12 mx-auto">
              <div className="well well-sm well-social-post">
                <form onSubmit={submitHundler}>
                  <div className="list-inline d-flex align-items-center">
                    <img src={user.porfilePicture ? user.porfilePicture : noAvatar} width="30px" />
                    <h5 className="fw-bold ps-3 me-auto">Create new post</h5>
                    <div className="dropdown text-right">
                      <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Field
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Electrical</a></li>
                        <li><a className="dropdown-item" href="#">Cleaning</a></li>
                        <li><a className="dropdown-item" href="#">Plumbing</a></li>
                        <li><a className="dropdown-item" href="#">Babysitting</a></li>
                      </ul>
                    </div>
                  </div>
                  <textarea className="form-control" placeholder={"What's in your mind " + user.firstName + " ?"} ref={desc}></textarea>
                  <div className='list-inline post-actions links text-center'>
                    <button className="view" type="submit">Post</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>                                                            

    

        <div className="row mx-auto pt-5">
          {posts.map((p) => (
            <Cards key={p._id} post={p} />
          ))}
        </div>




        {/*}
          <div className="col-lg-4 col-md-6">
            <div className="card d-flex">
              <div className="img">
                <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
              </div>
              <div className="infos pt-3">
                <div className="name">
                  <h2>sdfdsfsfs</h2>
                  <h4>2 days ago</h4>
                </div>
                <p className="text"><b>Description: </b> I can fix any electrical issue</p>
                <div className="links ms-4">
                  <button className="view ms-5">View profile</button>
                </div>
              </div>
            </div>
          </div>



          <div className="col-lg-4 col-md-6">
            <div className="card d-flex">
              <div className="img">
                <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
              </div>
              <div className="infos pt-3">
                <div className="name">
                  <h2>John Tribiony</h2>
                  <h4>2 days ago</h4>
                </div>
                <p className="text"><b>Description: </b> I can fix any electrical issue</p>
                <div className="links ms-4">
                  <button className="view ms-5">View profile</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card d-flex">
              <div className="img">
                <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
              </div>
              <div className="infos pt-3">
                <div className="name">
                  <h2>John Tribiony</h2>
                  <h4>2 days ago</h4>
                </div>
                <p className="text"><b>Description: </b> I can fix any electrical issue</p>
                <div className="links ms-4">
                  <button className="view ms-5">View profile</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card d-flex">
              <div className="img">
                <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
              </div>
              <div className="infos pt-3">
                <div className="name">
                  <h2>John Tribiony</h2>
                  <h4>2 days ago</h4>
                </div>
                <p className="text"><b>Description: </b> I can fix any electrical issue</p>
                <div className="links ms-4">
                  <button className="view ms-5">View profile</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card d-flex">
              <div className="img">
                <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
              </div>
              <div className="infos pt-3">
                <div className="name">
                  <h2>John Tribiony</h2>
                  <h4>2 days ago</h4>
                </div>
                <p className="text"><b>Description: </b> I can fix any electrical issue</p>
                <div className="links ms-4">
                  <button className="view ms-5">View profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        { <div className="row mx-auto pt-5">
          {postList.map((val) => {
            return (
              <div className="col-lg-4 col-md-6">
                <div className="card d-flex">
                  <div className="img">
                    <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                  </div>
                  <div className="infos pt-3">
                    <div className="name">
                      <h2>{val.postName}</h2>
                      <h4>2 days ago</h4>
                    </div>
                    <p className="text">{val.postDescription}</p>
                    <div className="links ms-4">
                      <button className="view ms-5">View profile</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>}
      </div>
      {*/}
      </div>
    </div>
  );
}
