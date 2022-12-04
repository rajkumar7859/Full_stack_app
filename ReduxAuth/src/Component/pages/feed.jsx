import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeeds } from "../../redux/feed/feed.action";

const Feed = () => {
  const feeds = useSelector((store) => store.feed.feeds);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeeds());
  }, []);
  return (
    <div>
      <h1>Feeds</h1>
      {feeds.map((getFeeds) => (
        <ul key={getFeeds.id}>
          <li>{getFeeds.message}</li>
        </ul>
      ))}
    </div>
  );
};

export default Feed;
