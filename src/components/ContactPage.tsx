import React from 'react'
import { GrPrevious } from "react-icons/gr";
// import { GrNext } from "react-icons/gr";

interface SeventhPageProps {
  previousPage: () => void;
}

const SeventhPage:React.FC<SeventhPageProps> = (props) => {
  const [form,setForm]=React.useState({name: "", email: "", message: ""});
  const handleChange=(event:any)=>{
    setForm({...form, [event.target.name]: event.target.value})
  }
  return (
    <div className="py-6 h-full">
        <span className="block font-extrabold text-4xl text-center h-10">Contact Form</span>
      <div className="flex flex-col justify-evenl items-center w-full h-5/6 my-3 px-8 gap-2">
        <input className="w-full text-black h-1/6 border-2 border-primary rounded-lg px-3 bg-transparent placeholder:text-black" value={form.name} onChange={handleChange} type="text" name="name" id="name" placeholder="Full Name"/>
        <input className="w-full h-1/6 border-2 border-primary rounded-lg px-3 bg-transparent placeholder:text-black" value={form.email} onChange={handleChange} type="text" name="email" id="email" placeholder="Email Address"/>
        <textarea className="w-full border-2 border-primary rounded-lg py-2 px-3 bg-transparent placeholder:text-black" value={form.message} onChange={handleChange} rows={6} name="message" id="name" placeholder="Your Message"/>
      <a className="px-6 py-2 bg-primary text-white rounded-lg hover:scale-110">Send Message</a>
      </div>
      <GrPrevious className='absolute bottom-9 left-9 hover:bg-white w-7 h-7 rounded-md' onClick={props.previousPage}/>
    </div>
  )
}

export default SeventhPage
