import React from 'react';

const FrameworkCard = ({ image, name }) => {
  return (
    <div className='h-60 w-60 my-5 w-50 relative overflow-hidden'>
      <div className='bg-white p-5 m-5 rounded-[40px] transition-transform duration-300 hover:scale-110'>
        <img className='h-24 w-auto m-auto object-cover' src={image} alt={name} />
        <h2 className='my-2 font-semibold text-center text-2xl'>{name}</h2>
      </div>
    </div>
  );
};

export default FrameworkCard;
