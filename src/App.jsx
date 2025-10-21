import Login from "./Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home.jsx";
import Body from "./Body.jsx";
import Profile from "./Profile.jsx";
function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
