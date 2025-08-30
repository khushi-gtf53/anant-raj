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
  {name:"Platter",slug:"platter"},
  {name:"Timeline",slug:"timeline"},
  {name:"Awards",slug:"award"},
  {name:"News",slug:"news"},
  {name:"Blogs",slug:"blog"},
  {name:"Our Team",slug:"our-team"},
  {name:"Testimonial",slug:"testimonial"},
  {name:"Brand Pillars",slug:"pillar"},
  {name:"Meta",slug:"meta",},
];
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
