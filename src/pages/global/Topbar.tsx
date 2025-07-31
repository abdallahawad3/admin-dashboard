import { Box, useTheme, IconButton } from "@mui/material";
import { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens({ mode: theme.palette.mode });
  const coloMode = useContext(ColorModeContext);
  return (
    <Box display={"flex"} justifyContent={"space-between"} p={2}>
      {/* Search Bar First */}
      <Box display={"flex"} bgcolor={colors.primary[400]} borderRadius={"3px"}>
        <InputBase
          sx={{
            ml: 2,
            flex: 1,
          }}
          placeholder="Search"
        />
        <IconButton
          type="button"
          sx={{
            p: 1,
          }}
        >
          <SearchOutlinedIcon />
        </IconButton>
      </Box>

      {/* Icons */}

      <Box display={"flex"} justifyContent={"space-between"} gap={1}>
        <IconButton type="button" onClick={coloMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <>
              <LightModeOutlined />
            </>
          ) : (
            <>
              <DarkModeOutlined />
            </>
          )}
        </IconButton>
        <IconButton type="button">
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton type="button">
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton type="button">
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
