import React, { useEffect, useContext } from "react";
import { AppContext } from "../components/AppContext";
import { Container, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Instructor from "../components/Instructor";

const useStyles = makeStyles((theme) => ({
  listContainer: {
    backgroundColor: "#fff",
    borderRadius: "5px",
  },
}));

const OurInstructors = () => {
  const { setCurrPage } = useContext(AppContext);
  const classes = useStyles();

  // Update Navbar title
  useEffect(() => {
    setCurrPage("Our Instructors");
  });

  return (
    <Container>
      <List className={classes.listContainer}>
        <Instructor />
        <Instructor />
        <Instructor />
        <Instructor />
        <Instructor />
        <Instructor />
      </List>
    </Container>
  );
};

export default OurInstructors;
