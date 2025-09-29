/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import {
  DataGrid,
  GridFilterListIcon,
  GridViewColumnIcon,
  type GridColDef,
} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import {
  Toolbar,
  ToolbarButton,
  ColumnsPanelTrigger,
  FilterPanelTrigger,
  ExportCsv,
  ExportPrint,
  QuickFilter,
  QuickFilterControl,
  QuickFilterClear,
  QuickFilterTrigger,
} from "@mui/x-data-grid";
import { useRef, useState } from "react";
import {
  Badge,
  Divider,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
type OwnerState = {
  expanded: boolean;
};

const StyledQuickFilter = styled(QuickFilter)({
  display: "grid",
  alignItems: "center",
});

const StyledToolbarButton = styled(ToolbarButton)<{ ownerState: OwnerState }>(
  ({ ownerState }) => ({
    gridArea: "1 / 1",
    width: "min-content",
    height: "min-content",
    zIndex: 1,
    opacity: ownerState.expanded ? 0 : 1,
    pointerEvents: ownerState.expanded ? "none" : "auto",
  })
);

const StyledTextField = styled(TextField)<{
  ownerState: OwnerState;
}>(({ ownerState }) => ({
  gridArea: "1 / 1",
  overflowX: "clip",
  width: ownerState.expanded ? 260 : "var(--trigger-width)",
  opacity: ownerState.expanded ? 1 : 0,
  // transition: theme.transitions.create(["width", "opacity"]),
}));

function CustomToolbar() {
  const [exportMenuOpen, setExportMenuOpen] = useState(false);
  const exportMenuTriggerRef = useRef<HTMLButtonElement>(null);
  const theme = useTheme();
  const colors = tokens({ mode: theme.palette.mode });
  return (
    <Toolbar
      style={{
        backgroundColor: colors.blueAccent[600],
      }}
    >
      <Typography fontWeight="medium" sx={{ flex: 1, mx: 0.5 }}>
        Toolbar
      </Typography>

      <Tooltip
        sx={{
          "& .muiltr-gerhi6-MuiDataGrid-panelContent": {
            backgroundColor: `${colors.primary[100]} !important`,
          },
        }}
        title="Columns"
      >
        <ColumnsPanelTrigger render={<ToolbarButton />}>
          <GridViewColumnIcon fontSize="small" />
        </ColumnsPanelTrigger>
      </Tooltip>

      <Tooltip
        title="Filters"
        sx={{
          "& .MuiDataGrid-panelContent.muiltr-gem2ut-MuiDataGrid-panelContent":
            {
              backgroundColor: `${colors.primary[100]} !important`,
            },
        }}
      >
        <FilterPanelTrigger
          render={(props, state) => (
            <ToolbarButton {...props} color="default">
              <Badge
                badgeContent={state.filterCount}
                color="primary"
                variant="dot"
              >
                <GridFilterListIcon fontSize="small" />
              </Badge>
            </ToolbarButton>
          )}
        />
      </Tooltip>

      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ mx: 0.5 }}
      />

      <Tooltip title="Export">
        <ToolbarButton
          ref={exportMenuTriggerRef}
          id="export-menu-trigger"
          aria-controls="export-menu"
          aria-haspopup="true"
          aria-expanded={exportMenuOpen ? "true" : undefined}
          onClick={() => setExportMenuOpen(true)}
        >
          <FileDownloadIcon fontSize="small" />
        </ToolbarButton>
      </Tooltip>

      <Menu
        sx={{
          backdropFilter: "blur(8px)",
          backgroundColor: "#00000013",
        }}
        id="export-menu"
        anchorEl={exportMenuTriggerRef.current}
        open={exportMenuOpen}
        onClose={() => setExportMenuOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          list: {
            "aria-labelledby": "export-menu-trigger",
          },
        }}
      >
        <ExportPrint
          render={<MenuItem />}
          onClick={() => setExportMenuOpen(false)}
        >
          Print
        </ExportPrint>
        <ExportCsv
          render={<MenuItem />}
          onClick={() => setExportMenuOpen(false)}
        >
          Download as CSV
        </ExportCsv>
        {/* Available to MUI X Premium users */}
        {/* <ExportExcel render={<MenuItem />}>
          Download as Excel
        </ExportExcel> */}
      </Menu>

      <StyledQuickFilter>
        <QuickFilterTrigger
          render={(triggerProps, state) => (
            <Tooltip title="Search" enterDelay={0}>
              <StyledToolbarButton
                {...triggerProps}
                ownerState={{ expanded: state.expanded }}
                color="default"
                aria-disabled={state.expanded}
              >
                <SearchIcon fontSize="small" />
              </StyledToolbarButton>
            </Tooltip>
          )}
        />
        <QuickFilterControl
          render={({ ref, ...controlProps }, state) => (
            <StyledTextField
              {...controlProps}
              ownerState={{ expanded: state.expanded }}
              inputRef={ref}
              aria-label="Search"
              placeholder="Search..."
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                  endAdornment: state.value ? (
                    <InputAdornment position="end">
                      <QuickFilterClear
                        edge="end"
                        size="small"
                        aria-label="Clear search"
                        material={{ sx: { marginRight: -0.75 } }}
                      >
                        <CancelIcon fontSize="small" />
                      </QuickFilterClear>
                    </InputAdornment>
                  ) : null,
                  ...controlProps.slotProps?.input,
                },
                ...controlProps.slotProps,
              }}
            />
          )}
        />
      </StyledQuickFilter>
    </Toolbar>
  );
}

export type RowType = Record<string, any>;

interface IProps {
  rows: RowType[];
  columns: GridColDef<any>[];
  pageSize: number;
  showToolbar: boolean;
}

export default function Table({
  columns,
  rows,
  pageSize,
  showToolbar,
}: IProps) {
  const theme = useTheme();
  const colors = tokens({ mode: theme.palette.mode });

  return (
    <Box
      sx={{
        height: "80vh", // Set a fixed height or use "100vh" for full viewport
        width: "100%",
        "& .MuiDataGrid-root": {
          backgroundColor: colors.primary[800],
        },
        "& .MuiDataGrid-cell": {
          color: colors.grey[100],
          borderBottom: `1px solid ${colors.primary[200]}`,
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
          color: colors.grey[100],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[500]} !important`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.grey[100]} !important`,
        },
        "& .MuiDataGrid-row": {
          "&:hover": {
            backgroundColor: `${colors.primary[400]} !important`,
          },
          "&.Mui-selected": {
            backgroundColor: `${colors.greenAccent[800]} !important`,
            "&:hover": {
              backgroundColor: `${colors.greenAccent[700]} !important`,
            },
          },
        },
        "& .MuiDataGrid-sortIcon": {
          color: colors.grey[100],
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pageSize,
            },
          },
        }}
        pageSizeOptions={[pageSize]}
        checkboxSelection={true}
        disableRowSelectionOnClick
        // Additional styling props
        sx={{
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
            fontSize: "1rem",
          },

          "& .MuiDataGrid-cell:focus": {
            outline: `2px solid ${colors.greenAccent[500]}`,
            outlineOffset: "-2px",
          },
          "& .MuiDataGrid-row:nth-of-type(even)": {
            backgroundColor: colors.primary[600],
          },
          "& .MuiDataGrid-row:nth-of-type(odd)": {
            backgroundColor: colors.primary[400],
          },
        }}
        slots={{ toolbar: CustomToolbar }}
        showToolbar={showToolbar}
      />
    </Box>
  );
}
