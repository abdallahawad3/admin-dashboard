import { Box } from "@mui/system";
import Header from "../../components/ui/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import { mockGeographyData } from "../../data/mockData";
import { geoFeatures } from "../../data/mockGeoFeatures";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens({ mode: theme.palette.mode });
  return (
    <Box sx={{ height: "80vh" }}>
      <Header title="GEOGRAPHY" subtitle="Geography Chart" />

      <Box
        sx={{
          height: "80vh",
          border: `1px solid ${colors.grey[100]}`,
          p: 2,
          borderRadius: "8px",
        }}
      >
        <ResponsiveChoropleth
          data={mockGeographyData}
          features={geoFeatures.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors="blues"
          domain={[0, 1000000]}
          unknownColor=""
          label="properties.name"
          valueFormat=".2s"
          graticuleLineColor={colors.grey[100]}
          projectionScale={150}
          theme={{
            text: {
              fill: colors.grey[100],
            },
            axis: {
              domain: {
                line: { stroke: colors.grey[100] },
              },
              legend: {
                text: { fill: colors.grey[100] },
              },
              ticks: {
                line: { stroke: colors.grey[100], strokeWidth: 1 },
                text: { fill: colors.grey[100] },
              },
            },
            tooltip: {
              container: {
                color: colors.primary[500],
              },
            },
            legends: {
              text: {
                fill: colors.grey[100],
                fontSize: 12,
              },
              ticks: {
                line: { stroke: colors.grey[100], strokeWidth: 1 },
                text: { fill: colors.grey[100] },
              },
            },
          }}
          borderWidth={0.5}
          borderColor={colors.grey[100]}
          legends={[
            {
              anchor: "bottom-left",
              direction: "column",
              justify: true,
              translateX: 20,
              translateY: -100,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 18,
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Geography;
