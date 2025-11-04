import { useEffect, useState } from "react";
const EditProfile = ({ user }) => {
  const { fName, lName, age, about, photoUrl,gender } = user;
  const [Fname, setFName] = useState("");
  const [Lname, setLName] = useState("");
  const [Age, setAge] = useState(18);
  const [profilePic, setProfilePic] = useState("");
  const [Gender, setGender] = useState("");
  const [About, setAbout] = useState("Hey there I am using Syntax social");
  const getUserDetails =()=>{
    setFName(fName);
    setLName(lName);
    setAge(age);
    setAbout(about);
    setProfilePic(photoUrl);
    setGender(gender);
  }
  useEffect(()=>{
    getUserDetails();
  },[user])
  return (
    user ? <div className="h-screen w-full flex justify-center mt-30 r">
      <div className="h-3/4 w-1/3 rounded-2xl overflow-hidden ">
        {/* Profile section */}
        <div className="bg-base-200 h-full w-full  p-2">
          <div className="text-4xl flex justify-center items-center  p-2 font-semibold">
            PROFILE
          </div>
          {/* Profile Pic Link */}
          <div>
            <legend className="fieldset-legend text-xl p-2">
              Profile Pic Link
            </legend>
            <input
              type="text"
              className="input w-full p-4"
              placeholder="Profile Pic Link"
              //   value={profilePic}
              //   onChange={(e) => setProfilePic(e.target.value)}
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
                  placeholder={Fname}
                  value={Fname}
                  onChange={(e) => setFName(e.target.value)}
                />
                <input
                  type="text"
                  className="input p-4 w-1/2"
                  placeholder={Lname}
                  value={Lname}
                  onChange={(e) => setLName(e.target.value)}
                />
              </div>
            </fieldset>
          </div>
          {/* Age*/}
          <fieldset className="flex flex-row gap-5">
            <div className="w-1/2">
              <legend className="fieldset-legend text-xl p-2">Age</legend>
              <select
                className="select p-4 h-15"
                value={Age}
                onChange={(e) => setAge(e.target.value)}
              >
                {[18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map(
                  (ageVal) => (
                    <option key={ageVal} value={ageVal}>
                      {ageVal}
                    </option>
                  )
                )}
              </select>
            </div>
            <div className="w-1/2">
              <legend className="fieldset-legend text-xl p-2">Gender</legend>
              <select className="select p-4 h-15">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </fieldset>

          {/* About */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl p-2">About</legend>
            <textarea
              className="textarea p-4 w-full h-40"
              placeholder={About}
              value={
                About
              }
            ></textarea>
          </fieldset>

          {/* Submit buttn */}
          <div className="flex justify-center mt-4">
            <button className="btn bg-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
