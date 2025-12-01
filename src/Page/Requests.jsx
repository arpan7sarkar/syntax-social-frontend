import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";
import RequestCard from "../components/RequestCard";

const Requests = () => {
  const dispatch = useDispatch();
  const request = useSelector((state) => state.request);
  const getRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/recived", {
        withCredentials: true,
      });
      // support both shapes: { data: [...] } or direct array
      const data = res.data?.data ?? res.data;
      console.log(data);
      dispatch(addRequest(data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRequest();
  }, []);
  return (
    <div className="min-h-[80vh] w-full p-8">
      <h2 className="text-3xl font-bold text-white text-center mb-10">
        Connection Requests
      </h2>
      {request && request.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {request.map((user, idx) => {
            return <RequestCard user={user} key={user._id ?? idx} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[50vh]">
          <p className="text-xl text-gray-400">No pending requests</p>
        </div>
      )}
    </div>
  );
};

export default Requests;
