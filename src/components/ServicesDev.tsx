import React from 'react';
import {v4 as uuidv4} from 'uuid';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import DataInterface from './types/DataInterface';
import { IoIosAddCircleOutline } from "react-icons/io";

interface Service {
  icon: string;
  title: string;
  description: string;
  link: string;
}

interface FourthPageProps {
  services: Service[];
  previousPage: () => void;
  nextPage: () => void;
  portait: boolean;
  setData: React.Dispatch<React.SetStateAction<DataInterface>>;
}

const FourthPage: React.FC<FourthPageProps> = (props) => {

  const [servicesClient,setServicesClient]=React.useState(props.services);
      
  const saveServices = (updated: Service[]) => {
    props.setData((prev) => ({ ...prev, services: updated }));
    setEdit(false);
  };

  const deleteOne=(index:number)=>{
    setServicesClient(prev=>{
        return prev.filter((item,i)=>{
            return i!==index;
        })
    })
  }

  const addOne=()=>{
    setServicesClient(prev=>{
        return [...prev,{
            icon:"",
            title:"",
            link:"",
            description:""
        }]
    })
  }

const handleChange=(index:number, name:string, value:string)=>{
    setServicesClient(prev=>prev.map((service,i)=>{
        if(index===i){
            return {...service, [name]: value}
        }
        return service;
    }));
}

// const [inpu]

const handleImageInput = (index:number, event: React.ChangeEvent<HTMLInputElement>) => {
  const selectedFile = event.target.files && event.target.files[0];
  if (selectedFile) {
    const reader = new FileReader();
    reader.onload = () => {
      handleChange(index, "icon", reader.result? reader.result.toString() : "");
    };
    reader.readAsDataURL(selectedFile);
  }
}

const [editMode,setEdit]=React.useState(false);
if(editMode){
    return(
        <div className="p-8 overflow-y-auto h-full">
            <span className="font-extrabold text-4xl block text-center">Work Experiences</span>

            {servicesClient.map((service,index)=>{
              return <div className="py-6 flex flex-col gap-3" key={uuidv4()}>
                <span className="block font-bold text-2xl text-center">Priority Order {index+1}</span>
                <img src={service.icon} className='w-12 h-12 block self-center' alt="No Image" />
                <input type="file" onChange={(event)=>handleImageInput(index,event)}/>
                <div className="flex items-center gap-2">
                    <span className="font-semibold">Title: </span>
                    <input defaultValue={service.title} type="text" className="h-10 border-2 border-primary rounded-md flex-grow px-2" name="title" onBlur={(e)=>handleChange(index,e.target.name,e.target.value)}/>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-semibold">Link: </span>
                    <input defaultValue={service.link} type="text" className="h-10 border-2 border-primary rounded-md flex-grow px-2" name="link" onBlur={(e)=>handleChange(index,e.target.name,e.target.value)}/>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-semibold">Description: </span>
                    <textarea defaultValue={service.description} rows={4} className="h-32 border-2 border-primary rounded-md flex-grow px-2" name="description" onBlur={(e)=>handleChange(index,e.target.name,e.target.value)}/>
                </div>
                <button className="px-3 py-2 bg-red-500 text-white rounded-lg" onClick={()=>deleteOne(index)}>Delete</button>
            </div>
              }
            )}
        <button className="px-3 py-2 bg-blue-500 text-white rounded-lg w-full flex items-center justify-center" onClick={()=>addOne()}>Add More<IoIosAddCircleOutline className='h-7 w-7' /></button>
        <div className="my-4 flex flex-row justify-between">
                    <button className="px-6 py-2 border-red-500 border-2 hover:bg-red-500 text-black hover:text-white rounded-lg" onClick={()=>{setEdit(false); setServicesClient(props.services)}}>Discard</button>
                    <button className="px-6 py-2 bg-green-500 text-white rounded-lg" onClick={()=>saveServices(servicesClient)}>Save</button>
                </div>
                </div>
              )
}

  return (
    <div className='p-8 h-5/6 overflow-y-auto'>
      <span className="block font-extrabold text-4xl text-center">Services</span>
      <div className="relative group">
        <button className={props.portait? "px-3 py-2 bg-green-500 text-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 items-center z-10":"px-3 py-2 bg-green-500 text-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex gap-2 items-center z-10"} onClick={()=>setEdit(true)}>Edit Item<FaRegEdit/></button>

      <div className={props.portait?"grid grid-cols-1 md:grid-cols-2 gap-4 my-2 blur-sm":"grid grid-cols-1 md:grid-cols-2 gap-4 my-2 group-hover:blur-sm"}>
            {props.services.map((service,index)=>(
              <div key={uuidv4()} className='flex flex-col items-center border-2 border-primary rounded-lg p-4'>
                    <img src={service.icon} className='w-12 h-12' alt="No Image" />
                    <span className="font-bold">{service.title}</span>
                    <span className="p-3 text-center">{service.description}</span>
                    <a href={service.link} className="px-6 py-2 my-2 bg-blue-500 text-white rounded-lg hover:scale-110">Learn More</a>
                </div>
            ))}
      </div>
                  </div>
                  {props.portait&& <GrPrevious className='absolute bottom-9 left-9 hover:bg-black w-7 h-7 rounded-lg' onClick={props.previousPage}/>}
            <GrNext className='absolute bottom-9 right-9 hover:bg-white w-7 h-7 rounded-lg' onClick={props.nextPage}/>
    </div>
  )
}

export default FourthPage
