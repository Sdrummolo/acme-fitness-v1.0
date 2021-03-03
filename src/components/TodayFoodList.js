import React, { useContext } from "react";
import { AppContext } from "../components/AppContext";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  list: {
    borderRadius: "5px",
    backgroundColor: "#f6f6f6",
  },
  listItem: {
    display: "flex",
  },
  title: {
    width: "45%",
  },
  quantity: {
    width: "15%",
  },
  calories: {
    width: "35%",
  },
  remove: {
    width: "5%",
  },
});

const TodayFoodList = () => {
  const classes = useStyles();

  return (
    <List dense={true} className={classes.list}>
      <ListItem className={classes.listItem}>
        <ListItemText className={classes.title}>Description</ListItemText>
        <ListItemText className={classes.quantity}>0g</ListItemText>
        <ListItemText className={classes.calories}>0Kcal</ListItemText>
        <DeleteIcon color="secondary" />
      </ListItem>
      <Divider />
      <ListItem className={classes.listItem}>
        <ListItemText className={classes.title}>Description</ListItemText>
        <ListItemText className={classes.quantity}>0g</ListItemText>
        <ListItemText className={classes.calories}>0Kcal</ListItemText>
        <DeleteIcon color="secondary" />
      </ListItem>
      <Divider />
      <ListItem className={classes.listItem}>
        <ListItemText className={classes.title}>Description</ListItemText>
        <ListItemText className={classes.quantity}>0g</ListItemText>
        <ListItemText className={classes.calories}>0Kcal</ListItemText>
        <DeleteIcon color="secondary" />
      </ListItem>
    </List>
  );
};

export default TodayFoodList;
