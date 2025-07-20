import { AgGridReact } from "ag-grid-react";
import { useDeleteUser, useUsers } from "../hooks/useUsers"; 
import "ag-grid-community/styles/ag-theme-alpine.css";
import type { ICellRendererParams } from "ag-grid-community";
import { useNavigate } from "react-router-dom";
function MainPage() {
  const pageSize = 20;
  const { data, isLoading, error } = useUsers();
  const deleteUser = useDeleteUser();
  const navigate = useNavigate();
  
  // Create a skeleton row for loading state
  const skeletonRows = Array.from({ length: 5}, (_, i) => ({
    id: `loading-${i}`,
    username: '',
    name: '',
    email: '',
    __isLoading: true,
  }));

  const renderSkeletonCell = (width = 'w-2/3') => (
    <div className={`bg-gray-200 rounded h-4 mt-3 ${width} animate-pulse`} />
  );

  // Define column definitions
  const columnDefs = [
    { field: "id" ,
      cellRenderer: (params: ICellRendererParams) =>
        params.data.__isLoading ? renderSkeletonCell("w-1/4") : params.value
    },
    {
      field: "username",
      cellRenderer: (params: ICellRendererParams) =>
        params.data.__isLoading
          ? renderSkeletonCell("w-2/3")
          : (
            <a
              onClick={() => navigate(`/user/${params.data.id}`)}
              className="text-blue-500 hover:underline"
            >
              {params.value}
            </a>
          ),
    },
    {
      field: "name",
      cellRenderer: (params: ICellRendererParams) =>
        params.data.__isLoading ? renderSkeletonCell("w-1/2") : params.value,
    },
    {
      field: "email",
      cellRenderer: (params: ICellRendererParams) =>
        params.data.__isLoading ? renderSkeletonCell("w-3/4") : params.value,
    },
    {
      field: "Actions",
      cellRenderer: (params: ICellRendererParams) =>
        params.data.__isLoading ? null : (
          <a
            onClick={() => deleteUser.mutate(params.data.id)}
            className="text-red-500 hover:underline ml-2 cursor-pointer"
          >
            Delete
          </a>
        ),
    },
  ];


  

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">User Management</h1>
      <div className="ag-theme-alpine">
        {error ? (
          <p className="text-red-500">Erreur : {error.message}</p>
        ) : (
          <AgGridReact
            rowData={isLoading ? skeletonRows : data ?? []}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={pageSize}
            getRowId={(params) => params.data.id}
            domLayout="autoHeight"
            onGridReady={(params) => {
              params.api.sizeColumnsToFit();
            }}
          />

        )}
      </div>
    </div>
  );
}

export default MainPage;
