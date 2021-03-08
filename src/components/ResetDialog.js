import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
} from "@material-ui/core";

const ResetDialog = ({ isOpen, handleState }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleState}
      disableBackdropClick
      disableEscapeKeyDown
    >
      <DialogTitle>Warning</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This will erease all your customization and data, returning everything
          to default
        </DialogContentText>
        <DialogActions>
          <Button onClick={handleState}>Cancel</Button>
          <Button color="secondary" onClick={handleState}>
            Ok
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default ResetDialog;
