import NavBar from "./NavBar.jsx"
import Login from './Login.jsx';
import { BrowserRouter , Routes , Route} from "react-router";
import Home from './Home.jsx';
function App() {
  return (
    <>
    <BrowserRouter basename="/">
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
