import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../components/AppContext";
import { Link, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const data = {
  fdcId: 543985,
  description: "COOKIE",
  lowercaseDescription: "cookie",
  dataType: "Branded",
  gtinUpc: "728498045005",
  publishedDate: "2019-04-01",
  brandOwner: "THE BROWNIE BAKER",
  ingredients:
    "ENRICHED FLOUR (BLEACHED WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, REDUCED IRON, THIAMIN MONONITRATE, RIBOFLAVIN, FOLIC ACID), SUGAR, BITTERSWEET CHOCOLATE CHIPS (UNSWEETENED CHOCOLATE, SUGAR, SUNFLOWER LECITHIN, VANILLA), BUTTER (PASTEURIZED CREAM (MILK), SALT), WHOLE EGGS, CORN SYRUP, CONTAINS 2% OR LESS OF: DEXTROSE, NATURAL FLAVOR (VANILLA), SALT, LEAVENING (SODIUM BICARBONATE, SODIUM ACID PYROPHOSPHATE, CORN STARCH, MONOCALCIUM PHOSPHATE)",
  allHighlightFields: "",
  score: 670.05,
  foodNutrients: [
    {
      nutrientId: 1003,
      nutrientName: "Protein",
      nutrientNumber: "203",
      unitName: "G",
      derivationCode: "LCCS",
      derivationDescription: "Calculated from value per serving size measure",
      value: 6.19,
    },
    {
      nutrientId: 1004,
      nutrientName: "Total lipid (fat)",
      nutrientNumber: "204",
      unitName: "G",
      derivationCode: "LCCS",
      derivationDescription: "Calculated from value per serving size measure",
      value: 18.6,
    },
    {
      nutrientId: 1005,
      nutrientName: "Carbohydrate, by difference",
      nutrientNumber: "205",
      unitName: "G",
      derivationCode: "LCCS",
      derivationDescription: "Calculated from value per serving size measure",
      value: 60.2,
    },
    {
      nutrientId: 1008,
      nutrientName: "Energy",
      nutrientNumber: "208",
      unitName: "KCAL",
      derivationCode: "LCCS",
      derivationDescription: "Calculated from value per serving size measure",
      value: 416,
    },
    {
      nutrientId: 2000,
      nutrientName: "Sugars, total including NLEA",
      nutrientNumber: "269",
      unitName: "G",
      derivationCode: "LCCS",
      derivationDescription: "Calculated from value per serving size measure",
      value: 30.1,
    },
    {
      nutrientId: 1079,
      nutrientName: "Fiber, total dietary",
      nutrientNumber: "291",
      unitName: "G",
      derivationCode: "LCCS",
      derivationDescription: "Calculated from value per serving size measure",
      value: 2.7,
    },
    {
      nutrientId: 1087,
      nutrientName: "Calcium, Ca",
      nutrientNumber: "301",
      unitName: "MG",
      derivationCode: "LCCS",
      derivationDescription: "Calculated from value per serving size measure",
      value: 27.0,
    },
    {
      nutrientId: 1089,
      nutrientName: "Iron, Fe",
      nutrientNumber: "303",
      unitName: "MG",
      derivationCode: "LCCS",
      derivationDescription: "Calculated from value per serving size measure",
      value: 2.39,
    },
    {
      nutrientId: 1092,
      nutrientName: "Potassium, K",
      nutrientNumber: "306",
      unitName: "MG",
      derivationCode: "LCCS",
      derivationDescription: "Calculated from value per serving size measure",
      value: 106,
    },
    {
      nutrientId: 1093,
      nutrientName: "Sodium, Na",
      nutrientNumber: "307",
      unitName: "MG",
      derivationCode: "LCCS",
      derivationDescription: "Calculated from value per serving size measure",
      value: 389,
    },
    {
      nutrientId: 1235,
      nutrientName: "Sugars, added",
      nutrientNumber: "539",
      unitName: "G",
      derivationCode: "LCCS",
      derivationDescription: "Calculated from value per serving size measure",
      value: 29.2,
    },
    {
      nutrientId: 1253,
      nutrientName: "Cholesterol",
      nutrientNumber: "601",
      unitName: "MG",
      derivationCode: "LCCS",
      derivationDescription: "Calculated from value per serving size measure",
      value: 75.0,
    },
    {
      nutrientId: 1257,
      nutrientName: "Fatty acids, total trans",
      nutrientNumber: "605",
      unitName: "G",
      derivationCode: "LCCS",
      derivationDescription: "Calculated from value per serving size measure",
      value: 0.0,
    },
    {
      nutrientId: 1258,
      nutrientName: "Fatty acids, total saturated",
      nutrientNumber: "606",
      unitName: "G",
      derivationCode: "LCCS",
      derivationDescription: "Calculated from value per serving size measure",
      value: 10.6,
    },
  ],
};

const useStyles = makeStyles({
  form: {},
});

const SearchFood = () => {
  const { setCurrPage } = useContext(AppContext);
  const [input, setInput] = useState("cookie");

  const classes = useStyles();

  // Update Navbar title
  useEffect(() => {
    setCurrPage("Search Food");
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          placeholder={"Type food here"}
          onChange={handleChange}
          value={input}
        />
      </form>
      <List>
        <Link
          to={{
            pathname: `/search-food/1`,
            state: data,
          }}
        >
          <ListItem button>
            <ListItemText>cookie</ListItemText>
            <ArrowForwardIosIcon
              style={{ fontSize: "small", color: "#000" }}
              edge="end"
            />
          </ListItem>
        </Link>
      </List>
    </Container>
  );
};

export default SearchFood;
