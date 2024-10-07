import { useEffect, useState, useRef } from "react";
import Nav from "./Components/Nav";
import BottomNav from "./Components/BottomNav";
import SideBar from "./Components/SideBar";
import TweetCard from "./Components/TweetCard";
import SearchSection from "./Components/SearchSection";
import { useParams, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";

const userAPI = `https://6703fa5aab8a8f8927327e3a.mockapi.io/accounts`;
const tweetsLink = "https://6703fa5aab8a8f8927327e3a.mockapi.io/tweets";
function App() {
  const { userId } = useParams();
  const [user, setUser] = useState("");
  const [tweetList, setTweetList] = useState([]);
  const [userTweetList, setUserTweetList] = useState([]);

  const [tweet, setTweet] = useState("");
  const [warningText, setWarningText] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {}, [warningText]);

  useEffect(() => {
    axios.get(userAPI + `/` + userId).then((res) => {
      setUser(res.data);
    });
  }, []);
  useEffect(() => {
    getTweets();
  }, []);
  useEffect(() => {
    getUserTweets();
  }, [tweetList]);
  console.log(userTweetList);
  const getTweets = () => {
    axios.get(tweetsLink).then((res) => {
      console.log(res.data);
      setTweetList(res.data);
    });
  };

  const getUserTweets = () => {
    tweetList.map((el) => {
      if (el.userName == user.userName) {
        console.log(el);
        setUserTweetList(el);
      }
    });
  };
  console.log(tweetList);

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
          getTweets();
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
      <div className="flex md:w-[80vw] lg:w-[85vw]">
        <SideBar
          user={user}
          image={user.image}
          name={user.name}
          username={user.userName}
        ></SideBar>
        <div>
          <div className="md:border-2 border-neutral mx-2 md:w-[60vw] lg:w-[40vw]">
            <Nav
              avatar={user.image}
              name={user.name}
              username={user.userName}
            ></Nav>
            <div className="hidden p-4 border-b-2 border-b-neutral justify-between items-start  md:flex">
              <img
                src={user.image}
                alt=""
                className="rounded-full w-[50px] mx-2"
              />

              <div className="flex flex-col w-full">
                <textarea
                  ref={textareaRef}
                  value={tweet}
                  onChange={(e) => setTweet(e.target.value)}
                  type="text"
                  className="input input-lg w-full "
                  placeholder="What is happening?! "
                  style={{ overflow: "hidden", resize: "none", height: "auto" }}
                />
                <hr className=" border-neutral" />
                <p className="text-warning">{warningText}</p>
                <button
                  className="btn btn-sm rounded-full btn-accent text-white self-end my-2"
                  onClick={TweetAction}
                >
                  Post
                </button>
              </div>
            </div>
            <div className="flex flex-col-reverse">
              {tweetList.map((el) => {
                return (
                  <TweetCard
                    image={el.image}
                    name={el.name}
                    username={el.userName}
                    user={user.userName}
                    userId={user.id}
                    tweetId={el.id}
                    text={el.tweet}
                    likeCount={el.likeCount}
                    time={countTime(el.date)}
                  ></TweetCard>
                );
              })}
            </div>

            <Link to={`/tweet/${userId}`} className="btn btn-circle btn-accent text-accent-content btn-lg fixed bottom-20 right-5 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="#FFF"
                class="icon icon-tabler icons-tabler-filled icon-tabler-feather"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 9.585v6.415h6.414l-2.707 2.707a1 1 0 0 1 -.112 .097l-.11 .071l-.114 .054l-.105 .035l-.149 .03l-.117 .006h-4.586l-1.707 1.707a1 1 0 1 1 -1.414 -1.414l1.707 -1.709v-4.584l.003 -.075l.017 -.126l.03 -.111l.044 -.111l.052 -.098l.067 -.096l.08 -.09z" />
                <path d="M19.414 11l-3 3h-4.914l2.914 -3z" />
                <path d="M13 4.586v4.998l-3 3v-4.999z" />
                <path d="M16.482 3a4.515 4.515 0 0 1 4.518 4.514a4.7 4.7 0 0 1 -.239 1.487l-5.761 -.001v-5.76c.469 -.158 .968 -.24 1.482 -.24" />
              </svg>
            </Link>
          </div>
          
        </div>
        <SearchSection></SearchSection>
      </div>
      <BottomNav userid={userId}></BottomNav>
    </div>
  );
}

export default App;

function countTime(publishedDate) {
  const today = new Date();
  const publish = new Date(publishedDate);
  let durationText = "";
  const seconds = Math.floor((today - publish) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  if (years > 0) {
    durationText = years === 1 ? "1 year ago" : `${years} years ago`;
  } else if (months > 0) {
    durationText = months === 1 ? "1 month ago" : `${months} months ago`;
  } else if (weeks > 0) {
    durationText = weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  } else if (days > 0) {
    durationText = days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (hours > 0) {
    durationText = hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (minutes > 0) {
    durationText = minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else {
    durationText = seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
  }
  return durationText;
}
