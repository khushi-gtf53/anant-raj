
import CommonHeroSec from "../CommonHeroSec";
  const Obj={
    title:"Residential",
    heading:"Residential",
    subtitle:<p>Anant Raj Limited offers a diverse portfolio of luxury residential properties designed to cater to the evolving needs of modern homeowners.</p>,
    imgUrl:"/assets/platter/residential/about.png",
    linkTo:"discover",   
    tabs:[
    { tabname: "new launch", tablink: "newlaunch" },
    { tabname: "under construction", tablink: "underconstruction" },
    { tabname: "completed", tablink: "completed" },
    ] 
  }

const PlatterAbout = () => {
  return (
   <CommonHeroSec ObjData={Obj}/>
  );
};

export default PlatterAbout;
