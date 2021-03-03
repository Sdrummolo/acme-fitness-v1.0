import React, { useEffect, useContext } from "react";
import { AppContext } from "../components/AppContext";

const Settings = () => {
  const { setCurrPage } = useContext(AppContext);

  // Update Navbar title
  useEffect(() => {
    setCurrPage("Settings");
  });

  return "Settings";
};

export default Settings;
