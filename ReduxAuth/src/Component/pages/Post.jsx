import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { postData } from "../../redux/post/post.action";

const Post = () => {
  const posts = useSelector((store) => store.post.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postData());
  }, []);
  return (
    <div>
      <h1>Post</h1>
      {posts.map((post) => (
        <ul key={post.id}>
          <li>{post.message}</li>
        </ul>
      ))}
    </div>
  );
};

export default Post;
