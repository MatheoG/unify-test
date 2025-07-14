import { AgGridReact } from "ag-grid-react";
import { useUsers } from "../hooks/useUsers";

function MainPage() {
  const { data, isLoading, error } = useUsers()
  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
      <AgGridReact
        rowData={data ?? []}
        columnDefs={[
          { field: "id" },
          { field: "name" },
          { field: "email" },
        ]}
      />

    </div>
  );
}
export default MainPage;