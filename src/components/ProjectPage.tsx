import React from 'react';
import { FaEye } from "react-icons/fa";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

interface sixthPageInterface{
    project:{
      img: string,
    title: string,
    tech_used: string,
    description: string,
    link: string,
    code: string,
    more_projects: string
    }
    previousPage: ()=> void;
    nextPage: ()=> void;
    portait: boolean;
}

const SixthPage = ({project,previousPage,nextPage,portait}:sixthPageInterface) => {
  return (
    <div className="p-4 h-full">
        <span className="block font-extrabold text-4xl text-center">Latest Project</span>
        <div className=' overflow-y-auto h-5/6 p-4'>

          <img className='w-full rounded-lg my-2 border-2 border-primary' src={project.img} alt="" />
          <div className='flex flex-row justify-between align-center'>
          <span className="font-bold text-xl py-3">{project.title}</span>
          <a className='text-blue-500 flex flex-row my-auto hover:underline' href={project.link}>Live Preview <FaEye className='my-auto ml-1' /></a>
          </div>
          <span className='block'>Tech Used: {project.tech_used}</span>
          <span className='mt-6'>{project.description}</span>
          <div className={portait?'flex flex-col w-full justify-between my-3 gap-3 text-center':'flex flex-row justify-between my-3 gap-3'}>
            <a href={project.code} className="px-6 py-2 bg-primary text-white rounded-md">Source Code</a>
            <a href={project.more_projects} className="px-6 py-2 bg-white border-2 border-primary hover:bg-primary rounded-lg text-primary hover:text-white duration-300">More Projects</a>
          </div>
        </div>
        {portait&& <GrPrevious className='absolute bottom-9 left-9 hover:bg-white w-7 h-7 rounded-lg' onClick={previousPage}/>}
            <GrNext className='absolute bottom-9 right-9 hover:bg-white w-7 h-7 rounded-lg' onClick={nextPage}/>
    </div>
  )
}

export default SixthPage;
