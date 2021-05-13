import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  grid: {
    padding: "30px",
    marging: "40",
  },
  listItemstyle: {
    marginLeft: "100px",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function View({ data }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <VisibilityIcon />
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {"Organization name"}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Ok
            </Button>
          </Toolbar>
        </AppBar>

        <List className={classes.grid}>
          <ListItem button className={classes.listItemstyle}>
            <ListItemText primary="Student unique ID" secondary={data._id} />
          </ListItem>
          <Divider />
          <ListItem button className={classes.listItemstyle}>
            <ListItemText
              primary="Full name"
              secondary={`${data.firstname} ${data.lastname} ${data.surname}`}
            />
          </ListItem>
          <Divider />
          <ListItem className={classes.listItemstyle} button>
            <ListItemText primary="Class" secondary={data.class} />
          </ListItem>

          <Divider />

          <ListItem className={classes.listItemstyle} button>
            <ListItemText primary="Roll number" secondary={data.rollNumber} />
          </ListItem>
          <Divider />
          <ListItem className={classes.listItemstyle} button>
            <ListItemText primary="Address" secondary={data.address} />
          </ListItem>

          <Divider />

          <ListItem className={classes.listItemstyle} button>
            <ListItemText
              primary="Date of admission:"
              secondary={data.admissionDate}
            />
          </ListItem>

          <Divider />
          <ListItem className={classes.listItemstyle} button>
            <ListItemText primary="Age of student" secondary={data.age} />
          </ListItem>
          <Divider />
          <ListItem className={classes.listItemstyle} button>
            <ListItemText primary="Email address" secondary={data.email} />
          </ListItem>

          <Divider />

          <ListItem className={classes.listItemstyle} button>
            <ListItemText primary="City" secondary={data.city} />
          </ListItem>
          <Divider />
          <ListItem className={classes.listItemstyle} button>
            <ListItemText primary="Address" secondary={data.address} />
          </ListItem>
          <Divider />
          <ListItem className={classes.listItemstyle} button>
            <ListItemText
              primary="All teachers assigned"
              secondary={data.teacherAssigned}
            />
          </ListItem>

          <Divider />
        </List>
      </Dialog>
    </div>
  );
}

// CASH: true
// ​​
// GooglePay: true
// ​​
// IMPS: true
// ​​
// NEFT: true
// ​​
// PhonePe: false
// ​​
// __v: 0
// ​​

// ​​

// ​​

// ​​
// country: "String"
// ​​
// courseCompletion: false
// ​​

// ​​

// ​​
// listening: false
// ​​
// paymentDue: 10000
// ​​
// paymentReceived: 15000
// ​​
// pinCode: "String"
// ​​
// reading: true
// ​​

// ​​
// speaking: true
// ​​

// ​​
// textarea: "String"
// ​​
// totalPayment: 25000
// ​​
// writing: true
