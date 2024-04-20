interface DataInterface{
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
    Work_Experience: {
      date: string;
      position: string;
      company: string;
      description: string;
    }[];
    education: {
      date: string;
      degree: string;
      institution: string;
      description: string;
    }[];
    services: {
      icon: string;
      title: string;
      description: string;
      link: string;
    }[];
    skills: {
      title: string;
      objects: {
        icon: string;
        title: string;
      }[];
    }[];
    project: {
      img: string;
      title: string;
      tech_used: string;
      description: string;
      link: string;
      code: string;
      more_projects: string;
    };
  
  }

  export default DataInterface;