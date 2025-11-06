import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
import FeedCard from "../components/FeedCard";

const Connections = () => {
  const [user, setUser] = useState("")
  const getConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {withCredentials:true});
      console.log(res.data.data);
      setUser(res.data.data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getConnections();
  },[])
  return <div>
    <FeedCard user={user}/>
  </div>;
};

export default Connections;
