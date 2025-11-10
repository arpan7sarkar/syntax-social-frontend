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
    <div className="flex flex-col">
      {feed && (
        <div>
          <div className="flex flex-wrap justify-center overflow-hidden">
            {feed.map((user, idx) => {
              return <FeedCard key={user._id ?? idx} user={user} />;
            })}
          </div>
          <div className="mb-15 flex items-center justify-center gap-10 mt-5">
            <button className="btn p-9 rounded-2xl bg-accent text-black text-lg active:scale-95">
              Previous Page
            </button>
            <button className="btn p-9 rounded-2xl bg-accent text-black text-lg active:scale-95">
              Next Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;
