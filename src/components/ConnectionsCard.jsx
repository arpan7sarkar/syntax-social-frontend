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
    <div className="relative w-[340px] h-[500px] bg-[#111] rounded-[32px] border border-white/10 shadow-2xl overflow-hidden flex flex-col mx-auto my-6 transition-transform hover:scale-[1.02] duration-300">
      {/* Image Section (60%) */}
      <div className="h-[60%] relative">
        <img
          src={
            photoUrl ||
            "https://i.pinimg.com/736x/f1/01/e0/f101e02ae91f92e9e8c70baa78beda12.jpg"
          }
          alt={`${fName} ${lName}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Content Section (40%) */}
      <div className="h-[40%] bg-[#111] p-6 flex flex-col relative -mt-4">
        <div className="flex justify-between items-start mb-1">
          <div>
            <h3 className="text-2xl font-bold text-white">
              {fName} {lName}, {age}
            </h3>
            <p className="text-gray-400 text-sm font-medium">Developer</p>
          </div>
          <i className="ri-code-s-slash-line text-2xl text-gray-600"></i>
        </div>

        {/* About */}
        <div className="mt-2 mb-4 overflow-hidden flex-1">
          <p className="text-gray-300 text-sm line-clamp-2">{about}</p>
        </div>

        {/* Actions */}
        <div className="mt-auto flex justify-center">
          <button className="px-6 py-3 rounded-full bg-[#1A1A1A] text-red-500 font-semibold flex items-center gap-2 hover:bg-[#222] hover:text-red-400 transition-all border border-white/10 group shadow-lg">
            <i className="ri-user-unfollow-line text-xl group-hover:scale-110 transition-transform"></i>
            Remove Connection
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnctionsCard;
