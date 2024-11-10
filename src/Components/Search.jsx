import { FaArrowLeft } from "react-icons/fa"

function Search({setIsSearchActive}) {
  return (
    <div className="flex flex-col flex-grow p-4 bg-[#DFE7FD] rounded-md">
    <div className="flex items-center mb-4">
      <FaArrowLeft
        className="text-xl text-black cursor-pointer"
        onClick={() => setIsSearchActive(false)}
      />
      <h2 className="text-lg ml-2">Search</h2>
    </div>
    <input
      type="text"
      placeholder="Search..."
      className="p-2 rounded bg-black text-white focus:outline-none w-full"
    />
    <div className="mt-4">
      <h3 className="text-sm">Recent Searches</h3>
      <ul>
        <li>No recent searches</li>
      </ul>
    </div>
  </div>
  )
}

export default Search
