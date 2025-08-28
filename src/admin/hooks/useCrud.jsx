import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const useCrud = (api, endpoint, tableHeader,autoFetch = true) => {
  const { get, post, update, del, edit } = api;

  const [tableData, setTableData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [editData, setEditData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // ✅ Fetch table data with optional page number
  const fetchTableData = async (page = 1) => {
  
    if (!endpoint) return;

    try {
      const response = await get(`${endpoint}?page=${page}&limit=10`);

      if (response?.data) {
        let formatted;

        // If tableHeader exists -> return array rows for table display
        if (Array.isArray(tableHeader) && tableHeader.length > 0) {
          formatted = response.data.map((item) => {
            const row = tableHeader.map((key) => item[key]);
            // Always push the ID at the end for easy editing/deleting
            row.push(item.id);
            return row;
          });
        } else {
          // If no tableHeader -> keep as objects
          formatted = response.data;
        }

        setTableData(formatted);
        setPagination(response?.pagination || {});
      }
    } catch (err) {
      console.error(err,"fetch error");
      toast.error(err);
    }
  };

  // ✅ Run when endpoint or currentPage changes
  
 // ✅ Run only if autoFetch is true
useEffect(() => {
  if (!autoFetch || !endpoint) return;  // 👈 only run when endpoint is valid
  fetchTableData(currentPage);
}, [endpoint, currentPage, autoFetch]);


  // ✅ Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // ✅ Add or update
  const handleAddOrUpdate = async (data) => {
    if (!endpoint) return;

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => formData.append(k, v));

      if (editData) {
        // Update existing record
        const response = await update(`${endpoint}/${editData.id}/update`, formData);

        if (response?.status) {
          toast.success("Updated successfully");
          // setEditData(null);
          fetchTableData(currentPage); // refresh list
        }
      } else {
        // Add new record
        const response = await post(endpoint, formData);

        if (response?.status) {
          toast.success("Added successfully");
          fetchTableData(currentPage); // refresh list
        }
      }
    } catch (error) {
        console.error(error?.messages);
        toast.error(error?.error);
    }
  };

  // ✅ Delete
  const handleDelete = async (id) => {
    if (!endpoint) return;

    try {
      await del(`${endpoint}/${id}`);
      setTableData((prev) => prev.filter((row) => row[2] !== id)); // assumes ID is at index 2
      toast.success("Deleted successfully");
      fetchTableData(currentPage);
    } catch (err) {
      console.error(err?.err);
      toast.error("Error deleting");
    }
  };

  // ✅ Edit (fetch one record)
  const handleEdit = async (id) => {
    if (!endpoint) return;

    try {
      const response = await edit(`${endpoint}/${id}`);
      setEditData(response?.data);
      toast.success("Data loaded for edit");
      fetchTableData(currentPage);
    } catch (err) {
      console.error(err);
      toast.error("Error loading data");
    }
  };

  return {
    tableData,
    pagination,
    currentPage,
    handlePageChange,
    editData,
    handleAddOrUpdate,
    handleDelete,
    handleEdit,
    fetchTableData,
  };
};
