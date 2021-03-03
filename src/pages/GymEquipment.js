import React, { useEffect, useContext } from "react";
import { AppContext } from "../components/AppContext";

const GymEquipment = () => {
  const { setCurrPage } = useContext(AppContext);

  // Update Navbar title
  useEffect(() => {
    setCurrPage("Gym Equipment");
  });
  return "Gym Equipment";
};

export default GymEquipment;
