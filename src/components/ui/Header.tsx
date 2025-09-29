import { Box, useTheme } from "@mui/system";
import { tokens } from "../../theme";

interface IProps {
  title: string;
  subtitle: string;
}

const Header = ({ subtitle, title }: IProps) => {
  const theme = useTheme();
  const colors = tokens({ mode: theme.palette.mode });

  return (
    <div
      style={{
        marginBottom: "15px",
      }}
    >
      <Box
        component={"h1"}
        sx={{
          color: colors.primary,
          textDecoration: "uppercase",
          mb: "0px",
        }}
      >
        {title}
      </Box>
      <Box
        component={"p"}
        style={{
          color: colors.greenAccent[400],
          margin: "0px",
        }}
      >
        {subtitle}
      </Box>
    </div>
  );
};

export default Header;
