import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
import FeedCard from "../components/FeedCard";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import { useResolvedPath } from "react-router";
import ConnctionsCard from "../components/ConnectionsCard";

const Connections = () => {
  const connections = useSelector((state) => state.connections);
  const dispatch = useDispatch();
  const getConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      // console.log(res.data.data);
      // setUser(res.data.data);
      dispatch(addConnections(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <h1> No Connections Found</h1>;
  
  return (
    <div>
      {connections && (
        <div className="flex flex-wrap justify-center overflow-hidden">
          {connections.map((user, idx) => {
            return <ConnctionsCard key={idx} user={user} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Connections;
