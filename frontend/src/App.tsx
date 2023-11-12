import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Home from "./pages/Home";
import ErrorHandlingPage from "./pages/ErrorHandlingPage";
import Navbar from "./components/Navbar";
import SignInPage from "./pages/SignInPage";
import { useState } from "react";

export type Theme = "dark" | "light";

const App = () => {
  const [theme, settheme] = useState<Theme>("light");
  return (
    <div className={`${theme === "dark" ? "bg-black text-white" :"bg-white"} h-[100vmax] `}>
      <Router>
        <Navbar theme={theme} settheme={settheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="*" element={<ErrorHandlingPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
