/* eslint-disable react/prop-types */
import FormAddPost from "./FormAddPost";
import PostList from "./PostList";

function Main({ community }) {
  return (
    <main>
      <FormAddPost />
      <PostList community={community} />
    </main>
  );
}

export default Main;
