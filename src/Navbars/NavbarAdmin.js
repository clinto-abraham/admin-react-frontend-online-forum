import { BarChart as BarChartIcon } from "react-feather";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import decode from "jwt-decode";
import * as actionType from "../redux/constants/actionTypes";

//
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  roundedroot: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
//

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

function NavbarAdmin() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //  these above for avatar dropdown
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("account")));
  const dispatch = useDispatch();
  // const location = useLocation();
  console.log(user);
  const history = useHistory();

  function logout() {
    dispatch({ type: actionType.LOGOUT });

    history.push("/");

    setUser(null);
  }

  // const token = user?.token;
  // // console.log(token);
  // // console.log(user);
  // // const d = decode(token);
  // // console.log(d);
  // useEffect(() => {
  //   if (token) {
  //     const decodedToken = decode(token);

  //     if (decodedToken.exp * 1000 < new Date().getTime()) {
  //       logout();
  //
  //     }
  //   }
  // }, [location,  logout, token]);

  const classes = useStyles();

  return (
    <>
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">Organization Name</h4>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 padding-grid-top-bottom">
                <Link to="/dashboard" className="link">
                  <BarChartIcon className="icon" />
                  Dashboard
                </Link>
              </div>

              <div className="dropdown link col-xs-12 col-sm-12 col-md-12 col-lg-2 ">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ backgroundColor: "inherit", color: "inherit" }}
                >
                  Student Section
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link
                    to="/register-student"
                    className="link dropdown-item"
                    style={{ color: "inherit" }}
                  >
                    Register Student
                  </Link>
                  <Link
                    to="/students-info"
                    className="link dropdown-item"
                    style={{ color: "inherit" }}
                  >
                    Student Info
                  </Link>
                </div>
              </div>

              <div className="dropdown link col-xs-12 col-sm-12 col-md-12 col-lg-2">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ backgroundColor: "inherit", color: "inherit" }}
                >
                  Teacher Section
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link
                    to="/register-teacher"
                    className="link dropdown-item"
                    style={{ color: "inherit" }}
                  >
                    Register Teacher
                  </Link>
                  <Link
                    to="/assign-teachers"
                    className="link dropdown-item"
                    style={{ color: "inherit" }}
                  >
                    Assign Teacher
                  </Link>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 padding-grid"></div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 padding-grid"></div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-1 padding-grid">
                <div className={classes.root}>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <StyledBadge
                      overlap="circle"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      variant="dot"
                    >
                      <Avatar variant="square" className={classes.square}>
                        N
                      </Avatar>
                    </StyledBadge>
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <Link to="/update-account">Profile</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/salary-track">My account</Link>
                    </MenuItem>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </>
  );
}
export default NavbarAdmin;
