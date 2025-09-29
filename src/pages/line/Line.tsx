import { Box } from "@mui/system";
import Header from "../../components/ui/Header";
import { ResponsiveLine } from "@nivo/line";
import { mockLineData } from "../../data/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Line = () => {
  const theme = useTheme();
  const colors = tokens({ mode: theme.palette.mode });

  return (
    <Box
      sx={{
        height: "80vh",
      }}
    >
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <ResponsiveLine /* or Line for fixed dimensions */
        data={mockLineData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        theme={{
          text: {
            fontSize: 11,
            fill: colors.grey[100],
          },
          legends: {
            text: {
              fontSize: 11,
              fill: colors.grey[100],
            },
          },
          tooltip: {
            container: {
              color: colors.primary[500],
            },
          },
          axis: {
            ticks: {
              text: {
                fontSize: 11,
                fill: colors.grey[100],
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: colors.grey[100],
              },
            },
          },
        }}
        curve="linear"
        axisBottom={{ legend: "transportation", legendOffset: 36 }}
        axisLeft={{ legend: "count", legendOffset: -40 }}
        enableGridX={false}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "seriesColor" }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 22,
            symbolShape: "circle",
            symbolSize: 12,
          },
        ]}
        isInteractive={true}
      />
    </Box>
  );
};

export default Line;
