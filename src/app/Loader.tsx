import React from 'react';

export const Spinner = () => {
  return (
    <>
      <div className="absolute right-1/2 bottom-1/2 bg-transparent  transform translate-x-1/2 translate-y-1/2 ">
        <div
          style={{ borderTopColor: 'transparent' }}
          className="border-solid animate-spin  rounded-full border-blue-400 border-8 h-24 w-24"
        ></div>
      </div>
    </>
  );
};
