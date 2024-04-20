import HTMLFlipBook,{} from "react-pageflip";
import BioPage from "./components/BioPage";
import ExperiencePage from "./components/ExperiencePage";
import EducationPage from "./components/EducationPage";
import ServicesPage from "./components/ServicesPage";
import SkillsPage from "./components/SkillsPage";
import ProjectPage from "./components/ProjectPage";
import ContactPage from "./components/ContactPage";
import {useState, useEffect, useRef} from 'react';
import data from './components/data';
import './output/style.css';

function App() {
  const [Data, setData] = useState(data);
  const [portait,setPortait]=useState(false);
  const [width,setWidth]=useState(500);
  useEffect(() => {
      if(window.innerWidth<1200){
        setPortait(true);
      }
      if(window.innerWidth<550){
        setWidth(window.innerWidth-50)
      }
    }, []);
    const pages=useRef<any>(null);
    const forward=()=>{
      previousPage();
    }
    const nextPage=()=>{
      pages.current.pageFlip().flipNext();
    }
    const previousPage=()=>{
      {portait ? pages.current.pageFlip().turnToPrevPage() : pages.current.pageFlip().flipPrev() }
    }
  return (
  
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-secondary overflow-hidden">

    <HTMLFlipBook 
    ref={pages}
    width={width} 
    height={650} 
    className={'ring-8 ring-primary'} 
    startPage={0} 
    size={'fixed'} 
    minWidth={250}
    maxWidth={8000} 
    minHeight={500} 
    maxHeight={8000} 
    drawShadow={true} 
    flippingTime={500} 
    usePortrait={portait} 
    startZIndex={0} 
    autoSize={false} 
    maxShadowOpacity={.3} 
    showCover={false} 
    mobileScrollSupport={true}
    clickEventForward={true}
    useMouseEvents={false} 
    swipeDistance={0} 
    showPageCorners={false} 
    disableFlipByClick={true} 
    style={{}}>
      <div className="bg-gradient-to-r from-page_first to-page_last border-r- border-black"><BioPage bio={Data.bio} bio_img={Data.bio_img} name={Data.name} profession={Data.profession} facebook={Data.facebook} twitter={Data.twitter} instagram={Data.instagram} linkedin={Data.linkedin} cv={Data.cv} contact_me={Data.contact_me} nextPage={nextPage} portait={portait}/></div>
      <div className="bg-gradient-to-r from-next_first to-next_last"><ExperiencePage work_experience={Data.Work_Experience} previousPage={previousPage} nextPage={nextPage} portait={portait}/></div>
      <div className="bg-gradient-to-r from-page_first to-page_last"><EducationPage education={Data.education} previousPage={previousPage} nextPage={nextPage} portait={portait}/></div>
      <div className="bg-gradient-to-r from-next_first to-next_last"><ServicesPage services={Data.services} previousPage={previousPage} nextPage={nextPage} portait={portait}/></div>
      <div className="bg-gradient-to-r from-page_first to-page_last"><SkillsPage skills={Data.skills} previousPage={previousPage} nextPage={nextPage} portait={portait}/></div>
    <div className="bg-gradient-to-r from-next_first to-next_last"><ProjectPage project={Data.project} previousPage={previousPage} nextPage={nextPage} portait={portait}/></div>
    <div className="bg-gradient-to-r from-page_first to-page_last"><ContactPage previousPage={previousPage}/></div>
      <div className="bg-primary"></div>


    </HTMLFlipBook>
      </div>
  );
}

export default App;