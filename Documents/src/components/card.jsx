import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";

function card() {
  return (
    <div className='relative w-60 h-72 rounded-[30px] bg-zinc-200 text-black py-10 px-8 overflow-hidden'>
        <IoDocumentTextOutline/>
        <p className='text-sm leading-tight mt-5 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className='footer absolute bottom-0 bg-sky-200 w-full h-10 py-3 left-0'>
            <div>
                <h5>.4mb</h5>
            </div>
        </div>
    </div>
  )
}

export default card