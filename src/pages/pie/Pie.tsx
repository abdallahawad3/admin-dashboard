import { Box, useTheme } from "@mui/system";
import Header from "../../components/ui/Header";
import { ResponsivePie } from "@nivo/pie";
import { mockPieData } from "../../data/mockData";
import { tokens } from "../../theme";

const Pie = () => {
  const theme = useTheme();
  const colors = tokens({ mode: theme.palette.mode });
  return (
    <Box
      sx={{
        height: "80vh",
      }}
    >
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <ResponsivePie
        data={mockPieData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.grey[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
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
        }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            symbolShape: "circle",
          },
        ]}
      />
    </Box>
  );
};

export default Pie;
