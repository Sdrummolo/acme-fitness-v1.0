import React, { useState, useContext } from "react";
import { AppContext } from "../components/AppContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/theme";

import ProtectedRoute from "../components/ProtectedRoute";
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

  const toggleDrawer = (state) => {
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
          <Route
            exact
            path="/welcome"
            render={() => (isAuthenticated ? <Redirect to="/" /> : <Welcome />)} // Redirect to Home if user is Logged In
          />
          <ProtectedRoute
            exact
            path="/"
            component={Home}
            isAuthenticated={isAuthenticated}
          />
          <ProtectedRoute
            exact
            path="/search-food"
            component={SearchFood}
            isAuthenticated={isAuthenticated}
          />
          <ProtectedRoute
            exact
            path="/search-food/:id"
            component={Food}
            isAuthenticated={isAuthenticated}
          />
          <ProtectedRoute
            exact
            path="/statistics"
            component={Statistics}
            isAuthenticated={isAuthenticated}
          />
          <ProtectedRoute
            exact
            path="/gym-equipment"
            component={GymEquipment}
            isAuthenticated={isAuthenticated}
          />
          <ProtectedRoute
            exact
            path="/our-instructors"
            component={OurInstructors}
            isAuthenticated={isAuthenticated}
          />
          <ProtectedRoute
            exact
            path="/settings"
            component={Settings}
            isAuthenticated={isAuthenticated}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
