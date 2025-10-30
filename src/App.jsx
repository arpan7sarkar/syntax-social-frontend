import Login from "./components/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home.jsx";
import Body from "./components/Body.jsx";
import Profile from "./components//Profile.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
