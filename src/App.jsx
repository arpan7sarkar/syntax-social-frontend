import Login from "./Page/Login.jsx";
import LandingPage from "./Page/LandingPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Body from "./components/Body.jsx";
import Profile from "./Page/Profile.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./Page/Feed.jsx";
import Connections from "./Page/Connections.jsx";
import Requests from "./Page/Requests.jsx";
import SignUp from "./Page/SignUp.jsx";
import ForgotPassword from "./Page/ForgotPassword.jsx";
function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route element={<Body />}>
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
