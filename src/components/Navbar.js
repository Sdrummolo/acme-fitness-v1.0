import React, { useContext } from "react";
import { AppContext } from "../components/AppContext";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles({
  appBar: {
    marginBottom: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  white: {
    color: "#fff",
  },
});

const Navbar = ({ toggleDrawer }) => {
  const { currPage } = useContext(AppContext);
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {useLocation().pathname == "/search-food/1" ? ( // Will have to find a way to make the url dynamic
          <Link to="/search-food">
            <ArrowBackIosIcon className={classes.white} />
          </Link>
        ) : null}
        <Typography variant="h6" edge="center" className={classes.white}>
          {currPage}
        </Typography>
        <IconButton edge="end" onClick={toggleDrawer} className={classes.white}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
