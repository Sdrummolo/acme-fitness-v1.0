import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../components/AppContext";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import {
  Container,
  TextField,
  MenuItem,
  InputAdornment,
  Button,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import InfoDialog from "../components/InfoDialog";
import ResetDialog from "../components/ResetDialog";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "80%",
    margin: "auto",
    marginBottom: "100px",
  },
  formItem: {
    marginBottom: "10px",
  },
  submit: {
    margin: "20px 0",
  },
  forwardArrow: {
    marginLeft: "auto",
  },
  resetBtn: {
    width: "100%",
    marginTop: "20px",
  },
}));

const Settings = () => {
  const { setCurrPage } = useContext(AppContext);
  const [values, setValues] = useState({
    age: null,
    sex: null,
    weight: null,
    height: null,
    activity: null,
  });
  const [infoDialogState, setInfoDialogState] = useState(false);
  const [resetDialogState, setResetDialogState] = useState(false);

  // Handles form state
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setInfoDialogState(true);
  };

  const handleInfoDialog = () => {
    setInfoDialogState(!infoDialogState);
  };

  const handleResetDialog = () => {
    setResetDialogState(!resetDialogState);
  };

  const classes = useStyles();

  // Update Navbar title
  useEffect(() => {
    setCurrPage("Settings");
  });

  return (
    <Container>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          type="number"
          name="age"
          label="Age"
          required
          className={classes.formItem}
          onChange={handleChange}
          value={values.age}
        ></TextField>
        <TextField
          select
          name="sex"
          label="Sex"
          required
          className={classes.formItem}
          onChange={handleChange}
          value={values.sex}
        >
          <MenuItem key={"male"} value={"Male"}>
            Male
          </MenuItem>
          <MenuItem key={"female"} value={"Female"}>
            Female
          </MenuItem>
        </TextField>
        <TextField
          type="number"
          name="weight"
          label="Weight"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Kg</InputAdornment>
            ),
          }}
          className={classes.formItem}
          required
          onChange={handleChange}
          value={values.weight}
        ></TextField>
        <TextField
          type="number"
          name="height"
          label="Height"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Cm</InputAdornment>
            ),
          }}
          className={classes.formItem}
          required
          onChange={handleChange}
          value={values.height}
        ></TextField>
        <TextField
          select
          label="Activity"
          name="activity"
          required
          className={classes.formItem}
          onChange={handleChange}
          value={values.activity}
        >
          <MenuItem key={"none"} value={"none"}>
            Little/no exercise
          </MenuItem>
          <MenuItem key={"light"} value={"light"}>
            Light exercise
          </MenuItem>
          <MenuItem key={"moderate"} value={"moderate"}>
            Moderate exercise (3-5 days/wk)
          </MenuItem>
          <MenuItem key={"very active"} value={"very active"}>
            Very active (6-7 days/wk)
          </MenuItem>
          <MenuItem key={"extra active"} value={"extra active"}>
            Extra active (very active & physical job)
          </MenuItem>
        </TextField>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Change Information
        </Button>
      </form>

      <List>
        <Divider />
        <a target="_blank" href="https://www.acmefitness.com/about-us">
          <ListItem button>
            <ListItemText>About Us</ListItemText>
            <ListItemIcon>
              <ArrowForwardIosIcon
                style={{ fontSize: "small" }}
                className={classes.forwardArrow}
              />
            </ListItemIcon>
          </ListItem>
        </a>
        <Divider />
      </List>

      <Button
        variant="contained"
        className={classes.resetBtn}
        color="secondary"
        onClick={() => handleResetDialog()}
      >
        Reset App
      </Button>

      {/* Dialogs */}
      <InfoDialog isOpen={infoDialogState} handleState={handleInfoDialog} />
      <ResetDialog isOpen={resetDialogState} handleState={handleResetDialog} />
    </Container>
  );
};

export default Settings;
