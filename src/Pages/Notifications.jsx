import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { notificationsData } from "../data/NotificationsData";
import { NotificationItem } from "../Components/NotificationItem";

export const Notifications = () => {
  const navigate = useNavigate();
  const handleBackArrowClick = () => {
    navigate("/settings");
  };
  return (
    <div className="px-[2.5vw] py-[2vw] h-screen ">
      <div className="flex items-center gap-[2vw]">
        <MdArrowBackIosNew
          className="text-xl lg:text-2xl"
          onClick={handleBackArrowClick}
        />
        <label className="text-xl lg:text-2xl font-bold">Notifications</label>
      </div>
      <div className="my-4">
        <h2 className="text-lg lg:text-xl font-semibold mb-2">
          Follow requests
        </h2>
        <NotificationItem notification={notificationsData[0]} />
      </div>
      <div>
        <h2 className="text-lg lg:text-xl font-semibold mb-2">This week</h2>
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
