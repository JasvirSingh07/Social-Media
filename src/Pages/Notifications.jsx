import { MdArrowBackIosNew } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import { notificationsData } from "../Utility/NotificationsData";

const NotificationItem = ({ notification }) => (
  <div className="flex items-center border-b border-gray-800 py-2">
    <img
      src={notification.profileImg}
      alt={`Profile picture of ${notification.name}`}
      className="rounded-full w-10 h-10 mr-4"
    />
    <div className="flex-grow">
      <p>
        <strong>{notification.name}</strong> {notification.action}:{" "}
      </p>
      {notification.time && (
        <p className="text-gray-500">{notification.time}</p>
      )}
    </div>
    {notification.type === "request" && (
      <div className="flex space-x-2">
        <button className="bg-blue-500 text-white px-2 py-1 rounded">
          Confirm
        </button>
        <button className="bg-gray-700 text-white px-2 py-1 rounded">
          Delete
        </button>
      </div>
    )}
    {notification.type === "follow" && (
      <button className="bg-gray-700 text-white px-2 py-1 rounded">
        Following
      </button>
    )}
    {notification.type === "story" || notification.type === "comment" ? (
      <img
        src="https://placehold.co/40x40"
        alt="Image related to the action"
        className="ml-4 rounded-full w-10 h-10"
      />
    ) : null}
  </div>
);

export const Notifications = () => {
  const navigate = useNavigate();
  const handleBackArrowClick = () => {
    navigate("/settings");
  }
    return (
      <div className="px-[2.5vw] py-[3vw] h-screen text-white">
        <div className="flex items-center gap-[2vw]">
      <MdArrowBackIosNew  className="text-2xl" onClick={handleBackArrowClick} />
        <label className="text-2xl font-bold">Notifications</label>
      </div>
        <div className="my-4">
          <h2 className="text-xl font-semibold mb-2">Follow requests</h2>
          <NotificationItem notification={notificationsData[0]} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">This week</h2>
          {notificationsData.slice(1, 4).map((notification, index) => (
            <NotificationItem key={index} notification={notification} />
          ))}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">This month</h2>
          {notificationsData.slice(4).map((notification, index) => (
            <NotificationItem key={index} notification={notification} />
          ))}
        </div>
      </div>
    );
  };
