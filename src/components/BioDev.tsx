import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn,FaInstagram } from "react-icons/fa";
import { GrNext } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import DataInterface from './types/DataInterface';

interface FirstPageProps {
  bio: string;
  bio_img: string;
  name: string;
  profession: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  cv: string;
  contact_me: string;
  nextPage: ()=> void;
  portait: boolean ;
  setData: React.Dispatch<React.SetStateAction<DataInterface>>;
}

const FirstPage : React.FC<FirstPageProps>= (props) => {
  const [bioClient, setBioClient]= React.useState({ bio: props.bio, bio_img: props.bio_img, name: props.name, profession: props.profession, facebook: props.facebook, twitter: props.twitter, linkedin: props.linkedin, instagram: props.instagram, cv: props.cv, contact_me: props.contact_me });
  const [editMode,setEdit]=React.useState(false);
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setBioClient({...bioClient, [e.target.name]: e.target.value });
  }

  const handleBioChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setBioClient({...bioClient, [e.target.name]: e.target.value });
  }

  const handleImageInput=(event: React.ChangeEvent<HTMLInputElement>)=>{
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setBioClient(prev => {
          return ({...prev, bio_img: reader.result? reader.result.toString() : "" });
        });
      };
      reader.readAsDataURL(selectedFile);
    }
  
  }

  const saveBio=()=>{
    props.setData(prev => ({
      ...prev,
      bio: bioClient.bio,
      bio_img: bioClient.bio_img,
      name: bioClient.name,
      profession: bioClient.profession,
      facebook: bioClient.facebook,
      twitter: bioClient.twitter,
      linkedin: bioClient.linkedin,
      instagram: bioClient.instagram,
      cv: bioClient.cv,
      contact_me: bioClient.contact_me
    }));
    setEdit(false);
  }

  if(editMode){
    return (<div className="h-full overflow-auto p-9 flex flex-col items-center">
          <span className="block font-extrabold text-4xl text-center mb-5">Biography</span>
          <div className='w-full flex flex-col gap-3 items-center my-3'>

          <img src={bioClient.bio_img} className='aspect-square w-44 rounded-full ring-4 ring-primary' alt="No Image" />
          <input className="" type="file" onChange={(event)=>handleImageInput(event)}/>
          
          </div>
                <div className={props.portait?"flex flex-col items-center gap-2 w-full p-1":"flex items-center gap-2 w-full p-1"}>
                    <span className="font-semibold">Name: </span>
                    <input defaultValue={bioClient.name} type="text" className="w-full h-10 border-2 border-primary rounded-md flex-grow px-2" name="name" onBlur={(e)=>handleChange(e)}/>
                </div>
                <div className={props.portait?"flex flex-col items-center gap-2 w-full p-1":"flex items-center gap-2 w-full p-1"}>
                    <span className="font-semibold">Profession: </span>
                    <input defaultValue={bioClient.profession} type="text" className="w-full h-10 border-2 border-primary rounded-md flex-grow px-2" name="profession" onBlur={(e)=>handleChange(e)}/>
                </div>
                <div className={props.portait?"flex flex-col items-center gap-2 w-full p-1":"flex items-center gap-2 w-full p-1"}>
                    <span className="font-semibold">Facebook: </span>
                    <input defaultValue={bioClient.facebook} type="text" className="w-full h-10 border-2 border-primary rounded-md flex-grow px-2" name="facebook" onBlur={(e)=>handleChange(e)}/>
                </div>
                <div className={props.portait?"flex flex-col items-center gap-2 w-full p-1":"flex items-center gap-2 w-full p-1"}>
                    <span className="font-semibold">Twitter: </span>
                    <input defaultValue={bioClient.twitter} type="text" className="h-10 w-full border-2 border-primary rounded-md flex-grow px-2" name="twitter" onBlur={(e)=>handleChange(e)}/>
                </div>
                <div className={props.portait?"flex flex-col items-center gap-2 w-full p-1":"flex items-center gap-2 w-full p-1"}>
                    <span className="font-semibold">LinkedIn: </span>
                    <input defaultValue={bioClient.linkedin} type="text" className="h-10 border-2 w-full border-primary rounded-md flex-grow px-2" name="linkedin" onBlur={(e)=>handleChange(e)}/>
                </div>
                <div className={props.portait?"flex flex-col items-center gap-2 w-full p-1":"flex items-center gap-2 w-full p-1"}>
                    <span className="font-semibold">CV Link: </span>
                    <input defaultValue={bioClient.cv} type="text" className="h-10 border-2 border-primary w-full rounded-md flex-grow px-2" name="cv" onBlur={(e)=>handleChange(e)}/>
                </div>
                <div className={props.portait?"flex flex-col items-center gap-2 w-full p-1":"flex items-center gap-2 w-full p-1"}>
                    <span className="font-semibold">Contact Me Link:</span>
                    <input defaultValue={bioClient.contact_me} type="text" className="h-10 border-2 border-primary w-full rounded-md flex-grow px-2" name="contact_me" onBlur={(e)=>handleChange(e)}/>
                </div>
                <div className={props.portait?"flex flex-col items-center gap-2 w-full p-1":"flex items-center gap-2 w-full p-1"}>
                    <span className="font-semibold">Bio:</span>
                    <textarea defaultValue={bioClient.bio} rows={4} className="border-2 border-primary rounded-md flex-grow w-full px-2" name="bio" onChange={(e)=>handleBioChange(e)}/>
                </div>
                <div className="my-4 flex flex-row justify-between w-full">
                <button className="px-6 py-2 border-red-500 border-2 hover:bg-red-500 text-black hover:text-white rounded-lg" onClick={()=>{setEdit(false); setBioClient({ bio: props.bio, bio_img: props.bio_img, name: props.name, profession: props.profession, facebook: props.facebook, twitter: props.twitter, linkedin: props.linkedin, instagram: props.instagram, cv: props.cv, contact_me: props.contact_me })}}>Discard</button>
                <button className="px-6 py-2 bg-green-500 text-white rounded-lg" onClick={()=>saveBio()}>Save</button>
          </div>

      </div>)
  }

  return (<div className={props.portait? "h-5/6 overflow-auto p-9": "h-full overflow-auto p-9"}>
<div className="relative group h-full">
<button className={props.portait? "px-3 py-2 bg-green-500 text-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 items-center z-10":"px-3 py-2 bg-green-500 text-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex gap-2 items-center z-10"} onClick={()=>setEdit(true)}>Edit Item<FaRegEdit/></button>
    <div className={props.portait?'flex flex-col items-center':'flex flex-col items-center group-hover:blur-sm'}>
        <img className='aspect-square w-44 rounded-full ring-4 ring-primary' src={props.bio_img}/>
        <span className='flex gap-3 font-bold text-4xl'>{props.name}</span>
        <span className='flex gap-3 font-bold text-2xl text-black'>{props.profession}</span>
        <div className='text-4xl text-primary flex flex-row py-4 gap-4'>
          <a href={props.facebook} className='rounded-full ring-2 ring-primary hover:bg-primary hover:text-white duration-300'><FaFacebookF className='p-2'/></a>
          <a href={props.twitter} className="rounded-full ring-2 ring-primary hover:bg-primary hover:text-white duration-300"><FaTwitter className='p-2'/></a>
          <a href={props.linkedin} className='rounded-full ring-2 ring-primary hover:bg-primary hover:text-white duration-300'><FaLinkedinIn className=' p-2'/></a>
          <a href={props.instagram} className='rounded-full ring-2 ring-primary hover:bg-primary hover:text-white duration-300'><FaInstagram className=' p-2'/></a>
        </div>
          <h3 className='w-full text-justify'>{props.bio}</h3>
        <div className={props.portait?'flex flex-col mt-10 gap-4 w-full':'flex flex-row mt-10 justify-evenly w-full pb-5'}>
          <a href="#" className={props.portait?'px-3 py-2 bg-primary text-white hover:text-primary hover:bg-white border-2 border-primary duration-300 w-full text-center':'px-3 py-2 bg-primary text-white hover:text-primary hover:bg-white border-2 border-primary duration-300'}>Download CV</a>
          <a href="#" className={props.portait? "px-3 py-2 border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white duration-300 w-full text-center": "px-3 py-2 border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white duration-300"}>Contact Me</a>
        </div>
</div>
</div>
        {props.portait&&   <GrNext className='absolute bottom-9 right-9 hover:bg-white w-7 h-7 rounded-lg' onClick={props.nextPage}/>}
  </div>
  )
}

export default FirstPage;
