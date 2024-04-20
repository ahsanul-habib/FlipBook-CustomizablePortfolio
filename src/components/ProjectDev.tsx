import React from 'react';
import { FaEye } from "react-icons/fa";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import DataInterface from './types/DataInterface';

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
    setData: React.Dispatch<React.SetStateAction<DataInterface>>;
}

const SixthPage = ({project,previousPage,nextPage,portait,setData}:sixthPageInterface) => {
  
  const [projectClient, setProjectClient]=React.useState(project);

  const handleChange=(name:string, value:string)=>{
    setProjectClient(prev=>({...prev,[name]:[value]}));
}

const saveProject=()=>{
  setData(prev => {
    return ({ ...prev, project: projectClient });
  });
  setEdit(false);
}

const handleImageInput=(event: React.ChangeEvent<HTMLInputElement>)=>{
  const selectedFile = event.target.files && event.target.files[0];
  if (selectedFile) {
    const reader = new FileReader();
    reader.onload = () => {
      setProjectClient(prev => {
        return ({...prev, img: reader.result? reader.result.toString() : "" });
      });
    };
    reader.readAsDataURL(selectedFile);
  }

}

const [editMode,setEdit]=React.useState(false);

if(editMode){
  return(<div className="p-8 overflow-y-auto h-full">
          <span className="font-extrabold text-4xl block text-center">Work Experiences</span>
          <div className="p-4 flex flex-col gap-3">
          <img src={projectClient.img} className='w-full block self-center' alt="No Image" />
          <input type="file" onChange={(event)=>handleImageInput(event)}/>
          <div className="flex items-center gap-2">
              <span className="font-semibold">Title: </span>
              <input defaultValue={projectClient.title} type="text" className="px-2 h-10 border-2 border-primary rounded-md flex-grow" name="title" onBlur={(e)=>handleChange(e.target.name,e.target.value)}/>
          </div>
          <div className="flex items-center gap-2">
              <span className="font-semibold">Tech Used: </span>
              <input defaultValue={projectClient.tech_used} type="text" className="px-2 h-10 border-2 border-primary rounded-md flex-grow" name="tech_used" onBlur={(e)=>handleChange(e.target.name,e.target.value)}/>
          </div>
          <div className="flex items-center gap-2">
              <span className="font-semibold">Live Link: </span>
              <input defaultValue={projectClient.link} type="text" className="px-2 h-10 border-2 border-primary rounded-md flex-grow" name="link" onBlur={(e)=>handleChange(e.target.name,e.target.value)}/>
          </div>
          <div className="flex items-center gap-2">
              <span className="font-semibold">Source Code: </span>
              <input defaultValue={projectClient.code} type="text" className="px-2 h-10 border-2 border-primary rounded-md flex-grow" name="code" onBlur={(e)=>handleChange(e.target.name,e.target.value)}/>
          </div>
          <div className="flex items-center gap-2">
              <span className="font-semibold">More Project Link: </span>
              <input defaultValue={projectClient.title} type="text" className="px-2 h-10 border-2 border-primary rounded-md flex-grow" name="more_projects" onBlur={(e)=>handleChange(e.target.name,e.target.value)}/>
          </div>
          <div className="flex items-center gap-2">
              <span className="font-semibold">Description: </span>
              <textarea defaultValue={projectClient.description} rows={4} className="resize-none px-2 border-2 border-primary rounded-md flex-grow h-auto" name="description" onBlur={(e)=>handleChange(e.target.name,e.target.value)}/>
          </div>

          
          </div>

          <div className="my-4 flex flex-row justify-between">
                <button className="px-6 py-2 border-red-500 border-2 hover:bg-red-500 text-black hover:text-white rounded-lg" onClick={()=>{setEdit(false); setProjectClient(project)}}>Discard</button>
                <button className="px-6 py-2 bg-green-500 text-white rounded-lg" onClick={()=>saveProject()}>Save</button>
            </div>
  </div>)
}

  return (
    <div className="p-4 h-full">
        <span className="block font-extrabold text-4xl text-center">Latest Project</span>
        <div className=' overflow-y-auto h-5/6 p-4'>
        <div className='relative group h-full'>
        <button className={portait? "px-3 py-2 bg-green-500 text-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 items-center z-10":"px-3 py-2 bg-green-500 text-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex gap-2 items-center z-10"} onClick={()=>setEdit(true)}>Edit Item<FaRegEdit/></button>

          <div className={portait?"blur-sm":"group-hover:blur-sm"}>

          <img className='w-full rounded-lg my-2 border-2 border-primary' src={project.img} alt="" />
          <div className='flex flex-row justify-between align-center'>
          <span className="font-bold text-xl py-3">{project.title}</span>
          <a className='text-blue-500 flex flex-row my-auto hover:underline' href={project.link}>Live Preview <FaEye className='my-auto ml-1' /></a>
          </div>
          <span className='block'>Tech Used: {project.tech_used}</span>
          <h3 className='text-justify'>{project.description}</h3>
          <div className={portait?'flex flex-col w-full justify-between my-3 gap-3 text-center':'flex flex-row justify-between my-3 gap-3'}>
            <a href={project.code} className="px-6 py-2 bg-primary text-white rounded-md">Source Code</a>
            <a href={project.more_projects} className="px-6 py-2 bg-white border-2 border-primary hover:bg-primary rounded-lg text-primary hover:text-white duration-300">More Projects</a>
          </div>
          </div>
        </div>
        </div>
        {portait&& <GrPrevious className='absolute bottom-9 left-9 hover:bg-white w-7 h-7 rounded-lg' onClick={previousPage}/>}
            <GrNext className='absolute bottom-9 right-9 hover:bg-white w-7 h-7 rounded-lg' onClick={nextPage}/>
    </div>
  )
}

export default SixthPage;
