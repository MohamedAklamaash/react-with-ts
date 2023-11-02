import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import { app } from "../firebaseConfigs/firebase";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux-store/userSlice";
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const LoginPage = () => {
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

  return (
    <div>
        <button onClick={loginWithgoogle}>
            Sign In with google
        </button>
    </div>
  )
}

export default LoginPage