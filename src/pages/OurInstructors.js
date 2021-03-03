import React, { useEffect, useContext } from "react";
import { AppContext } from "../components/AppContext";

const OurInstructors = () => {
  const { setCurrPage } = useContext(AppContext);

  // Update Navbar title
  useEffect(() => {
    setCurrPage("Our Instructors");
  });

  return "Our Instructors";
};

export default OurInstructors;
