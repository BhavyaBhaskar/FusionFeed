/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import supabase from "../supabase";
import { useEffect, useState } from "react";

let query;

function PostList({ community }) {
  const [post, setPost] = useState();

  useEffect(
    function () {
      async function fetchData() {
        query = await supabase.from("Post").select("*");
        setPost(query);
      }
      fetchData();
    },
    [query]
  );

  return (
    <ul>
      {query?.data.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          postcommunity={post.community}
          community={community}
        />
      ))}
    </ul>
  );
}

function Post({ key, title, body, postcommunity, community }) {
  if (postcommunity === community) {
    return (
      <li>
        <div className="Post-Title-Community">
          <h3>{title}</h3>
          <h2 className="Post-Community">{postcommunity}</h2>
        </div>
        <p>{body}</p>
      </li>
    );
  }

  if (community === "ALL") {
    return (
      <li>
        <div className="Post-Title-Community">
          <h3>{title}</h3>
          <h2 className="Post-Community">{postcommunity}</h2>
        </div>
        <p>{body}</p>
      </li>
    );
  }
}

export default PostList;
