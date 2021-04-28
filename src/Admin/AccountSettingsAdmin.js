import React, { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";

import NavbarAdmin from "./NavbarAdmin/NavbarAdmin";
import BottomNavbar from "../bottomNavbar";

const states = [
  { value: "kerala", label: "Kerala" },
  { value: "goa", label: "Goa" },
  { value: "orissa", label: "Orissa" },
  { value: "chhattisgarh", label: "Chhattisgarh" },
  { value: "assam", label: "Assam" },
  { value: "manipur", label: "Manipur" },
  { value: "meghalaya", label: "Meghalaya" },
  { value: "mizoram", label: "Mizoram" },
  { value: "nagaland", label: "Nagaland" },
  { value: "sikkim", label: "Sikkim" },
  { value: "tamil_nadu", label: "Tamil Nadu" },
  { value: "tripura", label: "Tripura" },
  { value: "uttaranchal", label: "Uttaranchal" },
  { value: "uttar_pradesh", label: "Uttar Pradesh" },
  { value: "haryana", label: "Haryana" },
  { value: "himachal_pradesh", label: "Himachal Pradesh" },
  { value: "andhra_pradesh", label: "Andhra Pradesh"},
  { value: "jammu_and_kashmir", label: "Jammu and Kashmir" },
  { value: "jharkhand", label: "Jharkhand" },
  
  { value: "bihar", label: "Bihar" },
  
  { value: "gujarat", label: "Gujarat" },
  
  { value: "west_bengal", label: "West Bengal" },
  { value: "karnataka", label: "Karnataka" },
  
  { value: "madhya_pradesh", label: " Madhya Pradesh" },
  { value: "maharashtra", label: "Maharashtra" },
  
  
  { value: "punjab", label: "Punjab" },
  { value: "rajasthan", label: "Rajasthan" },
  
  
  { value: "arunachal_pradesh",label: "Arunachal Pradesh",},
  { value: "assam", label: "Assam",},
];

const AccountSettingsAdmin = (props) => {
  const [values, setValues] = useState({
    firstName: "James",
    lastName: "Abraham",
    email: "john@gmail.com",
    phone: "",
    state: "Kerala",
    country: "India"
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const [values2, setValues2] = useState({
    password: "",
    confirm: "",
  });

  const handleChange2 = (event) => {
    setValues2({
      ...values2,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <NavbarAdmin />
      <form autoComplete="off" noValidate {...props}>
        <Card>
          <CardHeader
            subheader="The information can be edited"
            title="Profile"
          />
          <div className="account-settings">
          <Divider />
          
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="First name"
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.country}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Select State"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                  variant="outlined"
                >
                  {states.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
          <div className="button-account">
            <Button color="primary" variant="contained">
              Save details
            </Button>
            </div>
          
          <Divider />
          </div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
            }}
          >
          

            <form {...props}>
              <Card>
              <div className="account-settings">
                <CardHeader subheader="Update password" title="Password" />
                <Divider />
                <CardContent>
                <div className="textinput-account-settings">
                  <TextField
                    fullWidth
                    label="Password"
                    margin="normal"
                    name="password"
                    onChange={handleChange2}
                    type="password"
                    value={values2.password}
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Confirm password"
                    margin="normal"
                    name="confirm"
                    onChange={handleChange2}
                    type="password"
                    value={values2.confirm}
                    variant="outlined"
                  />
                  </div>
                  <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    p: 2,
                  }}
                >
                <div className="button-account">
                  <Button color="primary" variant="contained">
                    Update
                  </Button> </div>
                </Box>
                </CardContent>
                <Divider />
                </div>
              </Card>
            </form>
          </Box>
        </Card>
      </form>
      <BottomNavbar />
    </>
  );
};

export default AccountSettingsAdmin;
