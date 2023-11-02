import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import { Suspense } from "react";
import Loader from "./components/Loader";
import ResultPage from "./pages/ResultPage";
const App = () => {
  return (
    <div className="">
      <Router>
        <Suspense fallback={<Loader />}>
          <Navbar />
          <Routes>
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/result/:ansCount" element={<ResultPage/>}/>x
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App