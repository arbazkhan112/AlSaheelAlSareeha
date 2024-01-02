import React from 'react';

const BGImageComponent = ({image, heading, text}) => {
  return (
    <>
      <section className="relative pb-8" style={{ height: '400px' }}>
        <div>
          <img
            src={image}
            className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full"
            alt=""
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center bg-gray-800/75">
            <div className="z-10 max-w-6xl px-4 mx-auto">
              <span className="text-xs font-semibold text-[#F58E22] uppercase">{text}</span>
              <h2 className="mt-2 mb-4 text-3xl font-bold leading-tight text-white md:text-4xl md:leading-tight lg:text-7xl lg:leading-tight">
                {heading}
              </h2>
       
            
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BGImageComponent;
