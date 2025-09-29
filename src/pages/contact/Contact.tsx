import { Box } from "@mui/system";
import Header from "../../components/ui/Header";
import Table from "../../components/ui/Table";
import { mockDataContacts } from "../../data/mockData";
import type { GridColDef } from "@mui/x-data-grid";
interface ContactData {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  registrarId: number;
}

const columns: GridColDef<ContactData>[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
  },
  { field: "email", headerName: "Email", flex: 1 },
  {
    field: "age",
    headerName: "Age",

    headerAlign: "left",
    align: "left",
  },
  {
    field: "phone",
    headerName: "Phone Number",
    flex: 1,
  },
  { field: "address", headerName: "Address", flex: 1 },
  { field: "city", headerName: "City", flex: 1 },
  { field: "zipCode", headerName: "Zip Code", flex: 1 },
  { field: "registrarId", headerName: "Registrar ID", flex: 1 },
];

const Contact = () => {
  return (
    <Box>
      <Header
        title="CONTACT"
        subtitle="List of contacts for future reference"
      />
      <Table
        showToolbar={true}
        rows={mockDataContacts}
        columns={columns}
        pageSize={9}
      />
    </Box>
  );
};

export default Contact;
