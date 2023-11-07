import {BrowserRouter as Router , Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import NewNote from "./pages/NewNote";
import EditPage from "./pages/EditPage";
export interface newNote {
  title: string;
  tags: string[];
  body: string;
}
export type Tag = {
  tag:string,
  id:number
}
const App = () => {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route element={<Home/>} path="/" />
          <Route element={<NewNote/>} path="/new"/>
          <Route element={<EditPage/>} path="/edit/:id"/>
        </Routes>
      </Router>
    </div>
  )
}

export default App