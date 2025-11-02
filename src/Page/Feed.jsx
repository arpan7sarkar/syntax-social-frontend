import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constant";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import axios from "axios";
import FeedCard from "../components/FeedCard";

const Feed = () => {
  const feed = useSelector((state) => state.feed);
  const dispatch = useDispatch();
  let data=null;
  const getFeed = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
      // console.log(res.data);
      data=res.data;

    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getFeed();
    console.log(data)
  }, []);
  return (
    <div>
      <h1>{data}</h1>
      <h1>{feed}</h1>
      <FeedCard data={[data]}/>
    </div>
  );
};

export default Feed;
