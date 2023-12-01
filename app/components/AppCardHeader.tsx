import Image from 'next/image';
import React from 'react';

const AppCardHeader = ({
  name,
  icon,
  payPerInstall,
}: {
  name: string;
  icon: string;
  payPerInstall: string;
}) => {
  return (
    <div className="flex gap-x-3">
      <figure className="w-[50px] h-auto rounded-lg overflow-hidden">
        <img src={icon} alt={name} className="w-full" />
      </figure>
      <div>
        <p className="font-extrabold">{name}</p>
        <p className="text-green-600">
          <span className='font-semibold'>{payPerInstall} </span>
          per install
        </p>
      </div>
    </div>
  );
};

export default AppCardHeader;
