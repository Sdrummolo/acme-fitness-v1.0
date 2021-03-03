import React, { useState, useContext } from "react";
import { AppContext } from "../components/AppContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/theme";

import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Welcome from "./Welcome";
import Home from "./Home";
import SearchFood from "./SearchFood";
import Statistics from "./Statistics";
import GymEquipment from "./GymEquipment";
import OurInstructors from "./OurInstructors";
import Settings from "./Settings";
import Food from "./Food";

const App = () => {
  const { isAuthenticated } = useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* Render navbar if user is authenticated */}
        {isAuthenticated ? (
          <>
            <Navbar toggleDrawer={toggleDrawer} />
            <Menu toggleDrawer={toggleDrawer} menuOpen={menuOpen} />
          </>
        ) : null}
        <Switch>
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/" component={Home} />
          <Route exact path="/search-food" component={SearchFood} />
          <Route exact path="/search-food/:id" component={Food} />
          <Route exact path="/statistics" component={Statistics} />
          <Route exact path="/gym-equipment" component={GymEquipment} />
          <Route exact path="/our-instructors" component={OurInstructors} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
