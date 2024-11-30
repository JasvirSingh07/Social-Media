import { FaHeart, FaComment, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import img1 from "/images/img4.webp";
import img2 from "/images/virat.webp";
import img3 from "/images/img10.jpg";
import img4 from "/images/img.jpg";
import img5 from "/images/img9.jpg";

const Post = () => {
  const userId = 7101;
  const [postData, setPostData] = useState([
    {
      id: 1,
      username: "cr.07",
      time: "4h",
      imgSrc: img1,
      likes: [],
      comments: [],
    },
    {
      id: 2,
      username: "virat",
      time: "2h",
      imgSrc: img2,
      likes: [],
      comments: [],
    },
    {
      id: 3,
      username: "rohit.06",
      time: "2h",
      imgSrc: img3,
      likes: [],
      comments: [],
    },
    {
      id: 4,
      username: "jxss.07",
      time: "2h",
      imgSrc: img4,
      likes: [],
      comments: [],
    },
    {
      id: 5,
      username: "zoya.khan",
      time: "2h",
      imgSrc: img5,
      likes: [],
      comments: [],
    },
  ]);

  const [currentComment, setCurrentComment] = useState({});

  const likeHandler = (id) => {
    const updatedPostData = postData.map((data) => {
      if (data.id === id) {
        return {
          ...data,
          likes: data.likes.includes(userId)
            ? data.likes.filter((ids) => ids !== userId)
            : [...data.likes, userId],
        };
      } else {
        return data;
      }
    });
    setPostData(updatedPostData);
  };


  const commentHandler = (id) => {
    if (!currentComment[id]?.trim()) return;

    const updatedPostData = postData.map((data) => {
      if (data.id === id) {
        return {
          ...data,
          comments: [
            ...data.comments,
            { text: currentComment[id], user: "You" },
          ],
        };
      }
      return data;
    });

    setPostData(updatedPostData);
    setCurrentComment({ ...currentComment, [id]: "" });
  };

  const handleInputChange = (id, value) => {
    setCurrentComment({ ...currentComment, [id]: value });
  };

  const handleKeyDown = (id, event) => {
    if (event.key === "Enter") {
      commentHandler(id);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {postData.map((post, index) => (
        <div key={index} className="shadow-lg p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 text-center mr-4">
              <img
                src={post.imgSrc}
                alt="img"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div className="">{post.username}</div>
            <div className="text-gray-500 ml-auto">{post.time}</div>
          </div>

          <img
            src={post.imgSrc}
            alt={post.username}
            className="w-full h-auto sm:h-[25vw] rounded-lg"
          />

          <div className="flex items-center mt-4 gap-2">
            <FaHeart
              className={`cursor-pointer ${
                post.likes.includes(userId) ? "text-red-500" : "text-black"
              }`}
              onClick={() => likeHandler(post.id)}
            />
            <span>{post.likes.length}</span>
            <FaComment className="cursor-pointer" />
            <span>{post.comments.length}</span>
            <FaPaperPlane className="mr-4" />
          </div>

          <div className="mt-4">
            {post.username}
            <input
              type="text"
              value={currentComment[post.id] || ""}
              onChange={(e) => handleInputChange(post.id, e.target.value)}
              onKeyDown={(e) => handleKeyDown(post.id, e)}
              className="text-gray-500 mt-2 outline-none  w-full rounded-md px-2 py-1"
              placeholder="Add a comment"
            />
          </div>

          <div className="mt-4">
            {post.comments.map((comment, i) => (
              <div key={i} className="text-gray-700 text-sm mb-2">
                <span className="font-semibold">{comment.user} : </span>
                {comment.text}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
