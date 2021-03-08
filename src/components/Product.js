import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

import treadmill from "../img/treadmill.jpg";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    marginBottom: "15px",
    display: "flex",
    border: "1px solid #f6f6f6",
  },
  img: {
    width: "40%",
  },
  content: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f6f6f6",
  },
  rating: {
    marginTop: "auto",
    marginLeft: "auto",
  },
  viewDetails: {
    marginTop: "auto",
    marginLeft: "auto",
  },
}));

const Product = () => {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer}>
      <CardMedia
        image={treadmill}
        title="Treadmill"
        component="img"
        className={classes.img}
      />
      <CardContent className={classes.content}>
        <Typography variant="h5">Treadmill</Typography>
        <Rating
          name="read-only"
          value="4"
          readOnly
          className={classes.rating}
        />
        <a target="_blank" href="#" className={classes.viewDetails}>
          <Button variant="contained" color="primary">
            View Details
          </Button>
        </a>
      </CardContent>
    </Card>
  );
};

export default Product;
