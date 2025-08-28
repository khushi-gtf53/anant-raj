import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DynamicForm from "../components/form/DynamicForm";
import { useApi } from "../hooks/useApi";
import { BASE_ADMIN } from "../../../config";
import { useCrud } from "../hooks/useCrud";

const fieldConfig = [
  { type: "text", name: "name", label: "Project Name"},
  { type: "image", name: "thumbnail", label: "Project Image" },
  { type: "text", name: "alt", label: "Image Alt Tag"},
  { type: "text", name: "address", label: "Address"},
  { type: "text", name: "short_description", label: "Short Description" },
  { type: "text", name: "meta_title", label: "Meta Title" },
  { type: "text", name: "meta_keyword", label: "Meta Keyword" },
  { type: "text", name: "meta_description", label: "Meta Description" },
];

const Project = () => {
  const { id } = useParams(); // optional id param
  const api = useApi(BASE_ADMIN);
  const {  editData, handleAddOrUpdate,  handleEdit } = useCrud(api, "project");

useEffect(() => {
    if (id) {
      handleEdit(id); // fetch project details when editing
    }
  }, [id]);


  return (
    <section className={`${id ? "mr-[80px]" : ""}`}>
      <DynamicForm
        title={id ? "Edit Project" : "Create Project"}
        data={fieldConfig}
        onSubmit={handleAddOrUpdate}
        defaultValues={editData} // pass pre-filled values for edit mode
      />
    </section>
  );
};

export default Project;
