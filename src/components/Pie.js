import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ResponsivePie } from "@nivo/pie";

const useStyles = makeStyles({
  pieContainer: {
    height: "350px",
    width: "350px",
  },
});

const pieColors = ["#E7F69D", "#64C2A6", "#FEAE65", "#F66D43"];

const pieData = [
  {
    id: "proteins",
    label: "Proteins",
    value: 40,
  },
  {
    id: "carbohydrates",
    label: "Carbohydrates",
    value: 30,
  },
  {
    id: "fats",
    label: "Fats",
    value: 27,
  },
  {
    id: "vitamins",
    label: "Vitamins",
    value: 3,
  },
];

const Pie = () => {
  const classes = useStyles();

  return (
    <div className={classes.pieContainer}>
      <ResponsivePie
        data={pieData}
        margin={{ top: 40, right: 20, bottom: 80, left: 20 }}
        padAngle={0.7}
        cornerRadius={3}
        colors={pieColors}
        enableRadialLabels={false}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemWidth: 80,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Pie;
