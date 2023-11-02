import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup} from "firebase/auth";
import { app } from "../firebaseConfigs/firebase";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux-store/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const LoginPage = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const loginWithgoogle = ()=>{
    signInWithPopup(auth,provider).then((res)=>{
        const credentials = GoogleAuthProvider.credentialFromResult(res);
        const token = credentials?.accessToken;
        const user = res.user;
        dispath(setUserData({userData:user}));
        console.log(user);
    }).catch((error)=>{
        console.log(error);
    })
  }

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        navigate("/");
      }
      else{
        navigate("/login")
      }
    })
  },[])

  return (
    <div>
        <button onClick={loginWithgoogle}>
            Sign In with google
        </button>
    </div>
  )
}

export default LoginPage