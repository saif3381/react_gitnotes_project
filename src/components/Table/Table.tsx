import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { demo } from "../Gist";

const columns: GridColDef[] = [
  { field: "Name", headerName: "Name", width: 250 },
  { field: "Date", headerName: "Date", width: 250 },
  { field: "Time", headerName: "Time", width: 250 },
  { field: "Keyword", headerName: "Keyword", width: 250 },
  { field: "Notebook", headerName: "Notebook", width: 350 },
];

const paginationModel = { page: 0, pageSize: 5 };

const DataTable: React.FC= () => {
  return (
    <Paper sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={demo}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
};

export default DataTable;
