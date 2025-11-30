import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constant";

const EditProfile = ({ user }) => {
  const dispatch = useDispatch();
  const [fName, setFName] = useState(user?.fName || "");
  const [lName, setLName] = useState(user?.lName || "");
  const [age, setAge] = useState(user?.age || 18);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || "");
  const [gender, setGender] = useState(user?.gender || "male");
  const [about, setAbout] = useState(
    user?.about || "Hey there I am using Syntax social"
  );
  const [mainError, setMainError] = useState("");
  const [toast, setToast] = useState("");
  const [showToast, setShowToast] = useState(false);

  const getUserDetails = () => {
    if (user) {
      dispatch(addUser(user));
    }
  };

  useEffect(() => {
    getUserDetails();
  }, [user]);

  // ✅ Update user data to backend
  const handleUpdate = async () => {
    try {
      await axios.patch(
        `${BASE_URL}/profile/edit`,
        { fName, lName, age, about, photoUrl, gender },
        { withCredentials: true }
      );
      setToast("User update succesfully");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 1000);
    } catch (error) {
      console.error("Error updating profile ❌:", error);
      setMainError(error.response?.data || "An error occurred");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen w-full flex justify-center items-center py-10 relative">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-white/[0.03] blur-[120px] rounded-full"></div>
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[120%] h-[800px] border-t border-white/10 rounded-[100%] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl px-4 z-10">
        {/* Profile Form Section */}
        <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Edit Profile
          </h2>

          <div className="space-y-6">
            {/* Profile Pic */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white/70">
                  Profile Picture URL
                </span>
              </label>
              <input
                type="text"
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered w-full bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </div>

            {/* Name */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white/70">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered w-full bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white/70">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered w-full bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors"
                  value={lName}
                  onChange={(e) => setLName(e.target.value)}
                />
              </div>
            </div>

            {/* Age & Gender */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white/70">Age</span>
                </label>
                <select
                  className="select select-bordered w-full bg-white/5 border-white/10 text-white focus:border-white/30 focus:outline-none transition-colors"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                >
                  {Array.from({ length: 83 }, (_, i) => 18 + i).map(
                    (ageVal) => (
                      <option
                        key={ageVal}
                        value={ageVal}
                        className="bg-[#1a1a1a]"
                      >
                        {ageVal}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white/70">Gender</span>
                </label>
                <select
                  className="select select-bordered w-full bg-white/5 border-white/10 text-white focus:border-white/30 focus:outline-none transition-colors"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="male" className="bg-[#1a1a1a]">
                    Male
                  </option>
                  <option value="female" className="bg-[#1a1a1a]">
                    Female
                  </option>
                  <option value="other" className="bg-[#1a1a1a]">
                    Other
                  </option>
                </select>
              </div>
            </div>

            {/* About */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white/70">About</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-32 w-full bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors"
                placeholder="Tell us about yourself..."
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                className="btn btn-block bg-white text-black hover:bg-white/90 border-none normal-case text-lg font-medium"
                onClick={handleUpdate}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center min-h-[400px]">
            <h3 className="text-xl font-semibold text-white mb-6">
              Live Preview
            </h3>
            <UserCard user={{ fName, lName, age, gender, about, photoUrl }} />
          </div>
        </div>
      </div>

      {showToast && (
        <div className="toast toast-top toast-center z-50">
          {mainError && (
            <div className="alert alert-error bg-red-500/90 text-white border-none">
              <span>{mainError}</span>
            </div>
          )}

          {toast && (
            <div className="alert alert-success bg-green-500/90 text-white border-none">
              <span>{toast}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EditProfile;
