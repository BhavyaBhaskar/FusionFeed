/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import supabase from "../supabase";

function FormAddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [community, setCommunity] = useState("");

  let query;
  useRef(function () {
    async function fetchData() {
      query = await supabase.from("Community").select("*");
      console.log(query);
    }
    fetchData();
  }, []);

  const handleSubmit = async function (e) {
    e.preventDefault();
    if (!body || !title) return;
    if (community === "VIT-AP" || community === "SRM-AP" || community === "") {
      const { data, error } = await supabase
        .from("Post")
        .insert([{ title, body, community }])
        .select();
    }

    setTitle("");
    setBody("");
    setCommunity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
      />
      <input
        value={community}
        onChange={(e) => setCommunity(e.target.value)}
        placeholder="Post community"
      />
      <button>Add post</button>
    </form>
  );
}

export default FormAddPost;
