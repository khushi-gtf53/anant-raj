import React, { useEffect, useState } from "react";
import TableContainer from "../components/table/TableContainer";
import Card from "../components/card/Card";
import CardHeading from "../components/card/CardHeading";
import { useApi } from "../hooks/useApi";
import { useCrud } from "../hooks/useCrud";
import { BASE_ADMIN } from "../../../config";

const tableHead = ["Name", "Image", "Address", "Short Description"];
const tableHeader = ["name","thumbnail","address", "short_description"];

const ProjectList = () => {

  const api = useApi(BASE_ADMIN);
  const { tableData ,handleDelete,pagination,currentPage,handlePageChange} = useCrud(api, "project",tableHeader);

  return (
    <section>
      <Card className="!p-[40px]">
        <CardHeading>Our Projects Table</CardHeading>
        <TableContainer
          head={tableHead}
          data={tableData}
          onDelete={handleDelete}
              pagination={pagination}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
        />
      </Card>
    </section>
  );
};

export default ProjectList;
