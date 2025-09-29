// // Alternative AccessLevel component using Chip
// const AccessLevelChip = ({ access }: { access: string }) => {
//   const theme = useTheme();
//   const colors = tokens({ mode: theme.palette.mode });

//   const getAccessConfig = (accessLevel: string) => {
//     switch (accessLevel.toLowerCase()) {
//       case "admin":
//         return {
//           icon: <AdminPanelSettingsOutlinedIcon />,
//           color: colors.greenAccent[600],
//           backgroundColor: colors.greenAccent[700],
//           label: "Admin"
//         };
//       case "manager":
//         return {
//           icon: <SecurityOutlinedIcon />,
//           color: colors.blueAccent[600],
//           backgroundColor: colors.blueAccent[700],
//           label: "Manager"
//         };
//       case "user":
//         return {
//           icon: <LockOpenOutlinedIcon />,
//           color: colors.grey[600],
//           backgroundColor: colors.grey[700],
//           label: "User"
//         };
//       default:
//         return {
//           icon: <LockOpenOutlinedIcon />,
//           color: colors.grey[600],
//           backgroundColor: colors.grey[700],
//           label: "User"
//         };
//     }
//   };

//   const config = getAccessConfig(access);

//   return (
//     <Chip
//       icon={config.icon}
//       label={config.label}
//       size="small"
//       sx={{
//         backgroundColor: config.backgroundColor,
//         color: config.color,
//         fontWeight: "bold",
//         "& .MuiChip-icon": {
//           color: config.color,
//         },
//       }}
//     />
//   );
// };
