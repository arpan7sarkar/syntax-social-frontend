import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constant";
import { addFeed, removeFeed } from "../utils/feedSlice";
import React, { useEffect, useState, useMemo, useRef } from "react";
import axios from "axios";
import TinderCard from "react-tinder-card";
import TinderCardItem from "../components/TinderCardItem";

const Feed = () => {
  const feed = useSelector((state) => state.feed);
  const dispatch = useDispatch();
  const [lastDirection, setLastDirection] = useState();
  // We keep track of the current index to know which card is on top
  // However, react-tinder-card removes DOM elements when swiped out if we don't manage it.
  // A common pattern is to just render the list.

  // Refs for the cards to trigger swipe programmatically
  const childRefs = useRef([]);

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

  // Update refs array when feed changes
  const feedLength = feed ? feed.length : 0;
  useMemo(() => {
    childRefs.current = Array(feedLength)
      .fill(0)
      .map((i) => React.createRef());
  }, [feedLength]);

  const swiped = async (direction, user, index) => {
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

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  // We need a way to track the current top card for buttons.
  // Standard react-tinder-card example uses a state index.
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (feed) setCurrentIndex(feed.length - 1);
  }, [feed]);

  const canSwipe = currentIndex >= 0;

  const swipeManual = async (dir) => {
    if (canSwipe && childRefs.current[currentIndex]) {
      await childRefs.current[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // Callback when card is swiped (by user or button)
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
    // Remove the card from the store to update the UI
    dispatch(removeFeed(myIdentifier));
    // setCurrentIndex is handled by the useEffect on feed change
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
        {feed.map((user, index) => (
          <TinderCard
            ref={childRefs.current[index]}
            className="absolute top-0 left-0"
            key={user._id}
            onSwipe={(dir) => swiped(dir, user, index)}
            onCardLeftScreen={() => onCardLeftScreen(user._id)}
            preventSwipe={["up", "down"]}
          >
            <TinderCardItem user={user} />
          </TinderCard>
        ))}
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
