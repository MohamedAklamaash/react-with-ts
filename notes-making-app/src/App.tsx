import {BrowserRouter as Router , Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import NewNote from "./pages/NewNote";
const App = () => {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route element={<Home/>} path="/" />
          <Route element={<NewNote/>} path="/new"/>
          <Route path="/edit">
            <Route index element={<h1>Show</h1>}/>
            <Route path="edit" element={<h1>Edit</h1>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App