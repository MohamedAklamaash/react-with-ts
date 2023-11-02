import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
const App = () => {
  return (
    <div className="">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/quiz" element={<QuizPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App