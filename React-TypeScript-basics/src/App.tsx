import Page from "./components/Page"
import { useState } from "react"
import Prac_Hooks from "./components/Prac_Hooks";
import React_Context from "./context/React_Context";
import Reducer from "./reducers/Reducer";
const App = () => {
  const [count, setcount] = useState<number>(0);
  return (
    <div>
      <Page heading="Welcome to React TypeScript" count={count}/>
      <button onClick={()=>setcount(count+1)}>Increase Count</button>
      <Prac_Hooks/>
      <React_Context/>
      <Reducer/>
    </div>
  )
}

export default App