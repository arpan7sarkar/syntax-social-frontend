import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { removeRequest } from "../utils/requestSlice";

const RequestCard = ({ user }) => {
  const dispatch=useDispatch();
  if (!user) return null;
  const { _id } = user;
  const { fname, lname, age, about, photoUrl } = user.fromUserId;
  const requestHandler = async (status,id) => {
    try {
      const res = await axios.post(`${BASE_URL}/request/review/${status}/${id}`, {}, { withCredentials: true });
      console.log("accepted:", res.data);
      dispatch(removeRequest(id))
    } catch (error) {
      console.error("Accept request error:", error.response?.data ?? error.message);
    }
  };


  return (
    <div className="flex justify-center items-center border-1">
      <div className="card mt-5 w-96 shadow-sm bg-base-300" key={_id}>
        <figure className="px-10 pt-10">
          <img src={photoUrl} alt="photo" className="rounded-xl border-1 h-70 w-55" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">{fname} {lname}</h2>
          <div>
            <p>Age: {age}</p>
            <p>{about}</p>
          </div>
          <div className="card-actions p-2 flex gap-10">
            <button className="btn btn-primary" onClick={() => requestHandler("accepted",_id)}>Accept</button>
            <button className="btn btn-warning" onClick={() =>  requestHandler("rejected",_id)}>Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;

