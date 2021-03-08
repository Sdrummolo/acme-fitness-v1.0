import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  InputAdornment,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import logo from "../img/logo.png";

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    width: "200px",
  },
  heading: {
    marginTop: "50px",
    textAlign: "center",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "80%",
    margin: "auto",
  },
  formItem: {
    marginBottom: "10px",
  },
  submit: {
    backgroundColor: theme.palette.primary.main,
    marginTop: "50px",
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const Welcome = () => {
  const [values, setValues] = useState({
    age: null,
    sex: null,
    weight: null,
    height: null,
    activity: null,
  });
  const [openDialog, setOpenDialog] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  // Handles form state
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Handles submit
  const handleSubmit = (e) => {
    e.preventDefault();
    handleDialog();
  };

  // Handles dialog state
  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <Container>
      <div className={classes.logoContainer}>
        <img src={logo} alt="ACME Fitness" className={classes.logo} />
      </div>
      <Typography variant="h4" className={classes.heading}>
        Welcome
      </Typography>
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
        <Button type="submit" className={classes.submit}>
          Next
        </Button>
      </form>

      {/* Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleDialog}
        disableBackdropClick
        disableEscapeKeyDown
      >
        <DialogTitle>You're all set!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            We will personalize your experience based on your information
          </DialogContentText>
          <DialogActions>
            <Button onClick={() => history.push("/")}>Ok</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Welcome;
