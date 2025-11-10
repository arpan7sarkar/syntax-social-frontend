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
    <div>
      {request &&<div>
          {request.map((user, idx) => {
            return <RequestCard user={user} key={user._id ?? idx} />;
          })}
      </div>}
    </div>
  );
};

export default Requests;
