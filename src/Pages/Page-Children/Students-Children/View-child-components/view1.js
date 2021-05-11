import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import VisibilityIcon from "@material-ui/icons/Visibility";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const View1 = ({ data, prevStep, nextStep }) => {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <div>
      <div>
        <Button onClick={handleClickOpen}>
          <VisibilityIcon />
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {data.fullname}
              <Button onClick={nextStep} color="primary">
                Next
              </Button>
              <Button onClick={nextStep} color="primary">
                Next
              </Button>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Exit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default View1;
