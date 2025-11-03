import { useState } from "react";

const EditProfile = () => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [age, setAge] = useState(18);
  return (
    <div className="flex justify-center items-center mt-35 ">
      <div className="card bg-base-200 rounded-2xl overflow-hidden w-96 shadow-sm  ">
        <div className="card-body ">
          <h2 className="card-title ml-28 text-3xl p-2 font-semibold">Profile</h2>
          <div className="flex flex-col justify-center items-center gap-2">
            {/* emailId */}
            <div>
            <label className="input validator">
              <input
                type="text"
                placeholder="Enter your first name"
                required
                // value={emailId}
                onChange={(e) => {
                 setFName(e.target.value);
                 console.log(fName);
                 
                }}
              />
            </label>
            <label className="input validator">
              <input
                type="text"
                placeholder="Enter your first name"
                required
                // value={emailId}
                onChange={(e) => {
                 setFName(e.target.value);
                 console.log(fName);
                 
                }}
              />
            </label>


            </div>
            
          </div>
          {/* <p className="text-red-500"></p> */}
          <div className="card-actions justify-center p-4">
            <button
              className="btn btn-primary active:scale-95"
            //   onClick={loginHadnler}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
