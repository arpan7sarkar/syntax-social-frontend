import { use, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constant";
import MatchSection from "../components/MatchSection";

const SignUp = () => {
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [age, setAge] = useState("18");
  const [about, setAbout] = useState("I am a student");
  const [photoUrl, setPhotoUrl] = useState("");
  const [gender, setGender] = useState("male");
  const [skills, setSkills] = useState(["HTML", "CSS", "JS", "Python", "Java"]);
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
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20 selection:text-white overflow-x-hidden relative flex justify-center items-center">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-white/[0.03] blur-[120px] rounded-full"></div>
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[120%] h-[800px] border-t border-white/10 rounded-[100%] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - MatchSection */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl -z-10"></div>
            <MatchSection />
          </div>

          {/* Right Side - Signup Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="card bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden w-full max-w-[500px] shadow-2xl relative z-10">
              <div className="card-body p-8">
                <h2 className="text-3xl font-semibold text-center mb-2 text-white">
                  Sign Up
                </h2>
                <p className="text-center text-gray-400 mb-6 text-sm">
                  Join our community of developers
                </p>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* fName */}
                    <label className="input input-bordered flex items-center gap-2 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-within:border-white/30 focus-within:outline-none w-full">
                      <svg
                        className="h-[1em] opacity-70"
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
                          <rect
                            width="20"
                            height="16"
                            x="2"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                      </svg>
                      <input
                        type="text"
                        className="grow placeholder:text-white/40"
                        placeholder="First Name"
                        required
                        onChange={(e) => {
                          setFName(e.target.value);
                        }}
                      />
                    </label>
                    {/* lName */}
                    <label className="input input-bordered flex items-center gap-2 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-within:border-white/30 focus-within:outline-none w-full">
                      <svg
                        className="h-[1em] opacity-70"
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
                          <rect
                            width="20"
                            height="16"
                            x="2"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                      </svg>
                      <input
                        type="text"
                        className="grow placeholder:text-white/40"
                        placeholder="Last Name"
                        required
                        onChange={(e) => {
                          setLName(e.target.value);
                        }}
                      />
                    </label>
                  </div>

                  {/* emailId */}
                  <label className="input input-bordered flex items-center gap-2 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-within:border-white/30 focus-within:outline-none">
                    <svg
                      className="h-[1em] opacity-70"
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
                      type="email"
                      className="grow placeholder:text-white/40"
                      placeholder="Enter your email"
                      required
                      value={emailId}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </label>

                  {/* password */}
                  <label className="input input-bordered flex items-center gap-2 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-within:border-white/30 focus-within:outline-none">
                    <svg
                      className="h-[1em] opacity-70"
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
                      className="grow placeholder:text-white/40"
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
                  <label className="input input-bordered flex items-center gap-2 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-within:border-white/30 focus-within:outline-none">
                    <svg
                      className="h-[1em] opacity-70"
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
                      className="grow placeholder:text-white/40"
                      placeholder="Age"
                      required
                      value={age}
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                    />
                  </label>

                  {/* skills */}
                  <label className="input input-bordered flex items-center gap-2 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-within:border-white/30 focus-within:outline-none">
                    <svg
                      className="h-[1em] opacity-70"
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
                      className="grow placeholder:text-white/40"
                      placeholder="Skills (comma separated)"
                      required
                      value={skills}
                      onChange={(e) => {
                        const skillsArr = e.target.value
                          .split(",")
                          .map((s) => s.trim());
                        setSkills(skillsArr);
                      }}
                    />
                  </label>
                </div>

                {loginError && (
                  <p className="text-red-400 text-sm mt-2 text-center">
                    {loginError}
                  </p>
                )}

                <div className="card-actions justify-center mt-6">
                  <button
                    className="btn w-full bg-white text-black hover:bg-gray-200 border-none font-medium text-lg h-12 min-h-0 rounded-xl"
                    onClick={singUpHandler}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
