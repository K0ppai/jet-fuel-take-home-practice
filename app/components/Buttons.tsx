'use client';
import { HiOutlineLink } from 'react-icons/hi2';
import { FaCheck } from 'react-icons/fa6';
import { GrLinkBottom } from 'react-icons/gr';
import { useState } from 'react';

const Buttons = ({ download_url, link }: { download_url: string; link: string }) => {
  const [isClicked, setIsClicked] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(link);
    setIsClicked(true);
  };

  return (
    <div className="flex relative w-full mt-3 border-collapse">
      <button
        onClick={copyLink}
        className="w-1/2 flex justify-center text-gray-400 border border-gray-400 p-3 rounded-tl-md rounded-bl-md"
      >
        {isClicked ? <FaCheck /> : <HiOutlineLink />}
      </button>
      <a
        href={download_url}
        download="video.mp4"
        className="w-1/2 flex justify-center text-gray-400 border border-gray-400 p-3 rounded-tr-md rounded-br-md"
      >
        <GrLinkBottom />
      </a>
    </div>
  );
};

export default Buttons;
