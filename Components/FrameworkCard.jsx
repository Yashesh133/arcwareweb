import Image from 'next/image';
import React from 'react';

const FrameworkCard = ({ image, name }) => {
  return (
    <div className='h-50 w-60 my-5 w-50 flex items-center flex-col bg-white p-5 m-5 rounded-[40px] transition-transform duration-300 hover:scale-110'>
      <Image className=' h-16  object-contain'
        src={image}
        alt={name}
        height={64}
        width={64} />
      <h2 className='my-2 font-semibold text-center text-xl'>{name}</h2>
    </div>
  );
};

export default FrameworkCard;
