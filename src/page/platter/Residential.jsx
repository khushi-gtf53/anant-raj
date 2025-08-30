import PlatterAbout from "../../components/platter/PlatterAbout";
import PlatterProjects from "../../components/platter/PlatterProjects";

const Residential = () => {
  const projectTabs = [
    {
      key: "newlaunch",
      label: "All New Launch Projects",
      projects: [
        {
          name: "The Estate Residences",
          location: "Sector 63A, Gurgaon",
          typology: "4 BHK Luxury Apartments",
          status: "New Launch",
          link: "#",
          slides: [
            "/assets/platter/residential/newlaunch/8.webp",
          ],
        },
      ],
    },
    {
      key: "underconstruction",
      label: "Under Construction",
      projects: [
        {
          name: "The Estate Residences",
          location: "Sector 63A, Gurgaon",
          typology: "4 BHK Luxury Apartments",
          status: "New Launch",
          link: "#",
          slides: [
            "/assets/platter/residential/under_construction/1.webp",          
          ],
        },
      ],
    },
    {
      key: "completed",
      label: "Completed",
      projects: [
        {
          name: "The Estate Residences",
          location: "Sector 63A, Gurgaon",
          typology: "4 BHK Luxury Apartments",
          status: "New Launch",
          link: "#",
          slides: [
            "/assets/platter/residential/completed/1.webp",           
            "/assets/platter/residential/completed/2.webp",           
            "/assets/platter/residential/completed/3.webp",           
            "/assets/platter/residential/completed/4.webp",           
            "/assets/platter/residential/completed/5.webp",           
          ],
        },
      ],
    },
  ];
  return (
    <>
      <PlatterAbout />
      <PlatterProjects tabs={projectTabs} />;
    </>
  );
};

export default Residential;
