import React from 'react';
import { SlCalender } from "react-icons/sl";
import { FaCircle,FaRegEdit } from "react-icons/fa";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import {v4 as uuidv4} from 'uuid';
import { IoIosAddCircleOutline } from "react-icons/io";
import DataInterface from './types/DataInterface';

interface WorkExperience {
    date: string;
    position: string;
    company: string;
    description: string;
  }
  
  interface SecondPageProps {
    work_experience: WorkExperience[];
    previousPage: () => void;
    nextPage: () => void;
    portait: boolean;
    setData: React.Dispatch<React.SetStateAction<DataInterface>>;
  }

  
  const SecondPage:React.FC<SecondPageProps>=(props)=>{
      const [work_experience,setWorkExperienceClient]=React.useState(props.work_experience);
      
      const saveWorkExperience = (updated: WorkExperience[]) => {
        props.setData((prev) => ({ ...prev, Work_Experience: updated }));
        setEdit(false);
      };

      const deleteOne=(index:number)=>{
        setWorkExperienceClient(prev=>{
            return prev.filter((item,i)=>{
                return i!==index;
            })
        })
      }

      const addOne=()=>{
        setWorkExperienceClient(prev=>{
            return [...prev,{
                date:"",
                position:"",
                company:"",
                description:""
            }]
        })
      }

    const handleChange=(index:number, name:string, value:string)=>{
        setWorkExperienceClient(prev=>prev.map((works,i)=>{
            if(index===i){
                return {...works, [name]: value}
            }
            return works;
        }));
    }
    
    const [editMode,setEdit]=React.useState(false);

    if(editMode){
        return(
            <div className="p-8 overflow-y-auto h-full">
                <span className="font-extrabold text-4xl block text-center">Work Experiences</span>

                {work_experience.map((works,index)=>
                <div className="py-6 flex flex-col gap-3" key={uuidv4()}>
                    <span className="block font-bold text-2xl text-center">Priority Order {index+1}</span>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Date: </span>
                        <input defaultValue={works.date} type="text" className="px-2 h-10 border-2 border-primary rounded-md flex-grow" name="date" onBlur={(e)=>handleChange(index,e.target.name,e.target.value)}/>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Position: </span>
                        <input defaultValue={works.position} type="text" className="h-10 border-2 border-primary rounded-md flex-grow px-2" name="position" onBlur={(e)=>handleChange(index,e.target.name,e.target.value)}/>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Company: </span>
                        <input defaultValue={works.company} type="text" className="h-10 border-2 border-primary rounded-md flex-grow px-2" name="company" onBlur={(e)=>handleChange(index,e.target.name,e.target.value)}/>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Description: </span>
                        <textarea defaultValue={works.description} rows={4} className="h-32 border-2 border-primary rounded-md flex-grow px-2" name="description" onBlur={(e)=>handleChange(index,e.target.name,e.target.value)}/>
                    </div>
                    <button className="px-3 py-2 bg-red-500 text-white rounded-lg" onClick={()=>deleteOne(index)}>Delete</button>
                </div>)}
            <button className="px-3 py-2 bg-blue-500 text-white rounded-lg w-full flex items-center justify-center" onClick={()=>addOne()}>Add More<IoIosAddCircleOutline className='h-7 w-7' /></button>
                    <div className="my-4 flex flex-row justify-between">
                        <button className="px-6 py-2 border-red-500 border-2 hover:bg-red-500 text-black hover:text-white rounded-lg" onClick={()=>{setEdit(false); setWorkExperienceClient(props.work_experience)}}>Discard</button>
                        <button className="px-6 py-2 bg-green-500 text-white rounded-lg" onClick={()=>saveWorkExperience(work_experience)}>Save</button>
                    </div>
                    </div>
        )
    }
    return(
        <div className='p-8 overflow-y-auto h-5/6'>
            <span className="font-extrabold text-4xl">Work Experiences</span>
            <div className="group relative w-full h-full">
            <button className={props.portait? "px-3 py-2 bg-green-500 text-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 items-center z-10":"px-3 py-2 bg-green-500 text-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex gap-2 items-center z-10"} onClick={()=>setEdit(true)}>Edit Item<FaRegEdit/></button>

            <div className={props.portait? 'border-l-4 border-primary pl-4 mt-4':'border-l-4 border-primary pl-4 mt-4 group-hover:blur-sm'}>

            {props.work_experience.map((works,index)=>((
                <div key={uuidv4()} className="flex flex-col py-2">
                    <div className='flex flex-row items-center relative'>
                        <SlCalender/><span className='ml-1'>{works.date}</span>
                        <FaCircle className='-left-25 absolute text-primary'/>
                    </div>
                        <span className='text-xl font-bold'>{works.position} - {works.company}</span>
                        <span className='text-justify'>{works.description}</span>
                </div>
            )))}
            </div>
            </div>
           {props.portait&& <GrPrevious className='absolute bottom-9 left-9 hover:bg-white w-7 h-7 rounded-lg' onClick={props.previousPage}/> }
            <GrNext className='absolute bottom-9 right-9 hover:bg-white w-7 h-7 rounded-lg' onClick={props.nextPage}/>
        </div>
    )
}

export default SecondPage;