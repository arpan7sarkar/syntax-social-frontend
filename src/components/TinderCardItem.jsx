import React from "react";

const TinderCardItem = ({ user }) => {
  const { fName, lName, age, about, photoUrl, gender, skills } = user;

  return (
    <div className="relative w-[340px] h-[500px] bg-[#111] rounded-[32px] border border-white/10 shadow-2xl overflow-hidden flex flex-col select-none">
      {/* Image Section */}
      <div className="h-[65%] relative pointer-events-none">
        <img
          src={
            photoUrl ||
            "https://i.pinimg.com/736x/f1/01/e0/f101e02ae91f92e9e8c70baa78beda12.jpg"
          }
          alt={`${fName} ${lName}`}
          className="w-full h-full object-cover"
          draggable="false"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Content Section*/}
      <div className="h-[35%] bg-[#111] p-6 flex flex-col relative -mt-4 pointer-events-none">
        <div className="flex justify-between items-start mb-1">
          <div>
            <h3 className="text-2xl font-bold text-white">
              {fName} {lName}, {age}
            </h3>
            <p className="text-gray-400 text-sm font-medium capitalize">
              {gender || "Developer"}
            </p>
          </div>
          <i className="ri-code-s-slash-line text-2xl text-gray-600"></i>
        </div>

        {/* About / Skills */}
        <div className="mt-2 mb-4 overflow-hidden">
          <p className="text-gray-300 text-sm line-clamp-2">{about}</p>
        </div>

        {/* Tags (if available) */}
        {skills && skills.length > 0 && (
          <div className="flex gap-2 mt-auto">
            {skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-[#1A1A1A] rounded-full text-xs text-gray-300 border border-white/5 flex items-center gap-1.5"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TinderCardItem;
