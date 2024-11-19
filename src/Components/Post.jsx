import { FaHeart, FaComment, FaPaperPlane } from "react-icons/fa";
import postData from "../Utility/PostData";

const Post = () => {
  // bg-[#DFE7FD]
  return (
    <div className="">
      {postData.map((post, index) => (
        <div key={index} className="shadow-lg my-8 p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <div className={`flex-shrink-0 text-center mr-4`}>
              <img
                src={post.imgSrc}
                alt="img"
                className=" w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div className="">{post.username}</div>
            <div className="text-gray-500 ml-auto">{post.time}</div>
          </div>

          {/* Post Content */}

          <img
            src={post.imgSrc}
            alt={post.username}
            className="w-full h-auto sm:h-[25vw] rounded-lg"
          />

          {/* Interaction Icons */}
          <div className="flex items-center mt-4">
            <FaHeart className=" mr-4" />
            <FaComment className=" mr-4" />
            <FaPaperPlane className="" />
          </div>

          {/* Post Footer */}
          <div className="text-gray-900 mt-2">{post.likes} likes</div>
          <div className=" mt-2">
            {post.username}{" "}
            <span className="text-gray-500">{post.comments}</span>
          </div>
          <div className="text-gray-500 mt-2">Add a comment...</div>
        </div>
      ))}
    </div>
  );
};

export default Post;
