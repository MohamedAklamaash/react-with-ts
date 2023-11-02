import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../firebaseConfigs/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { InitState, setUserData } from "../redux-store/userSlice";
const auth = getAuth(app);
const Home = () => {
  const navigate = useNavigate();
  const userDetails = useSelector((state: InitState) => state);
  console.log(userDetails.user.userData);
  const dispath = useDispatch();
  const [user, setuser] = useState<React.SetStateAction<object>>({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
        dispath(setUserData({ userData: user }));
        console.log(user);
      } else {
        navigate("/login");
      }
    });
  });
  return <div>Home</div>;
};

export default Home;
