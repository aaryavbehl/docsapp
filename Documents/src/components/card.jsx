import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { FaRegWindowClose } from "react-icons/fa";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return(
    <motion.div drag dragConstraints={red} className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-500 text-white px-8 py-10 overflow-hidden'>
      <FaRegFileAlt/>
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h4>{data.filesize}</h4>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
          {data.close ? <FaRegWindowClose/> : <LuDownload size=".9rem" color="purple"/> }
          </span>
        </div>
        {
          data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}        
      </div>
    </motion.div>
  )
}

export default Card