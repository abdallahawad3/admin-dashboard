import type { GridColDef } from "@mui/x-data-grid";
import Header from "../../components/ui/Header";
import Table from "../../components/ui/Table";
import { mockDataTeam } from "../../data/mockData";
import { Box } from "@mui/system";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { tokens } from "../../theme";

const columns: GridColDef<(typeof mockDataTeam)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    editable: false,
  },
  {
    field: "age",
    headerName: "Age",
    width: 200,
    editable: false,
  },
  {
    field: "phone",
    headerName: "phone",
    type: "string",
    width: 200,
    editable: false,
  },
  {
    field: "email",
    headerName: "Email",
    sortable: false,
    width: 200,
  },
  {
    field: "access",
    headerName: "Access Level",
    width: 200,
    renderCell: ({ row }) =>
      row.access == "user" ? (
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: "10px",
              lineHeight: "30px",
              borderRadius: "20px",
              backgroundColor: (theme) =>
                tokens({ mode: theme.palette.mode }).greenAccent[600],
            }}
          >
            User
            <SecurityOutlinedIcon />
          </Box>
        </Box>
      ) : row.access == "admin" ? (
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: "10px",
              lineHeight: "30px",
              borderRadius: "20px",
              backgroundColor: (theme) =>
                tokens({ mode: theme.palette.mode }).greenAccent[700],
            }}
          >
            Admin
            <AdminPanelSettingsOutlinedIcon />
          </Box>
        </Box>
      ) : (
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: "10px",
              lineHeight: "30px",
              borderRadius: "20px",
              backgroundColor: (theme) =>
                tokens({ mode: theme.palette.mode }).blueAccent[600],
            }}
          >
            Manager
            <LockOpenOutlinedIcon />
          </Box>
        </Box>
      ),
  },
];
const Team = () => {
  return (
    <div>
      <Header title="Team" subtitle="Manage the team member" />
      <Table
        showToolbar={false}
        columns={columns}
        rows={mockDataTeam}
        pageSize={8}
      />
    </div>
  );
};

export default Team;
