import React from 'react';
import {v4 as uuidv4} from 'uuid';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

interface SkillObject {
    icon: string;
    title: string;
}

interface SkillCategory {
    title: string;
    objects: SkillObject[];
}

interface SkillsData {
    skills: SkillCategory[];
    previousPage: ()=> void;
    nextPage: ()=> void;
    portait: boolean;
}


const FifthPage: React.FC<SkillsData> = (props) => {
  return (
    <div className='p-4 h-full'>
      <span className="block font-extrabold text-4xl text-center">My Skills</span>
      <div className='overflow-y-auto h-5/6'>

      {props.skills.map((skill,index)=>(
        <div key={uuidv4()}>
            <span className="block font-extrabold text-xl py-3">{skill.title}</span>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            {/* <div className='flex flex-row gap-3 flex-wrap'> */}

            {skill.objects.map((obj,index)=>(
                <div key={uuidv4()} className="aspect-square w-full flex-grow flex flex-col items-center justify-center p-1 gap-1 rounded-lg border-2 border-primary">
                <img className="w-full" src={obj.icon}/>
                <span className="font-bold text-lg">{obj.title}</span>
              </div>
            ))}
            </div>
        </div>
      ))}
      </div>
      <GrPrevious className='absolute bottom-9 left-9 hover:bg-white w-7 h-7 rounded-lg' onClick={props.previousPage}/>
       {props.portait&& <GrNext className='absolute bottom-9 right-9 hover:bg-white w-7 h-7 rounded-lg' onClick={props.nextPage}/>}
    </div>
  )
}

export default FifthPage;
