import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function TweetCard(props) {
  const userid = props.userId;
  const user = props.user;
  const [userTweet, setUserTweet] = useState(false);
  const [isArabic, setIsArabic] = useState(false);
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(Number(props.likeCount));
  const [likeState, setLikeState] = useState("outline");
  const [LikeFilled, setLikeFilled] = useState("");
  useEffect(() => {
    checkUser();
    checkLanguage();
  }, [user, props.username]);
  const checkLanguage = () => {
    if (props.text && /[\u0600-\u06FF]/.test(props.text[0])) {
      setIsArabic(true);
    } else {
      setIsArabic(false);
    }
  };
  const checkUser = () => {
    if (user && props.username && user == props.username) {
      setUserTweet(true);
    } else {
      setUserTweet(false);
    }
  };
  const likeAction = () => {
    setLike(!like);
    if (!like) {
      setLikeState("filled");
      setLikeFilled("#B32F36");
      setLikeCount((prevCount) => prevCount + 1);
    } else {
      setLikeState("outline");
      setLikeFilled("");
      setLikeCount((prevCount) => prevCount - 1);
    }
  };
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex border-b-2 border-b-zinc-900 py-5">
      <img
        src={props.image}
        alt=""
        className="w-[40px] h-[40px] rounded-full mx-4"
      />
      <div className=" w-full">
        <div className="flex justify-between">
          <div className="flex">
            <p>{props.name}</p>
            <p className="text-secondary mx-2">@{props.username}</p>
            <p className="text-secondary mx-2">{props.time}</p>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-dots"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow shadow-slate-700"
            >
              <li>
                <p>Save</p>
              </li>
              <li>
                <p>Add</p>
              </li>
              {userTweet && (
                <>
                  <li>
                    <Link to={`/home/${userid}/${props.tweetId}`}>
                      Edit or Delete
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <p className={`pr-5 mb-5 ${isArabic ? "text-right" : "text-left"}`}>
          {props.text}
        </p>
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
  );
}
export default TweetCard;
