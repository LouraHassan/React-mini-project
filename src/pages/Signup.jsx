import { useState, useEffect } from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
const AccountsAPI = "https://6703fa5aab8a8f8927327e3a.mockapi.io/accounts";

function Signup() {
    const navigate = useNavigate()
  const [accounts, setAccounts] = useState([]);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [image, setImage] = useState("")
  const [warningText, setWarningText] = useState('')

  useEffect(() => {
    getAccounts();
  }, []);
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
        return EmailFound
    };
    const validUsername = (username) => {
        const pattern = /[A-Z]/;
        return pattern.test(username)
    }
    const validEmail = (email) => {
        const pattern = /^[^\s@]+@[^s\@]+\.[^\s@]+$/;
        return pattern.test(email)
    }
    const validPassword = (password) => {
       return password.length >= 8 
    }

    const SignupAction = () => {
        if (name == '' || username == '' || email == '' || password == '' || confirmPass == '') {
            setWarningText('Please fill all the fields')
        } else if (validUsername(username)) {
            setWarningText('Username should be in lowercase')
        } else if (checkUser(username)) {
            setWarningText('Username already taken, choose another one')
        } else if (!validEmail(email)) {
            setWarningText('Invalid email')
        }
        else if (checkEmail(email)) {
            setWarningText('You already have an account, try to log in')
        } else if (!validPassword(password)) {
            setWarningText('password must be more than 8 digits')
        } else if (confirmPass != password) {
            setWarningText("Password doesn't match")
        } else {
            setWarningText('')
            const defaultImage = image === '' ? 'https://i.pinimg.com/564x/9e/c9/19/9ec919468e1ed8af1002b551f5950a94.jpg' : image;            
            axios.post(AccountsAPI, {
                name: name,
                userName: username,
                email: email,
                password: password,
                image: defaultImage
            }).then((res) => {
                const id = res.data.id;
                navigate(`/home/${id}`)
            })
            
        }
    }
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
        <p className="text-[1.8rem] font-bold my-5">Create Account</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="input input-bordered my-1 rounded-full"
          placeholder="Name"
              />
               <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="input input-bordered my-1 rounded-full"
          placeholder="Username"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="input input-bordered my-1 rounded-full"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="input input-bordered my-1 rounded-full"
          placeholder="Password"
        />
        <input
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          type="password"
          className="input input-bordered my-1 rounded-full"
          placeholder="Confirm password"
              />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          className="input input-bordered my-1 rounded-full"
          placeholder="Profile image link (url)"
              />
                            <p className="text-error">{warningText}</p>

        <button className="btn rounded-full btn-primary my-2 font-bold" onClick={SignupAction}>
          Create Account
        </button>
        <p className="text-secondary my-5">
          Already have an account?{" "}
          <Link to="/" className="text-accent">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
