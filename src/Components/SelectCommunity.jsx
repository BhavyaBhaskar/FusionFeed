/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import supabase from "../supabase";

/* eslint-disable react/prop-types */
function SelectCommunity({ setCommunity }) {
  let query;

  useEffect(
    function () {
      async function fetchData() {
        query = await supabase.from("Post").select("*");
      }
      fetchData();
    },
    [query]
  );

  return (
    <>
      <span>Select Community</span>
      <select name="community" onChange={(e) => setCommunity(e.target.value)}>
        <option value="ALL">ALL</option>
        <option value="VIT-AP">VIT-AP</option>
        <option value="SRM-AP">SRM-AP</option>
      </select>
    </>
  );
}

export default SelectCommunity;
