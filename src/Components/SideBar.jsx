import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
const userAPI = `https://6703fa5aab8a8f8927327e3a.mockapi.io/accounts`;
const tweetsLink = "https://6703fa5aab8a8f8927327e3a.mockapi.io/tweets";
function SideBar(props) {
  console.log(props.user);
  const [image, setImage] = useState("");
  const [tweet, setTweet] = useState("");
  const [warningText, setWarningText] = useState("");
  const textareaRef = useRef(null);
  const AddImageAction = () => {
    if (image != "") {
      axios
        .put(userAPI + `/` + props.user.id, {
          image: image,
        })
        .then((res) => {
          console.log(res);
          location.reload();
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
  return (
    <div>
      <div className="drawer-content hidden md:flex justify-center  md:w-fit sticky top-0 lg:w-[18vw] lg:px-5 h-screen">
        <ul className="menu-md my-2 md:w-[10vw] lg:w-[20vw] flex flex-col justify-between">
          <ul className="menu-md my-2 bg-base-100 sticky top-0 rounded-box flex flex-col items-center">
            <p className=" btn btn-circle hover:btn-neutral lg:self-start flex mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </p>
            <Link
              to={`/home/${props.user.id}`}
              className="btn hover:bg-neutral btn-circle lg:flex lg:justify-start lg:px-4 lg:rounded-full lg:w-full lg:hover:bg-neutral"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-home "
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
              </svg>
              <span className="hidden lg:block ">Home</span>
            </Link>
            <p className="flex items-center btn hover:bg-neutral btn-circle lg:flex lg:justify-start lg:px-4 lg:rounded-full lg:w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-search"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
              <span className="hidden lg:block">Explore</span>
            </p>
            <p className="flex items-center btn hover:bg-neutral btn-circle lg:flex lg:justify-start lg:px-4 lg:rounded-full lg:w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-bell"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
              <span className="hidden lg:block">Notifications</span>
            </p>
            <p className="flex items-center btn hover:bg-neutral btn-circle lg:flex lg:justify-start lg:px-4 lg:rounded-full lg:w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
              <span className="hidden lg:block">Messages</span>
            </p>
            <p className="flex items-center btn hover:bg-neutral btn-circle lg:flex lg:justify-start lg:px-4 lg:rounded-full lg:w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-slash"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 5l-10 14" />
              </svg>
              <span className="hidden lg:block">Grok</span>
            </p>
            <p className="flex items-center btn hover:bg-neutral btn-circle lg:flex lg:justify-start lg:px-4 lg:rounded-full lg:w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-users"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
              <span className="hidden lg:block">Communities</span>
            </p>
            <p className="flex items-center btn hover:bg-neutral btn-circle lg:flex lg:justify-start lg:px-4 lg:rounded-full lg:w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x "
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
              <span className="hidden lg:block">Premium</span>
            </p>
            <p className="flex items-center btn hover:bg-neutral btn-circle lg:flex lg:justify-start lg:px-4 lg:rounded-full lg:w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-user "
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
              <span className="hidden lg:block">Profile</span>
            </p>
            <p className="w-full my-1">
              <div className="dropdown dropdown-right dropdown-end w-full flex justify-center">
                <p
                  tabIndex={0}
                  className="justify-center btn hover:bg-neutral btn-circle lg:flex lg:justify-start lg:px-4 lg:rounded-full lg:w-full"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-dots "
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>
                  <span className="hidden lg:block mx-1">More</span>
                </p>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-60 p-2 shadow shadow-slate-700"
                >
                  <li>
                    <p className="flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-notes mr-4"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                        <path d="M9 7l6 0" />
                        <path d="M9 11l6 0" />
                        <path d="M9 15l4 0" />
                      </svg>
                      Lists
                    </p>
                  </li>
                  <li>
                    <p className="flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-bookmark mr-4"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
                      </svg>
                      Bookmarks
                    </p>
                  </li>
                  <li>
                    <p className="flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-bolt mr-4"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
                      </svg>
                      Business
                    </p>
                  </li>
                  <li>
                    <p className="flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-cash mr-4"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                        <path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
                      </svg>
                      Monetization
                    </p>
                  </li>
                  <li>
                    <p className="flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-ad mr-4"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                        <path d="M7 15v-4a2 2 0 0 1 4 0v4" />
                        <path d="M7 13l4 0" />
                        <path d="M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5" />
                      </svg>
                      Ads
                    </p>
                  </li>
                  <li>
                    <p className="flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase mr-4"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                        <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                        <path d="M12 12l0 .01" />
                        <path d="M3 13a20 20 0 0 0 18 0" />
                      </svg>
                      Jobs
                    </p>
                  </li>
                  <li>
                    <p className="flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-settings mr-4"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                      </svg>
                      Settings
                    </p>
                  </li>
                </ul>
              </div>
            </p>
            <button
              onClick={() => document.getElementById("tweetDialog").showModal()}
              className="btn btn-circle bg-accent hover:bg-neutral lg:w-full lg:my-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#FFF"
                class="icon icon-tabler icons-tabler-filled icon-tabler-feather lg:hidden"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 9.585v6.415h6.414l-2.707 2.707a1 1 0 0 1 -.112 .097l-.11 .071l-.114 .054l-.105 .035l-.149 .03l-.117 .006h-4.586l-1.707 1.707a1 1 0 1 1 -1.414 -1.414l1.707 -1.709v-4.584l.003 -.075l.017 -.126l.03 -.111l.044 -.111l.052 -.098l.067 -.096l.08 -.09z" />
                <path d="M19.414 11l-3 3h-4.914l2.914 -3z" />
                <path d="M13 4.586v4.998l-3 3v-4.999z" />
                <path d="M16.482 3a4.515 4.515 0 0 1 4.518 4.514a4.7 4.7 0 0 1 -.239 1.487l-5.761 -.001v-5.76c.469 -.158 .968 -.24 1.482 -.24" />
              </svg>{" "}
              <span className="hidden lg:block">Post</span>
            </button>
            <dialog id="tweetDialog" className="modal">
              <div className="modal-box border-2 border-neutral">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div className="flex flex-col items-center">
                  <h3 className="font-bold text-lg text-center">
                    Share a new tweet
                  </h3>
                  <textarea
                    ref={textareaRef}
                    value={tweet}
                    onChange={(e) => setTweet(e.target.value)}
                    type="text"
                    className="textarea textarea-bordered w-full my-4"
                    placeholder="What is happening?! "
                    rows={3}
                    style={{
                      overflow: "hidden",
                      resize: "none",
                      height: "auto",
                    }}
                  />
                  <hr className=" border-neutral" />
                  <p className="text-warning">{warningText}</p>
                  <button
                    className="btn w-[80vw] my-2 md:w-[30vw] lg:w-[15vw] rounded-full btn-accent text-white "
                    onClick={TweetAction}
                  >
                    Post
                  </button>
                </div>
              </div>
            </dialog>
          </ul>
          <div className="flex self-center items-start flex-wrap my-2 justify-between lg:self-start">
            <img
              src={props.image}
              alt=""
              className="w-[45px] h-[45px] rounded-full hidden lg:block"
            />
            <div className="w-[8vw] mx-2 hidden lg:block">
              <p className="font-bold">{props.name}</p>
              <p className="text-secondary">@{props.username}</p>
            </div>
            <div className="dropdown dropdown-top">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-sm btn-circle hover:bg-neutral hidden lg:flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-dots"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                </svg>
              </div>
              <div tabIndex={0} role="button" className="lg:hidden">
                <img
                  src={props.image}
                  alt=""
                  className="w-[45px] h-[45px] rounded-full"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-72 p-2 shadow shadow-slate-700"
              >
                <li>
                  <p
                    onClick={() =>
                      document.getElementById("updateImageDialog").showModal()
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                    </svg>
                    Add profile image
                  </p>
                </li>
                <dialog id="updateImageDialog" className="modal">
                  <div className="modal-box border-2 border-neutral">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <div className="flex flex-col items-center">
                      <h3 className="font-bold text-lg text-center my-4">
                        Add or update your profile image
                      </h3>
                      <input
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        type="text"
                        className="input input-bordered my-4 md:w-[40vw] lg:w-[20vw]"
                        placeholder="Image link (url)"
                      />
                      <form method="dialog">
                        <button
                          onClick={AddImageAction}
                          className="btn btn-primary rounded-full md:w-[40vw] lg:w-[20vw]"
                        >
                          Update image
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
                <li>
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-logout"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                      <path d="M9 12h12l-3 -3" />
                      <path d="M18 15l3 -3" />
                    </svg>
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
export default SideBar;
