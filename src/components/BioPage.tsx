import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn,FaInstagram } from "react-icons/fa";
import { GrNext } from "react-icons/gr";

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
}

const FirstPage : React.FC<FirstPageProps>= (props) => {
  return (<div className={props.portait ? "h-5/6 overflow-auto p-9" : "p-9"}>

    <div className='flex flex-col items-center'>
        <img className='aspect-square w-44 rounded-full ring-4 ring-primary' src={props.bio_img}/>
        <span className='font-bold text-4xl'>{props.name}</span>
        <span className='font-bold text-2xl text-primary'>{props.profession}</span>
        <div className='text-4xl text-primary flex flex-row py-4 gap-4'>
          <a href={props.facebook} className='rounded-full ring-2 ring-primary hover:bg-primary hover:text-white duration-300'><FaFacebookF className='p-2'/></a>
          <a href={props.twitter} className="rounded-full ring-2 ring-primary hover:bg-primary hover:text-white duration-300"><FaTwitter className='p-2'/></a>
          <a href={props.linkedin} className='rounded-full ring-2 ring-primary hover:bg-primary hover:text-white duration-300'><FaLinkedinIn className=' p-2'/></a>
          <a href={props.instagram} className='rounded-full ring-2 ring-primary hover:bg-primary hover:text-white duration-300'><FaInstagram className=' p-2'/></a>
        </div>
        <div>
          <h3>{props.bio}</h3>
        </div>
        <div className={props.portait?'flex flex-col mt-10 gap-4 w-full':'flex flex-row mt-10 justify-evenly w-full pb-5'}>
          <a href="#" className={props.portait?'px-3 py-2 bg-primary text-white hover:text-primary hover:bg-white border-2 border-primary duration-300 w-full text-center':'px-3 py-2 bg-primary text-white hover:text-primary hover:bg-white border-2 border-primary duration-300'}>Download CV</a>
          <a href="#" className={props.portait? "px-3 py-2 border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white duration-300 w-full text-center": "px-3 py-2 border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white duration-300"}>Contact Me</a>
        </div>
    </div>
        {props.portait&&   <GrNext className='absolute bottom-9 right-9 hover:bg-white w-7 h-7 rounded-lg' onClick={props.nextPage}/>}
  </div>
  )
}

export default FirstPage;
