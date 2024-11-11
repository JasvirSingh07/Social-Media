import { FaHeart, FaComment, FaShare, FaEllipsisH, FaVolumeMute, FaMusic } from 'react-icons/fa';

const reelsData = [
  {
    profileImg: 'https://placehold.co/40x40',
    username: 'shanayadiaries',
    caption: 'Only if my mind was working ... more',
    music: 'iamgravero - Gravero - Talking To The Moon x Jo Tum Mere Ho',
    thumbnail: 'https://placehold.co/400x650',
    likes: '19.3K',
    comments: '292',
  },
  {
    profileImg: 'https://placehold.co/40x40',
    username: 'ajaykumar_aps',
    caption: 'Exploring the world, one reel at a time.',
    music: 'explore_beats - Adventure is out there',
    thumbnail: 'https://placehold.co/400x650',
    likes: '2.1K',
    comments: '185',
  },
  {
    profileImg: 'https://placehold.co/40x40',
    username: 'thewanderlustguy',
    caption: 'Wander often, wonder always.',
    music: 'traveler_tunes - The road less traveled',
    thumbnail: 'https://placehold.co/400x650',
    likes: '8.7K',
    comments: '320',
  },
  {
    profileImg: 'https://placehold.co/40x40',
    username: 'official_d.eep_mehra',
    caption: 'Living my best life.',
    music: 'deepvibes - Chill vibes',
    thumbnail: 'https://placehold.co/400x650',
    likes: '10.5K',
    comments: '500',
  }
];

const ReelItem = ({ reel }) => {
  return (
    <div className="relative w-10/12 h-[650px]  mb-4">
      <img
        src={reel.thumbnail}
        alt="Video thumbnail"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div className="flex justify-end">
          <FaVolumeMute className="text-white text-2xl" />
        </div>
        <div className="text-white">
          <div className="flex items-center mb-2">
            <img
              src={reel.profileImg}
              alt="Profile"
              className="w-10 h-10 rounded-full border border-black"
            />
            <div className="ml-2">
              <div className="font-bold">{reel.username}</div>
              <div className="text-sm">Follow</div>
            </div>
          </div>
          <div className="mb-2">{reel.caption}</div>
          <div className="flex items-center">
            <FaMusic className="text-sm mr-2" />
            <div className="text-sm">{reel.music}</div>
          </div>
        </div>
      </div>
      <div className="absolute right-4 bottom-4 flex flex-col items-center text-white space-y-4">
        <div className="flex flex-col items-center">
          <FaHeart className="text-2xl" />
          <div className="text-sm">{reel.likes}</div>
        </div>
        <div className="flex flex-col items-center">
          <FaComment className="text-2xl" />
          <div className="text-sm">{reel.comments}</div>
        </div>
        <div className="flex flex-col items-center">
          <FaShare className="text-2xl" />
        </div>
        <div className="flex flex-col items-center">
          <FaEllipsisH className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

const Reels = () => {
  return (
    <div className="flex flex-col items-center h-screen overflow-y-scroll scrollbar-hide">
      {reelsData.map((reel, index) => (
        <ReelItem key={index} reel={reel} />
      ))}
    </div>
  );
};

export default Reels;
