import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { removeRequest } from "../utils/requestSlice";

const RequestCard = ({ user }) => {
  const dispatch = useDispatch();
  if (!user) return null;
  const { _id } = user;
  const { fName, lName, age, about, photoUrl } = user.fromUserId;
  const requestHandler = async (status, id) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/review/${status}/${id}`,
        {},
        { withCredentials: true }
      );
      console.log("accepted:", res.data);
      dispatch(removeRequest(id));
    } catch (error) {
      console.error(
        "Accept request error:",
        error.response?.data ?? error.message
      );
    }
  };

  return (
    <div className="relative w-[340px] h-[550px] bg-[#111] rounded-[32px] border border-white/10 shadow-2xl overflow-hidden flex flex-col mx-auto my-6 transition-transform hover:scale-[1.02] duration-300">
      {/* Image Section */}
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

      {/* Content Section */}
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
        <div className="mt-auto flex justify-center gap-6 items-center">
          <button
            className="w-14 h-14 rounded-full bg-[#1A1A1A] text-red-500 text-xl flex items-center justify-center hover:bg-[#222] hover:scale-110 transition-all border border-white/10 group"
            onClick={() => requestHandler("rejected", _id)}
            title="Reject"
          >
            <i className="ri-close-line group-hover:scale-110 transition-transform"></i>
          </button>
          <button
            className="w-16 h-16 rounded-full bg-gradient-to-tr from-accent-400 to-gray-600 text-white text-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-all shadow-gray-600/30"
            onClick={() => requestHandler("accepted", _id)}
            title="Accept"
          > 
            <i className="ri-check-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
