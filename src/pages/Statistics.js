import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../components/AppContext";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Button } from "@material-ui/core";
import BMILine from "../components/BMILine";
import BMIModal from "../components/BMIModal";

import Pie from "../components/Pie";

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: "30px",
  },
  BMIBtn: {
    width: "100%",
  },
}));

const Statistics = () => {
  const { setCurrPage } = useContext(AppContext);
  const [BMIDialogState, setBMIDialogState] = useState(false);

  const handleBMIDialog = () => {
    setBMIDialogState(!BMIDialogState);
  };

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
      <BMILine />
      <Button
        variant="contained"
        className={classes.BMIBtn}
        color="primary"
        onClick={handleBMIDialog}
      >
        Take BMI
      </Button>
      <BMIModal isOpen={BMIDialogState} handleDialog={handleBMIDialog} />
    </Container>
  );
};

export default Statistics;
