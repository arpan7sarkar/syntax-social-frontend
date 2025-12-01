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
    <div className="min-h-[80vh] w-full p-8">
      <h2 className="text-3xl font-bold text-white text-center mb-10">
        Your Connections
      </h2>
      {connections && connections.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {connections.map((user, idx) => {
            return <ConnctionsCard key={idx} user={user} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[50vh]">
          <p className="text-xl text-gray-400">No connections yet</p>
        </div>
      )}
    </div>
  );
};

export default Connections;
