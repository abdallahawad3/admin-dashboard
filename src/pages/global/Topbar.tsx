// filepath: d:\Admin Dashboard\src\pages\global\Topbar.tsx
import { Box, IconButton, useTheme } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import { useMediaQuery } from "@mui/system";

const Topbar = ({
  setToggle,
  toggle,
}: {
  setToggle: (toggle: boolean) => void;
  toggle: boolean;
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");
  const colors = tokens({ mode: theme.palette.mode });
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between">
      {/* SEARCH BAR */}
      <Box
        sx={{
          backgroundColor: colors.primary[400],
          borderRadius: "3px",
          padding: "0rem 1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        {isMobile && (
          <IconButton onClick={() => setToggle(!toggle)}>
            <MenuOutlinedIcon />
          </IconButton>
        )}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton onClick={colorMode.toggleDirection}>
          <LanguageIcon />
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
