import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/card/Card";
import CardHeading from "../components/card/CardHeading";
import DynamicForm from "../components/form/DynamicForm";
import TableContainer from "../components/table/TableContainer";
import { useApi } from "../hooks/useApi";
import { BASE_ADMIN } from "../../../config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCrud } from "../hooks/useCrud";
import ProjectSection from "../components/ProjectTabs/ProjectsSection";

// --- Centralized Config ---
const sectionConfigs = {
  banner: {
    fields: [
      { type: "image", name: "image", label: "Banner" },
      { type: "text", name: "alt", label: "Alt Tag" },
    ],
    table: { head: ["Banner", "Alt Tag"], header: ["image", "alt"] },
    endpoint: "banner",
    label: "Banner",
  },
  "key-highlight": {
    fields: [
      { type: "text", name: "title", label: "Title" },
    ],
    table: { head: ["Title"], header: ["title"] },
    endpoint: "highlight",
    label: "Highlights",
  },
  gallery: {
    fields: [
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
    ],
    table: { head: ["Image", "Alt Tag"], header: ["image", "alt"] },
    endpoint: "galleries",
    label: "Gallery",
  },
  amenities: {
    fields: [
      { type: "text", name: "name", label: "Title" },
      { type: "text", name: "short_description", label: "Description" },
      { type: "image", name: "icon", label: "Icon" },
      { type: "text", name: "alt", label: "Alt Tag" },
    ],
    table: { head: ["Title", "Description", "Icon", "Alt Tag"], header: ["name", "short_description", "icon", "alt"] },
    endpoint: "amenities",
    label: "Amenities",
  },
};

const ProjectDetails = () => {
  const { id, slug } = useParams();
  const api = useApi(BASE_ADMIN);

  // Get config for current slug
  const config = sectionConfigs[slug] || {
    fields: [],
    table: { head: [], header: [] },
    endpoint: "",
    label: slug,
  };

  // Some slugs shouldn't render form/table
  const excludedSlugs = ["location-map", "overview"];
  const isEditableSection = config.endpoint && !excludedSlugs.includes(slug);


  // Hook for CRUD operations
  const { tableData, pagination,currentPage,handlePageChange } =
    useCrud(api, isEditableSection ? `project/${id}/${config.endpoint}` : null,config.table.header || [],);

    const {  editData, handleAddOrUpdate, handleDelete, handleEdit} =
    useCrud(api, isEditableSection ? `project-${config.endpoint}` : null,config.table.header || [], true);


  return (
    <section key={slug}>
      {/* Project Section always shown except for banner */}
      {slug !== "banner" && (
        <ProjectSection
          title={slug}
          project_id={id}
          project_slug={slug}
          endpoint="project-section"
        />
      )}

      {/* Editable sections (form + table) */}
      {isEditableSection && (
        <div className="grid grid-cols-12 gap-[20px]">
          <div className="col-span-12">
            <DynamicForm
              title={editData ? `Edit ${config.label}` : `Add ${config.label}`}
              data={config.fields}
              onSubmit={(formData) => {
                // if (config.endpoint?.includes("project")) {
                  formData.project_id = id;
                // }
                handleAddOrUpdate(formData);
              }}
              defaultValues={editData}
              col={6}
            />
          </div>

          <div className="col-span-12">
            <Card>
              <CardHeading>{config.label}</CardHeading>
              <TableContainer
                head={config.table.head}
                data={tableData}
                onDelete={handleDelete}
                onEdit={handleEdit}
              pagination={pagination}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
              />
            </Card>
          </div>
        </div>
      )}

      {/* Toast Notifications */}
      <ToastContainer />
    </section>
  );
};

export default ProjectDetails;
