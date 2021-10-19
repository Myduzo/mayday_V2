import React, { useEffect, useState, useContext, useRef} from "react";
import axios from "axios";
import "./Posts.css";
import Header from "./home/Header";
import Cards from "./card";
import { AuthContext } from "../context/AuthContext";
import noAvatar from "../images/noAvatar.png";
import Select from 'react-select'; 


export default function Posts() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  const desc = useRef();
  // console.log(user);

  
  const submitHundler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      service: selectedOption
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
  }, []);

  const [selectedOption, setSelectedOption] = useState("none");
  const options = [
    { value: "1", label: "Electrical" },
    { value: "2", label: "Cleaning" },
    { value: "3", label: "Plumbing" },
    { value: "4", label: "Babysitting" },
  ];
  const handleTypeSelect = e => {
    setSelectedOption(e.value);
  };

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
                    <div className="dropdown text-right" style={{width: '200px'}} >
                      {/* <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                        
                      </button> */}
                      {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" ref={service}>
                        <li><a className="dropdown-item" href="#">Electrical</a></li>
                        <li><a className="dropdown-item" href="#">Cleaning</a></li>
                        <li><a className="dropdown-item" href="#">Plumbing</a></li>
                        <li><a className="dropdown-item" href="#">Babysitting</a></li>
                      </ul> */}
                      <Select
                        options={options}
                        onChange={handleTypeSelect}
                        value={options.filter(function(option) {
                          return option.value === selectedOption;
                        })}
                        label="Service"
                      />
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


      </div>
    </div>
  );
}
