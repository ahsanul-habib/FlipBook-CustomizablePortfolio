import React from 'react';
import { SlCalender } from "react-icons/sl";
import { FaCircle } from "react-icons/fa";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

interface ThirdPageProps {
    education: {
      date: string;
      degree: string;
      institution: string;
      description: string;
    }[];
    previousPage: ()=> void;
    nextPage: ()=> void;
    portait: boolean;
  }

const ThirdPage:React.FC <ThirdPageProps> = (props) => {
  return (
    <div className='p-8 overflow-y-auto h-5/6'>
    <span className="block font-extrabold text-4xl text-center">Education</span>
    <div className=' border-l-4 border-primary pl-4 mt-4'>

    {props.education.map((education,index)=>((
        <div key={index} className="flex flex-col py-2">
            <div className='flex flex-row items-center relative'>
                <SlCalender/><span className='ml-1'>{education.date}</span>
                <FaCircle className='-left-25 absolute text-primary'/>
            </div>
                <span className='text-xl font-bold'>{education.degree} - {education.institution}</span>
                <span>{education.description}</span>
        </div>
    )))}
    </div>
    <GrPrevious className='absolute bottom-9 left-9 hover:bg-white w-7 h-7 rounded-lg' onClick={props.previousPage}/>
    {props.portait&&  <GrNext className='absolute bottom-9 right-9 hover:bg-white w-7 h-7 rounded-lg' onClick={props.nextPage}/>}
</div>
  )
}

export default ThirdPage
