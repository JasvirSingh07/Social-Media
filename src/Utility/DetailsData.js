export const DetailsData = [
  {
    id: "comp1",
    heading: "Personal Details",
    description: "Manage your connected experiences and account settings across Meta technologies.",
    details: [
      { title: "Contact info", info: "+918712546710" },
      { title: "Birthday", info: "February 5, 2004" },
      { title: "Account ownership and control", info: "Manage your data, modify your legacy contact, deactivate or delete your accounts and profiles." },
    ],
  },
  {
    id: "comp2",
    heading: "Password and Security",
   
    details: [
      { title: "Login & Recovery", info: "Manage your passwords, login preferences, and recovery methods." ,
        subDetails:[{ title: "Change Password" },
          { title: "Two-factor authentication" },]
      },
      { title: "Security checks", info: "Review security issues by running checks across apps, devices, and emails sent." ,subDetails:[{ title: "where you're logged in" },
        { title: "login alerts" },{title:"Recent emails"}] },
      
    ],
  },
  {
    id: "comp3",
    heading: "Tags and mentions",
   
    details: [
      { title: "Who can tag you", info: "Choose who can tag you in their photos and videos. When people try to tag you, they'll see if you don't allow tags from everyone." ,
        subDetails:[{ title: "Allow tags from everyone" },
          { title: "Allow tags from people you follow" },
        {title: "Don't allow tags"}]
      },
      { title: "Who can @mention you", info: "Choose who can @mention you to link your account in their stories, comments, live videos, and captions. When people try to @mention you, they'll see if you don't allow @mentions." ,subDetails:[{ title: "Allow mentions from everyone" },
        { title: "Allow mentions from people you follow" },{title:"Don't allow mentions"}] },
      
    ],
  },
];
