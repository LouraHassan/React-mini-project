import React from 'react'
import { useEffect, useState, useRef } from "react";
import Nav from "../Components/Nav";
import BottomNav from "../Components/BottomNav";
import SideBar from "../Components/SideBar";
import TweetCard from "../Components/TweetCard";
import SearchSection from "../Components/SearchSection";
import { useParams, Link, useNavigate } from "react-router-dom";
const userAPI = `https://6703fa5aab8a8f8927327e3a.mockapi.io/accounts`;
const tweetsLink = "https://6703fa5aab8a8f8927327e3a.mockapi.io/tweets";
import axios from 'axios';
const NewTweet = () => {
    const navigate = useNavigate()
    const { userId } = useParams();
    const [user, setUser] = useState("");
    const [tweet, setTweet] = useState("");
    const [warningText, setWarningText] = useState("");

    const textareaRef = useRef(null);

  useEffect(() => {
    axios.get(userAPI + `/` + userId).then((res) => {
      setUser(res.data);
    });
  }, []);
    
  const TweetAction = () => {
    if (tweet == "") {
      setWarningText("Type you tweet first");
    } else {
      axios
        .post(tweetsLink, {
          image: user.image,
          name: user.name,
          userName: user.userName,
          tweet: tweet,
          date: new Date(),
        })
        .then((res) => {
          console.log(res);
            setTweet("");
            navigate(`/home/${userId}`)
        });
    }
    };
    const textareaHeight = () => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      };
      const TextChange = (e) => {
        setTweet(e.target.value);
        textareaHeight();
      };
    
      useEffect(() => {
        textareaHeight();
      }, [tweet]);
  return (
    <div className="flex justify-center">
    <div className="flex w-full  md:w-[80vw] lg:w-[85vw]">
      <SideBar
        user={user}
        image={user.image}
        name={user.name}
        username={user.userName}
      ></SideBar>
      <div className='w-full '>
        <div className=" md:border-2 border-neutral mx-2  md:w-[60vw] lg:w-[40vw]">
          <Nav
            avatar={user.image}
            name={user.name}
            username={user.userName}
          ></Nav>
          <div className=" p-4 border-b-2 border-b-neutral justify-between items-start md:flex">
                          <div className='flex'>                
            <img
              src={user.image}
              alt=""
              className="rounded-full w-[50px] h-[50px] mx-2"
              />
                  <div className="flex">
                    <p>{user.name}</p>
                    <p className="text-secondary mx-2">@{user.userName}</p>
                    
                  </div>
                              
              </div>
            <div className="flex flex-col w-full my-4">
              <textarea
                ref={textareaRef}
                value={tweet}
                onChange={TextChange}
                type="text"
                rows={3}
                className="input input-lg w-full "
                placeholder="What is happening?! "
                style={{ overflow: "hidden", resize: "none", height: "auto" }}
                />
              <hr className=" border-neutral" />
              <p className="text-warning">{warningText}</p>
              <button
                className="btn  rounded-full btn-accent text-white  my-2"
                onClick={TweetAction}
                >
                Post
              </button>
            </div>
                 
          </div>
         

         
        </div>
        
      </div>
      <SearchSection></SearchSection>
    </div>
    <BottomNav  userid={userId}></BottomNav>
  </div>
  )
}

export default NewTweet
