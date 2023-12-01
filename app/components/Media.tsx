import { FaPlay } from 'react-icons/fa6';
import Buttons from './Buttons';

export interface MediaProps {
  cover_photo_url: string;
  download_url: string;
  tracking_link: string;
  media_type: string;
}

const Media = ({ media }: { media: MediaProps }) => {
  return (
    <>
      <div className="relative h-[200px] rounded-lg overflow-hidden">
        <img
          src={media.cover_photo_url}
          alt=""
          className="absolute left-0 w-[150px] h-full top-0 object-cover"
        />
        <div className="bg-black/50 w-full h-full absolute top-0 left-0 flex justify-center items-center text-white">
          {media.media_type === 'video' && <FaPlay />}
        </div>
      </div>
      <Buttons download_url={media.download_url} link={media.tracking_link} />
    </>
  );
};

export default Media;
