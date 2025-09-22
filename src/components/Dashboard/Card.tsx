import { Box, flex, useTheme } from "@mui/system";
import type { ReactNode } from "react";
import { tokens } from "../../theme";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { CircularProgress, Typography } from "@mui/material";
import ProgressCircle from "../ui/ProgressCircle";
interface IProps {
  number: string;
  text: string;
  percentage: string;
  icon: ReactNode;
}
const Card = () => {
  const theme = useTheme();
  const colors = tokens({ mode: theme.palette.mode });
  return (
    <Box
      sx={{
        background: colors.primary[400],
        padding: "25px",
        borderRadius: "5px",
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        mt: "15px",
      }}
    >
      <Box>
        <EmailOutlinedIcon
          sx={{
            color: colors.greenAccent[400],
          }}
        />

        <Typography component={"p"}>12,356</Typography>
        <Typography component={"p"} color={colors.greenAccent[400]}>
          Email Sent
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <ProgressCircle progress={0.75} size={40} />
        <Typography
          sx={{
            color: colors.greenAccent[600],
            fontStyle: "italic",
          }}
        >
          +14%
        </Typography>
      </Box>
    </Box>
  );
};

export default Card;
