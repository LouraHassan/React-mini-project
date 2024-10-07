import React from "react";
import { useEffect, useState, useRef } from "react";
import Nav from "../Components/Nav";
import BottomNav from "../Components/BottomNav";
import SideBar from "../Components/SideBar";
import TweetCard from "../Components/TweetCard";
import SearchSection from "../Components/SearchSection";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
function TweetPage() {
  const { userId } = useParams();
  const { tweetId } = useParams();
  const navigate = useNavigate();
  const userAPI = `https://6703fa5aab8a8f8927327e3a.mockapi.io/accounts/${userId}`;
  const tweetsLink = `https://6703fa5aab8a8f8927327e3a.mockapi.io/tweets/${tweetId}`;
  const [user, setUser] = useState("");
  const [tweet, setTweet] = useState("");
  const [tweetText, setTweetText] = useState("");
  const [isArabic, setIsArabic] = useState(false);
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(tweet.likeCount);
  const [likeState, setLikeState] = useState("outline");
  const [LikeFilled, setLikeFilled] = useState("");
  const textareaRef = useRef(null);
  useEffect(() => {
    axios.get(userAPI).then((res) => {
      setUser(res.data);
    });
    getTweet();
  }, []);
  useEffect(() => {
    checkLanguage();
    setTweetText(tweet.tweet);
  }, [tweet]);
  const getTweet = () => {
    axios.get(tweetsLink).then((res) => {
      setTweet(res.data);
    });
  };
  console.log(tweet);
  const checkLanguage = () => {
    if (tweet.tweet && /[\u0600-\u06FF]/.test(tweet.tweet[0])) {
      setIsArabic(true);
    } else {
      setIsArabic(false);
    }
  };
  console.log(tweet.tweet);
  const likeAction = () => {
    setLike(!like);
    if (like) {
      setLikeState("filled");
      setLikeFilled("#B32F36");
      setLikeCount(likeCount + 1);
    } else {
      setLikeState("outline");
      setLikeFilled("");
      setLikeCount(tweet.likeCount);
    }
  };
  const updateAction = () => {
    if (tweetText != "") {
      axios
        .put(tweetsLink, {
          tweet: tweetText,
        })
        .then((res) => {
          console.log(res);
          console.log("tweet updated");
          navigate(`/home/${userId}`);
        });
    }
  };
  const deleteTweet = () => {
    axios.delete(tweetsLink).then((res) => {
      console.log("tweet deleted");
      navigate(`/home/${userId}`);
    });
  };
  const textareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  const TextChange = (e) => {
    setTweetText(e.target.value);
    textareaHeight();
  };
  useEffect(() => {
    textareaHeight();
  }, [tweetText]);
  return (
    <div className="flex justify-center">
      <div className="flex w-full md:w-[80vw] lg:w-[85vw]">
        <SideBar
          user={user}
          image={user.image}
          name={user.name}
          username={user.userName}
        ></SideBar>
        <div className="w-full md:w-fill">
          <div className="border-2 border-neutral mx-2 h-screen md:w-[60vw] lg:w-[40vw]">
            <Nav
              avatar={user.image}
              name={user.name}
              username={user.userName}
            ></Nav>
            <div className="flex border-b-2 border-b-zinc-900 py-5">
              <img
                src={user.image}
                alt=""
                className="w-[40px] h-[40px] rounded-full mx-4"
              />
              <div className=" w-full pr-4">
                <div className="flex justify-between">
                  <div className="flex">
                    <p>{user.name}</p>
                    <p className="text-secondary mx-2">@{user.userName}</p>
                    <p className="text-secondary mx-2">
                      {countTime(tweet.date)}
                    </p>
                  </div>
                </div>
                <textarea
                  ref={textareaRef}
                  className={`textarea textarea-bordered pr-5 my-5 text-lg w-full ${
                    isArabic ? "text-right" : "text-left"
                  }`}
                  value={tweetText}
                  onChange={TextChange}
                  style={{ overflow: "hidden", resize: "none", height: "auto" }}
                />
                <div className="flex justify-around my-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-message-circle w-[20px]"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-repeat rotate-90 w-[20px]"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
                    <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />
                  </svg>
                  <p className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={LikeFilled}
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      onClick={likeAction}
                      className={`icon icon-tabler icons-tabler-${likeState} icon-tabler-heart mr-2 w-[20px]`}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>{" "}
                    {likeCount}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-antenna-bars-5 w-[20px]"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 18l0 -3" />
                    <path d="M10 18l0 -6" />
                    <path d="M14 18l0 -9" />
                    <path d="M18 18l0 -12" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-bookmark w-[20px]"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
                  </svg>
                </div>
              </div>
            </div>
            <button className="btn btn-circle btn-accent text-accent-content btn-lg fixed bottom-20 right-5 md:hidden">
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
            </button>
            <div className="w-full  flex flex-col items-center my-4 lg:flex-row-reverse lg:flex-wrap lg:justify-evenly">
              <button
                className="btn btn-accent text-primary rounded-full w-[80vw] my-2 md:w-[50vw] lg:w-[15vw]"
                onClick={updateAction}
              >
                Update
              </button>
              <button
                className="btn text-error border-2 border-error hover:border-error rounded-full w-[80vw] my-2 md:w-[50vw] lg:w-[15vw]"
                onClick={() =>
                  document.getElementById("deleteDialog").showModal()
                }
              >
                Delete
              </button>
              <dialog id="deleteDialog" className="modal">
                <div className="modal-box border-2 border-neutral">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg my-5 text-center">
                    Are you sure from deleting this tweet?
                  </h3>
                  <div className="flex w-full justify-around">
                    <button
                      onClick={deleteTweet}
                      className="btn text-white btn-error hover:border-error rounded-full w-[70vw] my-2 md:w-[30vw] lg:w-[15vw]"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </dialog>
              <Link
                to={`/home/${userId}`}
                className="btn  btn-neutral rounded-full w-[80vw] my-2 md:w-[50vw] lg:w-[15vw]"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
        <SearchSection></SearchSection>
      </div>
      <BottomNav userid={userId}></BottomNav>
    </div>
  );
}
export default TweetPage;
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
