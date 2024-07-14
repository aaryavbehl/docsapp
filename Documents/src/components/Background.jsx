import React from 'react';
import './rainbow.css';

function Background() {
  return (
    <>
      <div className='fixed z-[2] w-full h-screen'>
      <div class='absolute top-[5%] w-full py-10 flex flex-col items-center text-center'>
  <div class='text-cyan-200 font-semibold text-xl text-glow-fade'>
    ATBシ
  </div>
  <p class='text-white'>
    This site is a prototype.
  </p>
</div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-rainbow'>
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;