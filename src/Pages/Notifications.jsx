const notificationsData = [
  {
    profileImg: "https://placehold.co/40x40",
    name: "official_d.eep_mehra",
    action: "Follow requests",
    additionalInfo: "official_d.eep_mehra + 7 others",
    type: "request",
    time: "",
  },
  {
    profileImg: "https://placehold.co/40x40",
    name: "dvinderx13",
    action: "liked your comment",
    additionalInfo: "🔥🔥",
    time: "3d",
    type: "comment",
  },
  {
    profileImg: "https://placehold.co/40x40",
    name: "lifts_raj_s92.0",
    action: "liked your story",
    additionalInfo: "lifts_raj_s92.0 and others",
    time: "3d",
    type: "story",
  },
  {
    profileImg: "https://placehold.co/40x40",
    name: "jashan_1224",
    action: "started following you",
    time: "1w",
    type: "follow",
  },
  {
    profileImg: "https://placehold.co/40x40",
    name: "official_d.eep_mehra",
    action: "requested to follow you",
    time: "2w",
    type: "request",
  },
];

const NotificationItem = ({ notification }) => (
  <div className="flex items-center border-b border-gray-800 py-2">
    <img src={notification.profileImg} alt={`Profile picture of ${notification.name}`} className="rounded-full w-10 h-10 mr-4" />
    <div className="flex-grow">
      <p>
        <strong>{notification.name}</strong>{" "}
        {notification.action}:{" "}
        <span className="text-red-500">{notification.additionalInfo}</span>
      </p>
      {notification.time && <p className="text-gray-500">{notification.time}</p>}
    </div>
    {notification.type === "request" && (
      <div className="flex space-x-2">
        <button className="bg-blue-500 text-white px-2 py-1 rounded">Confirm</button>
        <button className="bg-gray-700 text-white px-2 py-1 rounded">Delete</button>
      </div>
    )}
    {notification.type === "follow" && (
      <button className="bg-gray-700 text-white px-2 py-1 rounded">Following</button>
    )}
    {notification.type === "story" || notification.type === "comment" ? (
      <img src="https://placehold.co/40x40" alt="Image related to the action" className="ml-4 rounded-full w-10 h-10" />
    ) : null}
  </div>
);

const Notifications = () => (
  <div className="p-4 h-screen bg-black text-white">
    <h1 className="text-2xl font-bold mb-4">Notifications</h1>
    <div className="mb-4">
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

export default Notifications;
