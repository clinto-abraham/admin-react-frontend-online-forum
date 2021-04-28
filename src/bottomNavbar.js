import React from "react";
import { Search } from "./search";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Link from "@material-ui/core/Link";


function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      style={{ textAlign: "center" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Name of Organization or Link of Official Site
      </Link>
      {"  @"}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

function BottomNavbar() {
  const classes = useStyles();
  return (
    <>
    <footer className={classes.footer}>
      <div className="container-fluid">
        <div className="row">
        <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6 bottom-navbar-content">
            <Search />
            </div>


            <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6 bottom-navbar-content">
              
              
                
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ textAlign: "center" }}
                  >
                    
                    
                      <a href="mailto:clinto92@gmail.com">
                        Email us on : onlineschool@gmail.com
                      </a>
                    
                  </Typography>
                  <Copyright />

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ textAlign: "center" }}
                  >
                    Created By Top Of Cliff Developers
                  </Typography>
                
                  
            </div>

            
            
            
          
        </div>
      </div>
    </footer>
    </>
  );
}

export default BottomNavbar;
