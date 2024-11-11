import Post from "./Post"
import StoryList from "./StoryList"

function Feed() {
  return (
    <div className="mx-8 my-[1vw]">
      <StoryList/>
      <Post/>
    </div>
  )
}

export default Feed
