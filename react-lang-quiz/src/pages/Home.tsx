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
  console.log(userDetails.user.userData.displayName);
  const dispath = useDispatch();
  const [user, setuser] = useState<React.SetStateAction<object>>({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
        dispath(setUserData({ userData: user }));
      } else {
        navigate("/login");
      }
    });
  });

  return (
    <div>
      <main>
        <div>
          <h1>Welcome {user.displayName}</h1>
          <img
            src={user.photoURL}
            alt="ProfilePic"
            className="h-[100px] w-[100px] rounded-full"
          />
        </div>
        <a href="/quiz">Click to navigate to Quiz Page</a>
      </main>
    </div>
  );
};

export default Home;
