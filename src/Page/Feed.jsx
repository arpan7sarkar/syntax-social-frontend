import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constant";
import { addFeed, removeFeed } from "../utils/feedSlice";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import TinderCardItem from "../components/TinderCardItem";
import SwipeDeck from "../components/SwipeDeck";

const Feed = () => {
  const feed = useSelector((state) => state.feed);
  const dispatch = useDispatch();
  const [lastDirection, setLastDirection] = useState();
  const deckRef = useRef(null);

  const getFeed = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true,
      });
      // Shuffle the feed
      const shuffledFeed = res.data?.sort(() => Math.random() - 0.5);
      dispatch(addFeed(shuffledFeed));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  const swiped = async (direction, user) => {
    setLastDirection(direction);
    // API Call based on direction
    try {
      if (direction === "right") {
        await axios.post(
          `${BASE_URL}/request/send/interested/${user._id}`,
          null,
          { withCredentials: true }
        );
      } else if (direction === "left") {
        await axios.post(`${BASE_URL}/request/send/ignored/${user._id}`, null, {
          withCredentials: true,
        });
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  const canSwipe = feed && feed.length > 0;

  const swipeManual = (dir) => {
    deckRef.current?.swipe(dir);
  };

  const onCardLeftScreen = (userId) => {
    dispatch(removeFeed(userId));
  };

  if (!feed)
    return (
      <div className="flex justify-center items-center h-[60vh] text-white">
        Loading...
      </div>
    );
  if (feed.length === 0)
    return (
      <div className="flex justify-center items-center h-[60vh] text-white text-xl">
        No more profiles!
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full overflow-hidden relative">
      <div className="relative w-[340px] h-[500px]">
        <SwipeDeck
          ref={deckRef}
          items={feed}
          renderCard={(user) => <TinderCardItem user={user} />}
          onSwipe={swiped}
          onCardLeftScreen={onCardLeftScreen}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-8 mt-10 z-10">
        <button
          className="w-16 h-16 rounded-full bg-[#1A1A1A] text-red-500 text-3xl flex items-center justify-center hover:bg-[#222] hover:scale-110 transition-all border border-white/10 shadow-lg"
          onClick={() => swipeManual("left")}
          disabled={!canSwipe}
        >
          <i className="ri-close-line"></i>
        </button>
        <button
          className="w-16 h-16 rounded-full bg-gradient-to-tr from-accent-400 to-gray-600 text-white text-3xl flex items-center justify-center hover:scale-110 transition-all shadow-lg shadow-gray-600/30"
          onClick={() => swipeManual("right")}
          disabled={!canSwipe}
        >
          <i className="ri-heart-fill"></i>
        </button>
      </div>

      {lastDirection && (
        <div className="absolute bottom-4 text-white/50 text-sm">
          You swiped {lastDirection}
        </div>
      )}
    </div>
  );
};

export default Feed;
