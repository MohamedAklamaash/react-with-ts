import { ReactNode, createContext, useState } from "react";
import ChangeTheme from "./ChangeTheme";

type Theme = "light" | "dark";

interface ThemeType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeType>({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const React_Context = () => {
  return (
    <ThemeProvider>
      <div>Welcome To Use context</div>
      <ChangeTheme/>
    </ThemeProvider>
  );
};

export default React_Context;
