import { use, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constant";
const SignUp = () => {
  const [emailId, setEmail] = useState("ghapla@gmaill.com");
  const [password, setPassword] = useState("Ghapla@123");
  const [confirmPassword, setConfirmPassword] = useState("Arpan@123");
  const [fName, setFName] = useState("Arpan");
  const [lName, setLName] = useState("Kumar");
  const [age, setAge] = useState("18");
  const [about, setAbout] = useState("I am a student");
  const [photoUrl, setPhotoUrl] = useState("");
  const [gender, setGender] = useState("male");
  const [skills, setSkills] = useState(["HTML", "CSS", "JS","Python","Java"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const singUpHandler = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          fName,
          lName,
          emailId,
          password,
          age,
          skills,
          gender,
          about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.user)); 
      navigate("/");
    } catch (error) {
      console.log(error?.response?.data);
      setLoginError(error?.response?.data);
    }
  };
  return (
    <div className="flex justify-center items-center mt-35 ">
      <div className="card bg-base-200 rounded-2xl overflow-hidden w-96 shadow-sm  ">
        <div className="card-body ">
          <h2 className="card-title ml-28 text-3xl p-2 font-semibold">
            SignUp
          </h2>
          <div className="flex flex-col justify-center items-center gap-2">
            {/* fName */}
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="text"
                placeholder="First Name"
                required
                onChange={(e) => {
                  setFName(e.target.value);
                }}
              />
            </label>
            {/* lName */}
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="text"
                placeholder="Last Name"
                required
                onChange={(e) => {
                  setLName(e.target.value);
                }}
              />
            </label>
            {/* emailId */}
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="emailId"
                placeholder="Enter your emailId "
                required
                value={emailId}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            {/* password */}
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            {/* age */}
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="number"
                placeholder="Age"
                required
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </label>
            {/* skills */}
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="text"
                placeholder="Skills"
                required
                value={skills}
                onChange={(e) => {
                  const skillsArr = e.target.value.split(',').map(s => s.trim());
                  setSkills(skillsArr);
                }}
              />
            </label>
          </div>
          <p className="text-red-500">{loginError}</p>
          <div className="card-actions justify-center p-4">
            <button
              className="btn btn-primary active:scale-95"
              onClick={singUpHandler}
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
