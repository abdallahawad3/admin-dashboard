import { ResponsiveBar } from "@nivo/bar";
import { mockBarData } from "../../data/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Box } from "@mui/system";
import Header from "../../components/ui/Header";

const Bar = () => {
  const theme = useTheme();
  const colors = tokens({ mode: theme.palette.mode });
  return (
    <Box sx={{ height: "80vh" }}>
      <Header title="BAR CHART" subtitle="Simple Bar Chart" />
      <ResponsiveBar /* or Bar for fixed dimensions */
        data={mockBarData}
        indexBy="country"
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        theme={{
          text: {
            fontSize: 11,
            fill: colors.grey[100],
            outlineWidth: 0,
            outlineColor: "#190101",
          },
          tooltip: {
            container: {
              background: "#ffffff",
              color: "#333333",
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
              },
            },

            legend: {
              text: {
                fill: colors.grey[100],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
        }}
        colors={{ scheme: "category10" }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            translateX: 120,
            itemsSpacing: 3,
            itemWidth: 100,
            itemHeight: 16,
          },
        ]}
        axisBottom={{ legend: "country (indexBy)", legendOffset: 32 }}
        axisLeft={{ legend: "food", legendOffset: -40 }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        motionConfig="slow"
      />
    </Box>
  );
};

export default Bar;
