/* eslint-disable react/prop-types */
function SelectCommunity({ setCommunity }) {
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
