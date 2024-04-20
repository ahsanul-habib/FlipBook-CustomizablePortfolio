import React from 'react';
import { SlCalender } from "react-icons/sl";
import { FaCircle } from "react-icons/fa";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

interface SecondPageProps {
    work_experience: {
      date: string;
      position: string;
      company: string;
      description: string;
    }[],
    previousPage: ()=> void;
    nextPage: ()=> void;
    portait: boolean;
  }

const SecondPage:React.FC<SecondPageProps>=(props)=>{
    return(
        <div className='p-8 overflow-y-auto h-5/6'>
            <span className="font-extrabold text-4xl">Work Experiences</span>
            <div className=' border-l-4 border-primary pl-4 mt-4'>

            {props.work_experience.map((works,index)=>((
                <div key={index} className="flex flex-col py-2">
                    <div className='flex flex-row items-center relative'>
                        <SlCalender/><span className='ml-1'>{works.date}</span>
                        <FaCircle className='-left-25 absolute text-primary'/>
                    </div>
                        <span className='text-xl font-bold'>{works.position} - {works.company}</span>
                        <span>{works.description}</span>
                </div>
            )))}
            </div>
           {props.portait&& <GrPrevious className='absolute bottom-9 left-9 hover:bg-white w-7 h-7 rounded-lg' onClick={props.previousPage}/> }
            <GrNext className='absolute bottom-9 right-9 hover:bg-white w-7 h-7 rounded-lg' onClick={props.nextPage}/>
        </div>
    )
}

export default SecondPage;