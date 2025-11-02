import React, { useEffect, useState } from "react";

const FeedCard = (props) => {
  const [profilePic, setProfilePic] = useState(
    "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.3xEyL-e1iF_e3pCb_OFCpgHaHa%3Fpid%3DApi&sp=1762100980T55e5b411e798a93d3ba259644b53acb424cf3fa72e1346f24f7fc90fe7f5ea6d"
  );
  const [fname, setFname] = useState("Jhon");
  const [lname, setLname] = useState("Doe");
  const [currentAge, setCurrentAge] = useState("18");
  const [userabout, setUserabout] = useState(
    " Hey there I am using Syntax social"
  );
  const { fName, lName, age, about } = props;
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
  useEffect(() => {
    getUserDetails();
  }, []);
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
