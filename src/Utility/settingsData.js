import {
  FaUser,
  FaLock,
  // FaBullhorn,
  FaBell,
  FaUserFriends,
  FaBan,
  // FaEyeSlash,
  // FaCommentDots,
  FaAt,
  FaComments,
  FaShare,
  FaUserSlash,
  FaFont,
  FaVolumeMute,
  FaFileDownload,
  FaGlobe,
  FaLink,
  FaHandsHelping,
  FaQuestionCircle,
  FaUserShield,
  FaChartBar,
} from 'react-icons/fa';

export const settingsData = [
  {
    sectionTitle: "Accounts Center",
    description: "Manage your connected experiences and account settings across Meta technologies.",
    links: [
      { icon: FaUser, label: "Personal details", to: "/personalDetails" },
      { icon: FaLock, label: "Password and security", to: "/passwordSecurity" },
      // { icon: FaBullhorn, label: "Ad preferences", to: "/adPreferences" },
    ],
    // moreLink: "See more in Accounts Center",
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
      // { icon: FaEyeSlash, label: "Hide story and live", to: "/hideStory" },
    ],
  },
  {
    sectionTitle: "How others can interact with you",
    links: [
      // { icon: FaCommentDots, label: "Messages and story replies", to: "/messages" },
      { icon: FaAt, label: "Tags and mentions", to: "/tagsMentions" },
      { icon: FaComments, label: "Comments", to: "/comments" },
      { icon: FaShare, label: "Sharing", to: "/sharing" },
      { icon: FaUserSlash, label: "Restricted accounts", to: "/restrictedAccounts" },
      { icon: FaFont, label: "Hidden Words", to: "/hiddenWords" },
    ],
  },
  {
    sectionTitle: "What you see",
    links: [
      { icon: FaVolumeMute, label: "Muted accounts", to: "/mutedAccounts" },
      { icon: FaVolumeMute, label: "Content preferences", to: "/contentPreferences" },
      { icon: FaVolumeMute, label: "Like and share counts", to: "/likeShareCounts" },
    ],
  },
  {
    sectionTitle: "Your app and media",
    links: [
      { icon: FaFileDownload, label: "Archiving and downloading", to: "/archivingDownloading" },
      { icon: FaGlobe, label: "Language", to: "/language" },
      { icon: FaLink, label: "Website permissions", to: "/websitePermissions" },
    ],
  },
  {
    sectionTitle: "For families",
    links: [{ icon: FaHandsHelping, label: "Family Center", to: "/familyCenter" }],
  },
  {
    sectionTitle: "More info and support",
    links: [
      { icon: FaQuestionCircle, label: "Help", to: "/help" },
      { icon: FaUserShield, label: "Privacy Center", to: "/privacyCenter" },
      { icon: FaChartBar, label: "Account Status", to: "/accountStatus" },
    ],
  },
];
