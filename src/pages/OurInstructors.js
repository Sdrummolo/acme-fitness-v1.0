import React, { useEffect, useContext } from "react";
import { AppContext } from "../components/AppContext";
import { Container, List } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

import Instructor from "../components/Instructor";

const OurInstructors = () => {
  const { setCurrPage } = useContext(AppContext);

  // Update Navbar title
  useEffect(() => {
    setCurrPage("Our Instructors");
  });

  return (
    <Container>
      <List>
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
