import React, { useEffect, useState } from "react";

const ConnctionsCard = ({ user }) => {
  // console.log(user);

  const [profilePic, setProfilePic] = useState(
    "https://imgs.search.brave.com/MOJNZZ7jZEobQ9JitvnpUAhqvxpu5zwiYbbnQxtiNQg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzlmLzRj/L2YwLzlmNGNmMGYy/NGIzNzYwNzdhMmZj/ZGFiMmU4NWMzNTg0/LmpwZw"
  );
  const [fname, setFname] = useState("Jhon");
  const [lname, setLname] = useState("Doe");
  const [currentAge, setCurrentAge] = useState("18");
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
      if(photoUrl){
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
    <div className="flex justify-center items-center  border-1">
      <div className="card mt-5 w-96 shadow-sm bg-base-300">
        <figure className="px-10 pt-10">
          <img src={profilePic} alt="photo" className="rounded-xl border-1 h-70 w-55" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">
            {fname} {lname}
          </h2>
          <div>
            <p>Age: {currentAge}</p>
            <p>{userabout}</p>
          </div>
          <div className="card-actions p-2">
          </div>
            <button className="btn btn-warning">Remove Conection</button>
        </div>
      </div>
    </div>
  );
};

export default ConnctionsCard;
