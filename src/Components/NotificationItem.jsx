export const NotificationItem = ({ notification }) => (
    <div className="flex items-center border-b py-2 ">
      <img
        src={notification.profileImg}
        alt={`Profile picture of ${notification.name}`}
        className="rounded-full w-8 h-8 lg:w-10 lg:h-10 mr-4"
      />
      <div className="flex-grow">
        <p className="text-xs lg:text-base">
          <strong>{notification.name}</strong> {notification.action}:
        </p>
        {notification.time && (
          <p className="text-gray-500 text-xs lg:text-base">{notification.time}</p>
        )}
      </div>
      {notification.type === "request" && (
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs lg:text-base">
            Confirm
          </button>
          <button className="bg-gray-700 text-white px-2 py-1 rounded text-xs lg:text-base ">
            Delete
          </button>
        </div>
      )}
      {notification.type === "follow" && (
        <button className="bg-gray-700 text-white px-2 py-1 rounded text-xs lg:text-base">
          Following
        </button>
      )}
      {notification.type === "story" || notification.type === "comment" ? (
        <img
          src="https://placehold.co/40x40"
          alt="Image related to the action"
          className="ml-4 rounded-full w-8 h-8 lg:w-10 lg:h-10"
        />
      ) : null}
    </div>
  );