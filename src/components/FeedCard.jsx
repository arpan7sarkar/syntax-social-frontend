import React, { useEffect, useState } from "react";

const FeedCard = ({user}) => {
  console.log(user);
  
  const [profilePic, setProfilePic] = useState(
    "https://imgs.search.brave.com/MOJNZZ7jZEobQ9JitvnpUAhqvxpu5zwiYbbnQxtiNQg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzlmLzRj/L2YwLzlmNGNmMGYy/NGIzNzYwNzdhMmZj/ZGFiMmU4NWMzNTg0/LmpwZw"
  );
  const [fname, setFname] = useState("Jhon");
  const [lname, setLname] = useState("Doe");
  const [currentAge, setCurrentAge] = useState("18");
  const [userabout, setUserabout] = useState(
    " Hey there I am using Syntax social"
  );
  const { fName, lName, age, about } = user;
  const getUserDetails = () => {
    try {
      setFname(fName);
      setLname(lName);
      setCurrentAge(age);
      setUserabout(about);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect( () => {
    getUserDetails();
  
  }, [user]);
  return (
    <div className="flex justify-center items-center ">
      <div className="card mt-5 w-96 shadow-sm bg-base-300">
        <figure className="px-10 pt-10">
          <img src={profilePic} alt="Shoes" className="rounded-xl " />
        </figure>
        <div className="card-body items-center text-center">
          {/* <h2 className="card-title">Card Title</h2> */}
          {/* <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p> */}
          <h2 className="card-title text-3xl">
            {fname} {lname}
          </h2>
          <div>
            <p>Age: {currentAge}</p>
            <p>{userabout}</p>
          </div>
          <div className="card-actions p-2">
            <button className="btn btn-accent">Add connection</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
