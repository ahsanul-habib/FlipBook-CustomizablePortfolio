import React from 'react';
import { SlCalender } from "react-icons/sl";
import { FaCircle, FaRegEdit } from "react-icons/fa";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import DataInterface from './types/DataInterface';
import {v4 as uuidv4} from 'uuid';
import { IoIosAddCircleOutline } from "react-icons/io";

interface Education {
  date: string;
  degree: string;
  institution: string;
  description: string;
}

interface ThirdPageProps {
  education: Education[];
  previousPage: () => void;
  nextPage: () => void;
  portait: boolean;
  setData: React.Dispatch<React.SetStateAction<DataInterface>>;
}

const ThirdPage:React.FC <ThirdPageProps> = (props) => {
  const [educationClient,setEducationClient]=React.useState(props.education);
      
  const saveEducation = (updated: Education[]) => {
    props.setData((prev) => ({ ...prev, education: updated }));
    setEdit(false);
  };

  const deleteOne=(index:number)=>{
    setEducationClient(prev=>{
        return prev.filter((item,i)=>{
            return i!==index;
        })
    })
  }

  const addOne=()=>{
    setEducationClient(prev=>{
        return [...prev,{
            date:"",
            degree:"",
            institution:"",
            description:""
        }]
    })
  }

const handleChange=(index:number, name:string, value:string)=>{
    setEducationClient(prev=>prev.map((works,i)=>{
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
            <span className="font-extrabold text-4xl block text-center">Education</span>

            {educationClient.map((edu,index)=>
            <div className="py-6 flex flex-col gap-3" key={uuidv4()}>
                <span className="block font-bold text-2xl text-center">Priority Order {index+1}</span>
                <div className="flex items-center gap-2">
                    <span className="font-semibold">Date: </span>
                    <input defaultValue={edu.date} type="text" className="px-2 h-10 border-2 border-primary rounded-md flex-grow" name="date" onBlur={(e)=>handleChange(index,e.target.name,e.target.value)}/>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-semibold">Degree: </span>
                    <input defaultValue={edu.degree} type="text" className="h-10 border-2 border-primary rounded-md flex-grow px-2" name="degree" onBlur={(e)=>handleChange(index,e.target.name,e.target.value)}/>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-semibold">Institution: </span>
                    <input defaultValue={edu.institution} type="text" className="h-10 border-2 border-primary rounded-md flex-grow px-2" name="institution" onBlur={(e)=>handleChange(index,e.target.name,e.target.value)}/>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-semibold">Description: </span>
                    <textarea defaultValue={edu.description} rows={4} className="h-32 border-2 border-primary rounded-md flex-grow px-2" name="description" onBlur={(e)=>handleChange(index,e.target.name,e.target.value)}/>
                </div>
                <button className="px-3 py-2 bg-red-500 text-white rounded-lg" onClick={()=>deleteOne(index)}>Delete</button>
            </div>)}
        <button className="px-3 py-2 bg-blue-500 text-white rounded-lg w-full flex items-center justify-center" onClick={addOne}>Add More<IoIosAddCircleOutline className='h-7 w-7' /></button>
                <div className="my-4 flex flex-row justify-between">
                    <button className="px-6 py-2 border-red-500 border-2 hover:bg-red-500 text-black hover:text-white rounded-lg" onClick={()=>{setEdit(false); setEducationClient(props.education)} }>Discard</button>
                    <button className="px-6 py-2 bg-green-500 text-white rounded-lg" onClick={()=>saveEducation(educationClient)}>Save</button>
                </div>
                </div>
    )
}
  return (
    <div className='p-8 overflow-y-auto h-5/6'>
    <span className="block font-extrabold text-4xl text-center">Education</span>
    <div className="relative group h-full">
    <button className={props.portait? "px-3 py-2 bg-green-500 text-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 items-center z-10":"px-3 py-2 bg-green-500 text-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex gap-2 items-center z-10"} onClick={()=>setEdit(true)}>Edit Item<FaRegEdit/></button>
    <div className={props.portait?'border-l-4 border-primary pl-4 mt-4 blur-sm':'border-l-4 border-primary pl-4 mt-4 group-hover:blur-sm'}>

    {props.education.map((education,index)=>((
        <div key={index} className="flex flex-col py-2">
            <div className='flex flex-row items-center relative'>
                <SlCalender/><span className='ml-1'>{education.date}</span>
                <FaCircle className='-left-25 absolute text-primary'/>
            </div>
                <span className='text-xl font-bold'>{education.degree} - {education.institution}</span>
                <span className="text-justify">{education.description}</span>
        </div>
    )))}
    </div>
    </div>
    <GrPrevious className='absolute bottom-9 left-9 hover:bg-white w-7 h-7 rounded-lg' onClick={props.previousPage}/>
    {props.portait&&  <GrNext className='absolute bottom-9 right-9 hover:bg-white w-7 h-7 rounded-lg' onClick={props.nextPage}/>}
</div>
  )
}

export default ThirdPage
