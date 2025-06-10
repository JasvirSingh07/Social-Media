import { Link } from "react-router-dom";  
import { settingsData } from "../data/settingsData"; 

const Settings = () => {
  return (
    <div className="py-[2vw] px-[2.5vw] ">
      <h1 className="text-xl lg:text-2xl font-bold mb-4">Settings</h1>
      {settingsData.map((section, idx) => (
        <div key={idx} className="mb-4">
          <h2 className="text-lg lg:text-xl text-gray-600 font-bold mb-2">{section.sectionTitle}</h2>
          <p className="text-sm lg:text-lg mb-2">{section.description}</p>
          <ul className="text-sm lg:text-lg mb-5 ">
            {section.links.map((link, linkIdx) => (
              <li key={linkIdx} className="flex items-center mb-1">
                <link.icon className="mr-2" />
                <Link to={link.to} className=" hover:text-blue-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {section.moreLink && (
            <Link to="/moreDetails" className="text-blue-500 text-sm">
              {section.moreLink}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Settings;
