import {
  FaUser,
  FaLock,
  FaBell,
  FaUserFriends,
  FaBan,
  FaAt,
  FaComments,
  FaUserSlash,
  FaVolumeMute,
  FaGlobe,
  FaQuestionCircle,
  FaSignOutAlt,
} from 'react-icons/fa';
import { MdManageAccounts, MdSupervisorAccount } from 'react-icons/md';

export const settingsData = [
  {
    sectionTitle: "Accounts Center",
    description: "Manage your connected experiences and account settings across Meta technologies.",
    links: [
      { icon: FaUser, label: "Personal details", to: "/personalDetails" },
      { icon: FaLock, label: "Password and security", to: "/passwordSecurity" },
    ],
  },
  {
    sectionTitle: "How you use Instagram",
    links: [
      { icon: FaUser, label: "Edit profile", to: "/editProfile" },
      { icon: FaBell, label: "Notifications", to: "/notifications" },
    ],
  },
  {
    sectionTitle: "Who can see your content",
    links: [
      { icon: FaLock, label: "Account privacy", to: "/accountPrivacy" },
      { icon: FaUserFriends, label: "Close Friends", to: "/closeFriends" },
      { icon: FaBan, label: "Blocked", to: "/blocked" },
    ],
  },
  {
    sectionTitle: "How others can interact with you",
    links: [
      { icon: FaAt, label: "Tags and mentions", to: "/tagsMentions" },
      { icon: FaComments, label: "Comments", to: "/comments" },
      { icon: FaVolumeMute, label: "Muted accounts", to: "/mutedAccounts" },
      { icon: FaUserSlash, label: "Restricted accounts", to: "/restrictedAccounts" },
    ],
  },
  {
    sectionTitle: "Your app and media",
    links: [
      { icon: FaGlobe, label: "Language", to: "/language" },
    ],
  },
  {
    sectionTitle: "More info and support",
    links: [
      { icon: FaQuestionCircle, label: "Help", to: "/help" },
      { icon: MdSupervisorAccount, label: "Add Account", to: "/" },
      { icon: MdManageAccounts, label: "Switch Account", to: "/" },
      { icon: FaSignOutAlt, label: "Log out", to: "/" },
    ],
  },
];

