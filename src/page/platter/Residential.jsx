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
            "/assets/platter/residential/newlaunch/1.png",
            "/assets/platter/residential/newlaunch/1.png",
            "/assets/platter/residential/newlaunch/1.png",
            "/assets/platter/residential/newlaunch/1.png",
            "/assets/platter/residential/newlaunch/1.png",
            "/assets/platter/residential/newlaunch/1.png",
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
            "/assets/platter/residential/newlaunch/1.png",
            "/assets/platter/residential/newlaunch/1.png",
            "/assets/platter/residential/newlaunch/1.png",
            "/assets/platter/residential/newlaunch/1.png",
            "/assets/platter/residential/newlaunch/1.png",
            "/assets/platter/residential/newlaunch/1.png",
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
            "/assets/platter/residential/newlaunch/1.png",
            "/assets/platter/residential/newlaunch/1.png",
            "/assets/platter/residential/newlaunch/1.png",
            "/assets/platter/residential/newlaunch/1.png",
            "/assets/platter/residential/newlaunch/1.png",
            "/assets/platter/residential/newlaunch/1.png",
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
