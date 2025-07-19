import { AgGridReact } from "ag-grid-react";
import { useDeleteUser, useUsers } from "../hooks/useUsers"; 
import "ag-grid-community/styles/ag-theme-alpine.css";
import type { ICellRendererParams } from "ag-grid-community";

function MainPage() {
  const pageSize = 5;
  const { data, isLoading, error } = useUsers();
  const deleteUser = useDeleteUser();
  
  const columnDefs = [
    { field: "id" },
    { field: "username" },
    { field: "name" },
    { field: "email" },
    {
        field: "Actions",
        cellRenderer: (params: ICellRendererParams) => (
          <button onClick={() => deleteUser.mutate(params.data.id)} className="btn btn-danger">
            Delete
          </button>
        ),
    },
  ];

  return (
    <div className="p-4 space-y-4">
      <div className="ag-theme-alpine">
        {isLoading ? (
          <p>⏳ Chargement...</p>
        ) : error ? (
          <p className="text-red-500">Erreur : {error.message}</p>
        ) : (
          <AgGridReact
            rowData={data ?? []}
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
