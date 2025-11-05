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
      console.log("Update successful ✅");
    } catch (error) {
      console.error("Error updating profile ❌:", error);
    }
  };

  if (!user) return null;

  return (
    <div className="h-screen w-full flex justify-center mt-30">
      <div className="h-6/7 w-1/3 rounded-2xl overflow-hidden">
        {/* Profile section */}
        <div className="bg-base-200 h-full w-full p-4">
          <div className="text-4xl flex justify-center items-center p-2 font-semibold">
            PROFILE
          </div>

          {/* Profile Pic */}
          <div>
            <legend className="fieldset-legend text-xl p-2">
              Profile Pic Link
            </legend>
            <input
              type="text"
              className="input w-full p-4"
              placeholder="Profile Pic Link"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>

          {/* Name */}
          <div className="flex flex-col gap-5">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl p-2">Name</legend>
              <div className="flex flex-row gap-5">
                <input
                  type="text"
                  className="input p-4 w-1/2"
                  placeholder="First Name"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                />
                <input
                  type="text"
                  className="input p-4 w-1/2"
                  placeholder="Last Name"
                  value={lName}
                  onChange={(e) => setLName(e.target.value)}
                />
              </div>
            </fieldset>
          </div>

          {/* Age & Gender */}
          <fieldset className="flex flex-row gap-5 mt-4">
            <div className="w-1/2">
              <legend className="fieldset-legend text-xl p-2">Age</legend>
              <select
                className="select p-4 h-15 w-full"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
              >
                {Array.from({ length: 13 }, (_, i) => 18 + i).map((ageVal) => (
                  <option key={ageVal} value={ageVal}>
                    {ageVal}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-1/2">
              <legend className="fieldset-legend text-xl p-2">Gender</legend>
              <select
                className="select p-4 h-15 w-full"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </fieldset>

          {/* About */}
          <fieldset className="fieldset mt-4">
            <legend className="fieldset-legend text-xl p-2">About</legend>
            <textarea
              className="textarea p-4 w-full h-40"
              placeholder="Write something about yourself"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </fieldset>

          {/* Submit button */}
          <div className="flex justify-center mt-6">
            <button className="btn bg-primary text-white" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
      </div>

      {/* Preview card */}
      <UserCard user={{ fName, lName, age, gender, about, photoUrl }} />
    </div>
  );
};

export default EditProfile;
