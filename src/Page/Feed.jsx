import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constant";
import { addFeed } from "../utils/feedSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import FeedCard from "../components/FeedCard";

const Feed = () => {
  const feed = useSelector((state) => state.feed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
  return (
    feed && (
      <div className="flex flex-wrap justify-center overflow-hidden">
        {feed.map((user,idx) => {
          return <FeedCard key={user._id ?? idx} user={user} />;
        })
      }
      </div>
    )
  );
};

export default Feed;
