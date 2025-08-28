import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useApi } from "../hooks/useApi";
import { BASE_ADMIN } from "../../../config";
import { useCrud } from "../hooks/useCrud";
import DynamicForm from "../components/form/DynamicForm";
import Card from "../components/card/Card";
import CardHeading from "../components/card/CardHeading";
import TableContainer from "../components/table/TableContainer";

const sectionConfigs = {
  "home-banner": {
    fields: [
      { type: "image", name: "image", label: "Image" },
      { type: "image", name: "mb_image", label: "Mobile Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
    ],
    table: { head: ["Image", "Alt Tag"], header: ["image", "alt"] },
    endpoint: "home-banner",
    label: "Banner",
  },
  clients: {
    fields: [
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
    ],
    table: { head: ["Image", "Alt Tag"], header: ["image", "alt"] },
    endpoint: "client",
    label: "Client",
  },
  testimonial: {
    fields: [
      { type: "text", name: "name", label: "Name" },
      { type: "text", name: "short_description", label: "Description" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
    ],
    table: {
      head: ["Name", "Description"],
      header: ["name", "short_description"],
    },
    endpoint: "testimonials",
    label: "Testimonial",
  },
  pillar: {
    fields: [
      { type: "text", name: "title", label: "Title" },
      { type: "text", name: "short_description", label: "Description" },
    ],
    table: { head: ["Title", "Description"], header: ["title", "short_description"] },
    endpoint: "pillar",
    label: "Pillars",
  },
  highlights: {
    fields: [
      { type: "text", name: "title", label: "Title" },
      { type: "text", name: "short_description", label: "Description" },
    ],
    table: { head: ["Title", "Description"], header: ["title", "short_desc"] },
    endpoint: "home-highlight",
    label: "Highlight",
  },
  gallery: {
    fields: [
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
    ],
    table: { head: ["Image", "Alt Tag"], header: ["image", "alt"] },
    endpoint: "home-galleries",
    label: "Gallery",
  },
  "about-us": {
    fields: [
      { type: "text", name: "title", label: "Heading" },
      { type: "text", name: "short_description", label: "Description" },
      { type: "image", name: "icon", label: "Icon" },
      { type: "text", name: "alt", label: "Alt Tag" },
    ],
    table: {
      head: ["Heading", "Description"],
      header: ["title", "short_description"],
    },
    endpoint: "why-choose",
    label: "About Us",
  },
  "our-team": {
    fields: [
      {
        type: "dropdown",
        name: "category_id",
        label: "Select Page",
        options: [],
        // required: true,
      },
      { type: "text", name: "name", label: "Name" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
      { type: "text", name: "designation", label: "Designation" },
      { type: "text", name: "short_description", label: "Description" },
    ],
    table: {
      head: ["Name", "Image", "Alt Tag", "Designation", "Description"],
      header: ["name","image","alt","designation","short_description",],
    },
    endpoint: "team",
    label: "Our Team",
  },
  meta: {
    fields: [
      {
        type: "dropdown",
        name: "page_id",
        label: "Select Page",
        options: [],
        // required: true,
      },
      { type: "text", name: "meta_title", label: "Title" },
      { type: "text", name: "meta_keyword", label: "Keywords" },
      { type: "text", name: "meta_description", label: "Description" },
      { type: "textarea", name: "head_data", label: "Head Data" },
      { type: "textarea", name: "footer_data", label: "Footer Data" },
    ],
    table: {
      head: ["Heading", "Keywords", "Description", "Head Data", "Footer Data"],
      header: ["meta_title","meta_keyword","meta_description","head_data","footer_data",],
    },
    endpoint: "page-meta",
    label: "Meta Page",
  },
};

const CmsSections = () => {
      const { slug } = useParams();
      const api = useApi(BASE_ADMIN);
        const [dynamicFields, setDynamicFields] = useState([]);

  // Get config for current slug
  const config = sectionConfigs[slug] || {
    fields: [],
    table: { head: [], header: [] },
    endpoint: "",
    label: slug,
  };


  
    const { tableData, editData, handleAddOrUpdate, handleDelete, handleEdit,pagination,currentPage,handlePageChange } =
      useCrud(api, config.endpoint ,config.table.header || [],);
      
  
      // const {tableData : MetaFields}=useCrud(api,"distinct-pages");
        // 👇 Only call distinct-pages API when slug === "meta"
  const { tableData: MetaFields } =
    slug === "our-team" ? useCrud(api, "team-category") : { tableData: [] };
      


useEffect(() => {
  if (slug === "our-team") {
    const options = MetaFields?.map((item) => ({
      label: item.name,
      value: item.id,
    }));

    const updatedFields = config.fields.map((f) => {
      if (f.type === "dropdown" && f.name === "category_id") {
        return {
          ...f,
          options,
          // ✅ Preselect the correct page if editing
          defaultValue: editData?.category_id || "",
        };
      }
      return f;
    });

    setDynamicFields(updatedFields);
  } else {
    setDynamicFields(config.fields);
  }
}, [slug, MetaFields, editData]);


  return <>
    <section key={slug}>
      <div className="grid grid-cols-12 gap-[20px]">
        <div className="col-span-12">
          <DynamicForm
              title={editData ? `Edit ${config.label}` : `Add ${config.label}`}
            data={dynamicFields}
            onSubmit={handleAddOrUpdate}
            defaultValues={editData}
            col={12}
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
    </section>
  </>;
};

export default CmsSections;
