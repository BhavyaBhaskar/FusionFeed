/* eslint-disable react/prop-types */
import SearchPost from "./SearchPost";
import SelectCommunity from "./SelectCommunity";

function Header({ setCommunity }) {
  return (
    <header>
      <h1>
        <span>⚛️</span>The Fusion Feed
      </h1>
      <div>
        <SelectCommunity setCommunity={setCommunity} />
        <SearchPost />
      </div>
    </header>
  );
}

export default Header;
