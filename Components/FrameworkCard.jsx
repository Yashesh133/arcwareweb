import Image from 'next/image';
import React from 'react';

const FrameworkCard = ({ image, name }) => {
  return (
    <div className='flex items-center justify-center flex-col bg-white p-5 m-5 rounded-[40px] transition-transform duration-300 hover:scale-110'>
      <Image className=''
        src={image}
        alt={name}
        height={64}
        width={64} />
      <h2 className='my-2 font-semibold text-center text-xl'>{name}</h2>
    </div>
  );
};

export default FrameworkCard;
