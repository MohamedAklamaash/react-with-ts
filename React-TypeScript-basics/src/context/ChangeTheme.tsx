import { useContext } from "react";
import { ThemeContext } from "./React_Context";

const ChangeTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
    style={{
        backgroundColor:theme==="dark"?"rgb(40,40,40)":"white",
        color:theme==="dark"?"white":"rgb(40,40,40)"
    }}
    >
      <h1>{theme} is the Current Theme</h1>
      <button type="submit" onClick={()=>toggleTheme()}>
        Change Theme
      </button>
    </div>
  );
};

export default ChangeTheme;
