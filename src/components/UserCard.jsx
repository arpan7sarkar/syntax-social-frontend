import React, { useEffect, useState } from "react";

const UserCard = ({ user }) => {
  // console.log(user);

  const [profilePic, setProfilePic] = useState(
    "https://imgs.search.brave.com/MOJNZZ7jZEobQ9JitvnpUAhqvxpu5zwiYbbnQxtiNQg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzlmLzRj/L2YwLzlmNGNmMGYy/NGIzNzYwNzdhMmZj/ZGFiMmU4NWMzNTg0/LmpwZw"
  );
  const [fname, setFname] = useState("Jhon");
  const [lname, setLname] = useState("Doe");
  const [currentAge, setCurrentAge] = useState("18");
  const [gender, setGender] = useState(user.gender);
  const [userabout, setUserabout] = useState(
    " Hey there I am using Syntax social"
  );
  const { fName, lName, age, about, photoUrl } = user;
  const getUserDetails = () => {
    try {
      setFname(fName);
      setLname(lName);
      setCurrentAge(age);
      setUserabout(about);
      if (photoUrl) {
        setProfilePic(photoUrl);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, [user]);
  return (
    <div>
      <div className="card w-full shadow-xl bg-white/5 border border-white/10 backdrop-blur-md text-white">
        <figure className="px-10 pt-10">
          <img
            src={profilePic}
            alt="photo"
            className="rounded-xl border border-white/10 h-70 w-55 object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl font-bold">
            {fname} {lname}
          </h2>
          <div className="text-white/70">
            <p className="mb-2">
              <span className="font-semibold text-white">Age:</span>{" "}
              {currentAge}
              {gender && (
                <span className="ml-4">
                  <span className="font-semibold text-white">Gender:</span>{" "}
                  {gender}
                </span>
              )}
            </p>
            <p className="italic">"{userabout}"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
