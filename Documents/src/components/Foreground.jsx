import React, { useRef, useState } from 'react'
import Card from './card'

function Foreground() {

  const ref = useRef(null);

  const data = [
     {desc: "This website is built by Aaryav Behl.",
       filesize: "1.2MB", 
       close: true, 
       tag: {isOpen: true, tagTitle: "", tagColor: "bg-cyan-300"}
      },
      {desc: "This site is a prototype.",
        filesize: "2.4MB", 
        close: false, 
        tag: {isOpen: true, tagTitle: "", tagColor: "bg-green-300"}
       },
       {desc: "Click on these tiles and throw them around.",
        filesize: "5.8MB", 
        close: true, 
        tag: {isOpen: true, tagTitle: "", tagColor: "bg-orange-300"}
       },
       {desc: "This site is hosted on netlify.",
        filesize: "3.9MB", 
        close: false, 
        tag: {isOpen: true, tagTitle: "", tagColor: "bg-purple-300"}
       },
       {desc: "This site is made using react.",
         filesize: "4.6MB", 
         close: true, 
         tag: {isOpen: true, tagTitle: "", tagColor: "bg-red-300"}
        },
        {desc: "This site has a great potential to become a fidgety documents app.",
         filesize: "7.2MB", 
         close: false, 
         tag: {isOpen: true, tagTitle: "", tagColor: "bg-emerald-300"}
        },
        {desc: "Who knows? I might make it a documents app in the future.",
          filesize: "10.1MB", 
          close: true, 
          tag: {isOpen: true, tagTitle: "", tagColor: "bg-lime-300"}
         },
         {desc: "This website is surprisingly very fast and oddly satisfying.",
           filesize: "3.5MB", 
           close: false, 
           tag: {isOpen: true, tagTitle: "", tagColor: "bg-indigo-300"}
          },
          {desc: "I ran out of crap to type.",
           filesize: "8MB", 
           close: true, 
           tag: {isOpen: true, tagTitle: "", tagColor: "bg-pink-300"}
          },
          {desc: "BLEH BLEH BLEH",
           filesize: "0.1MB", 
           close: false, 
           tag: {isOpen: true, tagTitle: "", tagColor: "bg-amber-300"}
          },
  ];
  useState()
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index)=>(
          <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground