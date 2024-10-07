import { React, useState, useEffect } from "react";
import google from "../assets/google.png";
import apple from "../assets/apple-logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AccountsAPI = "https://6703fa5aab8a8f8927327e3a.mockapi.io/accounts";
function Login() {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warningText, setWarningText] = useState("");
  const [successText, setSuccessText] = useState("");

  const [emailreset, setEmailreset] = useState("");
  const [passreset, setPassreset] = useState("");
  const [confirmreset, setconfirmreset] = useState("");

  useEffect(() => {
    getAccounts();
  }, []);
  useEffect(() => {}, [warningText]);
  const getAccounts = () => {
    axios.get(AccountsAPI).then((res) => {
      setAccounts(res.data);
    });
  };

  const checkUser = (user) => {
    let AccountFound = accounts.some((el) => el.userName == user);
    console.log(AccountFound);

    return AccountFound;
  };
  const checkEmail = (email) => {
    let EmailFound = accounts.some((el) => el.email == email);
    console.log(EmailFound);
    return EmailFound;
  };
  const validPassword = (password) => {
    return password.length >= 8;
  };
  const LoginAction = () => {
    if (!checkUser(username)) {
      setWarningText("user not found");
    } else {
      accounts.map((el) => {
        if (el.userName == username) {
          if (password != el.password) {
            setWarningText("incorrect password");
          } else {
            setWarningText("");
            console.log("logged in", el.id);
            navigate(`/home/${el.id}`);
          }
        }
      });
    }
  };
  const ResetAction = () => {
    setWarningText("");
    if (emailreset == "" || passreset == "" || confirmreset == "") {
      setWarningText("you must fill all the fields");
    } else if (!checkEmail(emailreset)) {
      setWarningText("you don't have an account");
    } else if (!validPassword(passreset)) {
      setWarningText("password must be more than 8 digits");
    } else if (passreset != confirmreset) {
      setWarningText("Password doesn't match");
    } else {
      setWarningText("");
      let user = accounts.find((el) => el.email == emailreset);
      axios
        .put(AccountsAPI + `/` + user.id, {
          password: passreset,
        })
        .then((res) => {
          console.log(res.data);
          console.log("password reset");
          setSuccessText("You've reset you password successfully, Log in now!");
          setEmailreset("");
          setPassreset("");
          setconfirmreset("");
          getAccounts();
        });
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col w-[80vw] md:w-[40vw] lg:w-[25vw]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon icon-tabler icons-tabler-filled icon-tabler-brand-twitter self-center"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" />
        </svg>
        <p className="text-[1.8rem] font-bold my-5">Sign in to Twitter</p>
        <button className="btn rounded-full btn-primary my-2 font-bold">
          <img src={google} alt="" />
          Sign in with Google
        </button>
        <button className="btn rounded-full btn-primary my-2 font-bold">
          <img src={apple} alt="" />
          Sign in with Apple
        </button>
        <div className="divider">OR</div>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="input input-bordered my-1 rounded-full"
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="input input-bordered my-1 rounded-full"
          placeholder="Password"
        />
        <p className="text-error">{warningText}</p>
        <button
          className="btn rounded-full btn-primary my-2 font-bold"
          onClick={LoginAction}
        >
          Sign in
        </button>
        <button
          className="btn rounded-full border-2 border-secondary my-2 font-bold hover:border-neutral"
          onClick={() =>
            document.getElementById("passwordResetDialog").showModal()
          }
        >
          Forgot password
        </button>
        <dialog id="passwordResetDialog" className="modal">
          <div className="modal-box border-2 border-neutral flex flex-col items-center">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg my-4">Reset your password</h3>
            <input
              value={emailreset}
              onChange={(e) => setEmailreset(e.target.value)}
              type="text"
              className="input input-bordered w-full md:w-[40vw] lg:w-[25vw] my-1 rounded-full"
              placeholder="Email"
            />
            <input
              value={passreset}
              onChange={(e) => setPassreset(e.target.value)}
              type="password"
              className="input input-bordered w-full md:w-[40vw] lg:w-[25vw] my-1 rounded-full"
              placeholder="New password"
            />
            <input
              value={confirmreset}
              onChange={(e) => setconfirmreset(e.target.value)}
              type="password"
              className="input input-bordered w-full md:w-[40vw] lg:w-[25vw] my-1 rounded-full"
              placeholder="Confirm new password"
            />
            <p className="text-error">{warningText}</p>
            <p className="text-green-600">{successText}</p>
            <button
              className="btn btn-primary w-full md:w-[40vw] lg:w-[25vw] rounded-full my-4 font-bold"
              onClick={ResetAction}
            >
              Reset password
            </button>
          </div>
        </dialog>

        <p className="text-secondary my-5">
          Don't have an account?{" "}
          <Link to="/signup" className="text-accent">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
