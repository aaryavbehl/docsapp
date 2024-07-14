import React, { useState } from 'react'
import Card from './card'

function Foreground() {

  const ref = useRef(null);

  const data = [
     {desc: "THIS WILL BE YOUR DESCRIPTION",
       filesize: ".9mb", 
       close: true, 
       tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
      },
      {desc: "THIS WILL BE YOUR DESCRIPTION",
        filesize: ".9mb", 
        close: true, 
        tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"}
       },
       {desc: "THIS WILL BE YOUR DESCRIPTION",
        filesize: ".9mb", 
        close: true, 
        tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
       },
  ];
  useState()
  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index)=>(
          <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground