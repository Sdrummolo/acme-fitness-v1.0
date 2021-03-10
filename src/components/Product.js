import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    marginBottom: "15px",
    display: "flex",
    border: "1px solid #f6f6f6",
  },
  img: {
    width: "40%",
    maxHeight: "150px",
  },
  content: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
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

const Product = ({ img, title }) => {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer}>
      <CardMedia
        image={img}
        title="Treadmill"
        component="img"
        className={classes.img}
      />
      <CardContent className={classes.content}>
        <Typography variant="h5">{title}</Typography>
        <Rating
          name="read-only"
          value="4"
          readOnly
          className={classes.rating}
        />
        <a
          rel="noreferrer"
          target="_blank"
          href="#"
          className={classes.viewDetails}
        >
          <Button variant="contained" color="primary">
            View Details
          </Button>
        </a>
      </CardContent>
    </Card>
  );
};

export default Product;
