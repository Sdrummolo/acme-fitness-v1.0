import React, { useState, useEffect, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  eatBtn: {
    width: "100%",
    padding: "8px 0",
    marginBottom: "20px",
    color: "#fff",
    backgroundColor: theme.palette.primary.light,
  },
  tableContainer: {
    marginBottom: "30px",
  },
  tableHead: {
    fontWeight: 600,
  },
}));

const Food = () => {
  const { setCurrPage } = useContext(AppContext);

  const [openDialog, setOpenDialog] = useState(false);
  const [quantity, setQuantity] = useState(null);
  const data = useLocation().state;
  let history = useHistory();
  const classes = useStyles();

  // Update Navbar title capitalizing the first letter
  useEffect(() => {
    setCurrPage(
      data.lowercaseDescription.charAt(0).toUpperCase() +
        data.lowercaseDescription.slice(1)
    );
  });

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = () => {
    handleDialog(); // Close modal
    history.push("/"); // Redirect to Home
  };

  return (
    <Container>
      <Typography variant="h5">Values per 100g</Typography>
      <TableContainer className={classes.tableContainer}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHead}>Name</TableCell>
              <TableCell className={classes.tableHead}>Amount</TableCell>
              <TableCell className={classes.tableHead}>Unit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.foodNutrients.map((nutrient, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{nutrient.nutrientName}</TableCell>
                  <TableCell>{nutrient.value}</TableCell>
                  <TableCell>{nutrient.unitName.toLowerCase()}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        onClick={handleDialog}
        className={classes.eatBtn}
      >
        Eat
      </Button>

      <Dialog open={openDialog} onClose={handleDialog}>
        <DialogTitle>Enter Quantity</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            placeholder="g"
            type="number"
            onChange={handleChange}
            value={quantity}
          />
          <DialogActions>
            <Button onClick={handleDialog} color="primary">
              Cancel
            </Button>
            <Button type="submit" onClick={handleSubmit}>
              Ok
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Food;
