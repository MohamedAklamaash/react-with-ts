import { useNavigate } from "react-router-dom";
import { app } from "../firebaseConfigs/firebase";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(app);
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="font-mono bg-blue-400 text-white text-2xl">
      <main className="p-4 flex items-center justify-around">
        <div className="flex items-center justify-center space-x-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAWA_RcSUZr0_eyeuG-R-tdDLTF-bH-hfrjGR8OaA&s"
            alt="logo"
            className="h-[60px] cursor-pointer  "
            onClick={() => {
              navigate("/");
            }}
          />
          <h1 className="font-serif cursor-pointer " onClick={()=>{
            navigate("/quiz")
          }}>Quiz Time</h1>
        </div>
        <div className="flex items-center justify-around space-x-10">
          <a href="/login" className="cursor-pointer">
            Login
          </a>
          <a href="/quiz">
            Quiz Page
          </a>
        </div>
        <div>
            <h2 onClick={()=>signOut(auth)} className="cursor-pointer ">
                LogOut
            </h2>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
