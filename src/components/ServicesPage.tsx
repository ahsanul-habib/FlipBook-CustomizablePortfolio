import React from 'react';
import {v4 as uuidv4} from 'uuid';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

interface FourthPageProps{
    services:{
        icon: string,
        title: string,
        description: string,
        link: string
    }[];
    previousPage: ()=> void;
    nextPage: ()=> void;
    portait: boolean;
}

const FourthPage: React.FC<FourthPageProps> = (props) => {
  return (
    <div className='p-8 h-full'>
      <span className="block font-extrabold text-4xl text-center">Services</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2 h-5/6 overflow-y-auto">
            {props.services.map((service,index)=>(
                <div key={uuidv4()} className='flex flex-col items-center border-2 border-primary rounded-lg'>
                    <img src={service.icon} className='w-12 h-12' alt="" />
                    <span className="font-bold">{service.title}</span>
                    <span className="p-3 text-center">{service.description}</span>
                    <a href={service.link} className="px-6 py-2 my-2 bg-blue-500 text-white rounded-lg hover:scale-110">Learn More</a>
                </div>
            ))}
      </div>
     {props.portait&& <GrPrevious className='absolute bottom-9 left-9 hover:bg-black w-7 h-7 rounded-lg' onClick={props.previousPage}/>}
            <GrNext className='absolute bottom-9 right-9 hover:bg-white w-7 h-7 rounded-lg' onClick={props.nextPage}/>
    </div>
  )
}

export default FourthPage
