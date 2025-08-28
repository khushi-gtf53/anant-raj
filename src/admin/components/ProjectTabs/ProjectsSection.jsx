import React, { useEffect, useState } from "react";
import DynamicForm from "../../components/form/DynamicForm";
import { useApi } from "../../hooks/useApi";
import { BASE_ADMIN } from "../../../../config";
import "react-toastify/dist/ReactToastify.css";
import { useCrud } from "../../hooks/useCrud";
import { toast } from "react-toastify";

  const fieldConfigs = {
  "key-highlight": [
    { type: "text", name: "heading", label: "Heading" },
    { type: "text", name: "sub_heading", label: "Description" },
    { type: "image", name: "image", label: "Image" },
    { type: "text", name: "alt", label: "Alt Tag" },
  ],
  gallery: [
    { type: "text", name: "heading", label: "Heading" },
    { type: "text", name: "sub_heading", label: "Description" },
  ],
  amenities: [
    { type: "text", name: "heading", label: "Heading" },
    { type: "text", name: "sub_heading", label: "Description" },
  ],
  "location-map": [
    { type: "text", name: "heading", label: "Heading" },
    { type: "text", name: "sub_heading", label: "Description" },
    { type: "text", name: "description", label: "Location Map" },
  ],
};


  

const ProjectSection = ({endpoint,project_id,project_slug,title}) => {
  const api = useApi(BASE_ADMIN);
  const {handleAddOrUpdate} = useCrud(api, endpoint,null, false);
  const [projectSectionEditData, setProjectSectionEditData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

// pick config
const fieldConfig = fieldConfigs[project_slug] || fieldConfigs.gallery;

 // Wrapper for form submit → include project_id & section_type
  const handleSubmit = (formData) => {

    const payload = {
      ...formData,
      project_id: project_id,
      section_type: project_slug, // slug goes here
    };
    handleAddOrUpdate(payload);
  };


  // for section data prefilled

useEffect(() => {
  if (!project_id || !project_slug) return;

  setProjectSectionEditData({});
  setLoading(true);
  setError(null);

  api.post("show-by-project-with-sectionType", {
    project_id,
    section_type: project_slug,
  })
    .then((res) => {
      if (res.data) {
        setProjectSectionEditData(res.data);
      } else {
        setProjectSectionEditData({});
      }
    })
    .catch((err) => {
      console.error("Error fetching section data:", err);
      toast.error(err)
      setProjectSectionEditData({});
    })
    .finally(() => {
      setLoading(false);
    });
}, [project_id, project_slug]);

if (loading) return <p>Loading section data...</p>;
  return (
    <section className="mb-[20px]">
          <DynamicForm
            key={project_slug}
            title={title}
            data={fieldConfig}
            onSubmit={handleSubmit}
            defaultValues={projectSectionEditData}
            col={12}
          />
    </section>
  );
};


export default ProjectSection;
