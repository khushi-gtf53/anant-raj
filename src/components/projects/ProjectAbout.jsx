import CommonHeroSec from "../CommonHeroSec"

  const Obj={
    title:"Our Projects",
    heading:"Our Projects",
    subtitle:<p>Thoughtfully designed homes that blend comfort, elegance, and modern living, offering serene spaces that elevate everyday lifestyles.</p>,
    imgUrl:"/assets/projects/about.webp",
    linkTo:"discover",   
    tabs:[
    { tabname: "Residential", tablink: "residential" },
    { tabname: "Commercial", tablink: "commercial" },
    { tabname: "Hospitality", tablink: "hospitality" },
    { tabname: "Data Centers", tablink: "datacenters" },
    ] 
  }

const ProjectAbout = () => {
  return (
   <CommonHeroSec ObjData={Obj} />
  )
}

export default ProjectAbout