import { Button, Grid, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Card from "../../components/Dashboard/Card";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens({ mode: theme.palette.mode });
  return (
    <Box sx={{ paddingBlock: "20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h1"
            textTransform={"uppercase"}
            fontWeight={"bold"}
            fontSize={"2rem"}
          >
            Dashboard
          </Typography>
          <Typography
            component={"p"}
            sx={{
              fontSize: "1rem",
              color: colors.greenAccent[500],
              marginTop: "8px",
            }}
          >
            Welcome To The Dashboard
          </Typography>
        </Box>
        <Button
          startIcon={<DownloadOutlinedIcon />}
          variant="contained"
          sx={{
            backgroundColor: colors.blueAccent[600],
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: colors.blueAccent[700],
            },
          }}
        >
          Download Reports
        </Button>
      </Box>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <Card />
        </Grid>
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <Card />
        </Grid>
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <Card />
        </Grid>
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <Card />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
