import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialog: {
    width: "300px",
    margin: "auto",
  },
  textField: {
    marginBottom: "20px",
  },
}));

const BMIDialog = ({ isOpen, handleDialog }) => {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);

  const classes = useStyles();

  const handleWeight = (e) => {
    setWeight(Number(e.target.value));
  };

  const handleHeight = (e) => {
    setHeight(Number(e.target.value));
  };

  const handleSubmit = () => {
    handleDialog();
  };

  return (
    <Dialog open={isOpen} className={classes.dialog}>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            fullWidth
            required
            placeholder="Weight (Kg)"
            type="number"
            className={classes.textField}
            onChange={handleWeight}
            value={weight}
          />
          <TextField
            autoFocus
            fullWidth
            required
            placeholder="Height (Cm)"
            type="number"
            onChange={handleHeight}
            value={height}
          />
          <DialogActions>
            <Button onClick={handleDialog}>Cancel</Button>
            <Button type="submit" color="primary">
              OK
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BMIDialog;
