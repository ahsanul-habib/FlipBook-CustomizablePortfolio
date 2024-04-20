import React from 'react';
import {v4 as uuidv4} from 'uuid';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import DataInterface from './types/DataInterface';
import { IoAddCircleOutline } from "react-icons/io5";

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
    setData: React.Dispatch<React.SetStateAction<DataInterface>>;
}


const FifthPage: React.FC<SkillsData> = (props) => {

  const [skillClient,setSkillClient]=React.useState(props.skills);
      
  const saveSkills = (updated: SkillCategory[]) => {
    props.setData((prev) => ({ ...prev, skills: updated }));
    setEdit(false);
  };

  const deleteOneItem=(indexPrimary:number, indexSecondary:number)=>{
    setSkillClient(prev=>{
        return prev.map((category,i)=>{
          if(i==indexPrimary){
            const updatedObjects=category.objects.filter((obj,i2)=>{
              return i2!==indexSecondary;
            })
            return {...category, objects: updatedObjects}
          }
          return category;
        })
    })
  }

  const deleteOneCategory=(indexPrimary:number)=>{
    setSkillClient(prev=>{
        return prev.filter((category,i)=>{
          return i!==indexPrimary;
        })
    })
  }

  const addOneItem=(indexPrimary:number)=>{
    setSkillClient(prev=>{
      return prev.map((category,i)=>{
        if(i==indexPrimary){
          return {...category, objects: [...category.objects, {icon: "", title: ""}]}
        }
        return category;
      })
    })

  }

  const addOneCategory=()=>{
    setSkillClient(prev=>{
        return [...prev,{
            title: "",
            objects: []
        }]
    })
  }

const handleChange=(indexPrimary:number, indexSecondary:number , name:string, value:string)=>{
    setSkillClient(prev=>prev.map((skill,i)=>{
        if(indexPrimary===i){
          const newObject=skill.objects.map((object,i2)=>{
          if(i2===indexSecondary){
            return {...object, [name]: value}
          }
          return object;   
        })
        return {...skill, objects: newObject}
      
      }
        return skill;
    }));
}

const handleCategoryTitle=(index:number, value:string)=>{
    setSkillClient(prev=>prev.map((skill,i)=>{
      if(i===index){
        return {...skill, title: value}
      }
      return skill;
    }))
}

const handleImageInput = (indexPrimary:number, indexSecondary:number, event: React.ChangeEvent<HTMLInputElement>) => {
  const selectedFile = event.target.files && event.target.files[0];
  if (selectedFile) {
    const reader = new FileReader();
    reader.onload = () => {
      setSkillClient(prev=>{
        return prev.map((skills,i)=>{
          if(i===indexPrimary){
            const updatedObject=skills.objects.map((object,index)=>{
              if(index===indexSecondary){
                return {...object, icon: reader.result as string}
              }
              return object;
            });
            return {...skills, objects: updatedObject }
          }
          return skills;
        })
      })
    };
    reader.readAsDataURL(selectedFile);
  }
}

const [editMode,setEdit]=React.useState(false);

  if(editMode){
    return (<div className="p-8 overflow-y-auto h-full">
      <span className="font-extrabold text-4xl block text-center">Skills</span>
      {skillClient.map((skill,indexPrimary)=>{
        return (<div key={uuidv4()} className="border-primary border-4 p-4 mt-6">
            <div className={props.portait?"flex flex-col gap-2 items-center py-4":"flex gap-2 items-center py-4"}>
              <span className='font-bold'>Category:</span>
              <input type="text" name="title" defaultValue={skill.title} className='px-2 h-10 border-2 border-primary rounded-md flex-grow' onBlur={(e)=>handleCategoryTitle(indexPrimary,e.target.value)}/>
            </div>
            <div className="grid grid-cols-1 w-full">
              {skill.objects.map((object,indexSecondary)=>{
                return (
                // <div>
                  <div key={uuidv4()} className="flex gap-2 items-center p-4 flex-col">
                    <img src={object.icon} className='w-32 h-32 block self-center' alt="No Image" />
                   <input className={props.portait?'w-full':""} type="file" onChange={(event)=>handleImageInput(indexPrimary,indexSecondary,event)}/>
                    <input type="text" name="title" defaultValue={object.title} className='px-2 h-10 border-2 border-primary rounded-md w-full' onBlur={(event)=>handleChange(indexPrimary,indexSecondary,event.target.name,event.target.value)}/>
                    <button className="px-3 py-2 bg-red-500 text-white rounded-lg" onClick={()=>deleteOneItem(indexPrimary,indexSecondary)}>Delete Item</button>
                </div>)
              })}
              <button className="px-3 py-2 bg-primary text-white rounded-lg flex items-center gap-2 my-3 justify-center" onClick={()=>addOneItem(indexPrimary)}>Add Item<IoAddCircleOutline className="w-6 h-6" /></button>
              <button className="px-3 py-2 bg-red-500 text-white rounded-lg" onClick={()=>deleteOneCategory(indexPrimary)}>Delete Category</button>
            </div>
          </div>)
      })}
        <button className="px-3 py-2 bg-primary text-white rounded-lg flex gap-2 items-center w-full my-6 justify-center" onClick={()=>addOneCategory()}>Add Category<IoAddCircleOutline className="w-6 h-6" /></button>
        <div className="my-4 flex flex-row justify-between">
                    <button className="px-6 py-2 border-red-500 border-2 hover:bg-red-500 text-black hover:text-white rounded-lg" onClick={()=>{setEdit(false); setSkillClient(props.skills)}}>Discard</button>
                    <button className="px-6 py-2 bg-green-500 text-white rounded-lg" onClick={()=>saveSkills(skillClient)}>Save</button>
                </div>
    </div>)
  }

  return (
    <div className='p-4 h-full'>
      <span className="block font-extrabold text-4xl text-center">My Skills</span>
      <div className='overflow-y-auto h-5/6'>
        <div className='relative group h-full'>
        <button className={props.portait? "px-3 py-2 bg-green-500 text-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 items-center z-10":"px-3 py-2 bg-green-500 text-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex gap-2 items-center z-10"} onClick={()=>setEdit(true)}>Edit Item<FaRegEdit/></button>

      {props.skills.map((skill,index)=>(
        <div key={uuidv4()} className={props.portait?"blur-sm":'group-hover:blur-sm'}>
            <span className="block font-extrabold text-xl py-3">{skill.title}</span>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>

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
        </div>
      <GrPrevious className='absolute bottom-9 left-9 hover:bg-white w-7 h-7 rounded-lg' onClick={props.previousPage}/>
       {props.portait&& <GrNext className='absolute bottom-9 right-9 hover:bg-white w-7 h-7 rounded-lg' onClick={props.nextPage}/>}
    </div>
  )
}

export default FifthPage;
