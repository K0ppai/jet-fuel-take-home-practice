import { FaPlay } from 'react-icons/fa6';

export interface MediaProps {
  cover_photo_url: string;
  download_url: string;
  tracking_link: string;
  media_type: string;
}

const Media = ({ media }: { media: MediaProps }) => {
  return (
    <div className="relative h-[170px]">
      <figure className="">
        <img
          src={media.cover_photo_url}
          alt=""
          className="absolute left-0  w-[150px] h-auto top-0 object-cover"
        />
      </figure>
      <div className="bg-black/50 w-full h-full absolute top-0 left-0 flex justify-center items-center text-white">
        {media.media_type === 'video' && <FaPlay />}
      </div>
    </div>
  );
};

export default Media;
