import ProjectCard from "../components/card/ProjectCard";
import TestimonialCard from "../components/card/TestimonialCard";
import ProjectList from "../components/card/ProjectList";
import SectionsCard from "../components/card/SectionsCard";
import { RiPagesFill } from "react-icons/ri";
import { useState } from "react";
import { useApi } from "../hooks/useApi";
import { BASE_ADMIN } from "../../../config";
import { useCrud } from "../hooks/useCrud";


const CMSPages=[
  {name:"Home Banner",slug:"/admin/cms/home-banner"},
  {name:"Our Team",slug:"/admin/cms/our-team"},
  {name:"Testimonial",slug:"/admin/cms/testimonial"},
  {name:"Brand Pillars",slug:"/admin/cms/pillar"},
  {name:"Home Highlights",slug:"/admin/cms/highlights"},
  {name:"Image Gallery",slug:"/admin/cms/gallery"},
  {name:"Clients",slug:"/admin/cms/clients"},
  {name:"Why Choose Us",slug:"/admin/cms/about-us",},
  {name:"Meta",slug:"/admin/cms/meta",},
]
const Dashboard = () => {
  const [totalProject, setTotalProjects] = useState(0);
  
      const api = useApi(BASE_ADMIN);
      const { tableData : pages, } = useCrud(api, "distinct-all-pages");



  return (
    <section className=" grid grid-cols-12 gap-6 body-detail">
      <div className="col-span-8">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-6"><ProjectCard data={totalProject}/></div>
          <div className="col-span-6"><TestimonialCard/></div>
        </div>
        <SectionsCard title="Pages" icon={RiPagesFill} data={pages}/>
        <SectionsCard title="CMS Sections" icon={RiPagesFill} data={CMSPages} cms={true}/>
      </div>
      <div className="col-span-4">
        <ProjectList setTotalProjects={setTotalProjects}/>
      </div>
    </section>
  );
};

export default Dashboard;
