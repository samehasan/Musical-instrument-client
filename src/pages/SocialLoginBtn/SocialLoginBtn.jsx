
import { useState } from "react";
import "./SocialLoginBtn.css";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";


const SocialLoginBtn = () => {
    const navigate = useNavigate();
  const [user, setUser] = useState({});
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  //const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className=" social-button-container w-50 mt-3">
      <div className="">
        <img
          onClick={handleGoogleLogin}
          className=" social-button"
          src="https://i.ibb.co/gSTHXZJ/google-btn.png"
          alt=""
        />
      </div>
     
    </div>
  );
};

export default SocialLoginBtn;
