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
      console.log(res.data.data);
      dispatch(addRequest(res.data.data));
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
          
          return <RequestCard user={user} key={idx} />;
        })}
      </div>}
      ;
    </div>
  );
};

export default Requests;
