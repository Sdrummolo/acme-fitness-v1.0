import React, { useEffect, useContext } from "react";
import { AppContext } from "../components/AppContext";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

import Pie from "../components/Pie";

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: "30px",
  },
}));

const Statistics = () => {
  const { setCurrPage } = useContext(AppContext);

  const classes = useStyles();

  // Update Navbar title
  useEffect(() => {
    setCurrPage("Statistics");
  });

  return (
    <Container>
      <Typography variant="h3" className={classes.header}>
        Daily Intake Levels
      </Typography>
      <Pie />
      <Typography variant="h3" className={classes.header}>
        BMI Progress
      </Typography>
    </Container>
  );
};

export default Statistics;
