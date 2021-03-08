import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "BMI",
    color: "hsl(327, 70%, 50%)",
    data: [
      {
        x: "8/2/2021",
        y: 22,
      },
      {
        x: "18/2/2021",
        y: 23,
      },
      {
        x: "28/2/2021",
        y: 21,
      },
      {
        x: "8/3/2021",
        y: 24,
      },
    ],
  },
];

const useStyles = makeStyles({
  lineContainer: {
    height: "250px",
    width: "350px",
    margin: "auto",
    marginBottom: "20px",
  },
});

const BMILine = () => {
  const classes = useStyles();

  return (
    <div className={classes.lineContainer}>
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 35, bottom: 30, left: 35 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Dates",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "BMI",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
      />
    </div>
  );
};

export default BMILine;
