import { Box } from "@mui/system";
import Header from "../../components/ui/Header";
import Table from "../../components/ui/Table";
import { mockDataInvoices } from "../../data/mockData";

const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "cost", headerName: "Cost", flex: 1 },
  { field: "phone", headerName: "Phone", flex: 1 },
  { field: "date", headerName: "Date", flex: 1 },
];
const Invoices = () => {
  return (
    <Box>
      <Header title="INVOICES" subtitle="List of Invoices" />
      <Table
        showToolbar={false}
        rows={mockDataInvoices}
        columns={columns}
        pageSize={9}
      />
    </Box>
  );
};

export default Invoices;
