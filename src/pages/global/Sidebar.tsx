import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Box, useTheme, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const menuItems = [
  {
    title: "Dashboard",
    icon: <HomeOutlinedIcon />,
    to: "/",
  },
  {
    title: "Manage Team",
    icon: <PeopleOutlinedIcon />,
    defaultOpen: false,
    children: [
      {
        title: "Team",
        icon: <PeopleOutlinedIcon />,
        to: "/team",
      },
      {
        title: "Contacts",
        icon: <ContactsOutlinedIcon />,
        to: "/contacts",
      },
    ],
  },
  {
    title: "Profile Form",
    icon: <PersonOutlinedIcon />,
    defaultOpen: true,
    children: [
      {
        title: "Calendar",
        icon: <CalendarTodayOutlinedIcon />,
        to: "/calendar",
      },
    ],
  },

  {
    title: "Charts",
    icon: <BarChartOutlinedIcon />,
    defaultOpen: true,
    children: [
      {
        title: "Bar Chart",
        icon: <BarChartOutlinedIcon />,
        to: "/bar",
      },
      {
        title: "Pie Chart",
        icon: <PieChartOutlineOutlinedIcon />,
        to: "/pie",
      },
      {
        title: "Line Chart",
        icon: <TimelineOutlinedIcon />,
        to: "/line",
      },
      {
        title: "Geography Chart",
        icon: <MapOutlinedIcon />,
        to: "/geography",
      },
    ],
  },
];
const MySidebar = ({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}) => {
  const theme = useTheme();
  const colors = tokens({ mode: theme.palette.mode });
  const colorMode = useContext(ColorModeContext);
  const [collapsed, setCollapsed] = useState(false);

  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box sx={{}}>
      <Sidebar
        collapsed={collapsed}
        breakPoint="md"
        role="navigation"
        toggled={toggle}
        onBackdropClick={() => setToggle(false)}
        rtl={colorMode.direction === "rtl"}
        rootStyles={{
          background: colors.primary[400],
          border: `none !important`,
          [`.${sidebarClasses.container}`]: {
            backgroundColor: colors.primary[400],
            color: colors.grey[100],
            minHeight: "100vh",
          },
        }}
      >
        <Box
          sx={{
            padding: "12px 16px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          {collapsed ? (
            <IconButton onClick={() => setCollapsed(!collapsed)}>
              <MenuOutlinedIcon />
            </IconButton>
          ) : (
            <>
              <Typography
                sx={{
                  fontSize: "16px",
                  textTransform: "uppercase",
                  fontWeight: "normal",
                }}
                variant="h6"
              >
                Admins
              </Typography>
              <IconButton>
                <MenuOutlinedIcon
                  onClick={() => setCollapsed(!collapsed)}
                  sx={{ color: colors.grey[200] }}
                />
              </IconButton>
            </>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "16px",
          }}
          role="presentation"
        >
          <Box>
            <img
              src="/images/avatar.svg"
              alt="Sidebar Avatar"
              style={{ width: 60, height: 60, borderRadius: "50%" }}
            />
          </Box>
          <Box mt={1}>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                  md: toggle ? "18px" : "16px",
                },
              }}
            >
              Admin Name
            </Typography>
          </Box>
        </Box>
        <Menu
          menuItemStyles={{
            button: ({ level, active }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  backgroundColor: active
                    ? `${colors.blueAccent[100]} !important`
                    : undefined,
                  color: active
                    ? `${colors.blueAccent[500]} !important`
                    : colors.grey[200],
                };
            },
          }}
          rootStyles={{
            [`.${menuClasses.icon}`]: {
              transition: "color 0.4s",
            },
            [`.${menuClasses.button}:hover .${menuClasses.icon}`]: {
              color: `${colors.blueAccent[500]} !important`,
              "@keyframes iconBounce": {
                "0%": { transform: "rotate(0)" },
                "50%": { transform: "rotate(10deg)" },
                "75%": { transform: "rotate(-10deg)" },
                "100%": { transform: "rotate(0)" },
              },
              animation: "iconBounce 0.4s linear",
            },
            [`.${menuClasses.button}:hover .${menuClasses.label}`]: {
              color: `${colors.blueAccent[500]} !important`,
            },
            ["." + menuClasses.button]: {
              background: colors.primary[400],
              "&:hover": {
                background:
                  theme.palette.mode === "dark"
                    ? colors.primary[500]
                    : colors.primary[900],
              },
            },
          }}
        >
          {menuItems.map((item) => (
            <Box key={item.title}>
              {item.children ? (
                <SubMenu
                  label={item.title}
                  icon={item.icon}
                  defaultOpen={item.defaultOpen ? true : undefined}
                  style={{
                    color:
                      selected === item.title
                        ? colors.blueAccent[500]
                        : colors.grey[200],
                  }}
                >
                  {item.children.map((subItem) => (
                    <RenderMenuItem
                      key={subItem.title}
                      title={subItem.title}
                      to={subItem.to}
                      icon={subItem.icon}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  ))}
                </SubMenu>
              ) : (
                <RenderMenuItem
                  title={item.title}
                  to={item.to}
                  icon={item.icon}
                  selected={selected}
                  setSelected={setSelected}
                />
              )}
            </Box>
          ))}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MySidebar;

const RenderMenuItem = ({
  title,
  to,
  icon,
  selected,
  setSelected,
}: {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: (title: string) => void;
}) => {
  const theme = useTheme();
  const colors = tokens({ mode: theme.palette.mode });

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: selected === title ? colors.blueAccent[500] : colors.grey[200],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      {title}
    </MenuItem>
  );
};
