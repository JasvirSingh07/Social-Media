import Post from "../Components/Post";
import StoryList from "../Components/StoryList";

function Feed() {
  return (
    <div className="mx-8 mt-[8vw] sm:my-[1vw] ">
      <StoryList />
      <Post />
    </div>
  );
}

export default Feed;
