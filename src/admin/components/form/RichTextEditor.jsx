import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Label from "./Label";

const RichTextEditor = ({ label, name, value, onChange, required }) => {
  return (
    <div>
      {label && <Label name={name} label={label} required={required} />}
      <div className="">
        <CKEditor
          editor={ClassicEditor}
          data={value || ""}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data); // returns HTML string
          }}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
