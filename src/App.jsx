import Login from "./components/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home.jsx";
import Body from "./components/Body.jsx";
import Profile from "./page/Profile.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./Page/Feed.jsx";
import Connections from "./Page/Connections.jsx";
import Requests from "./Page/Requests.jsx";
function App() {
  return (
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/connections" element={<Connections />}></Route>
              <Route path="/requests" element={<Requests />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
