import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";

function EditFirstPage({ nextStep, id, setStudentformData }) {
  const user = JSON.parse(localStorage.getItem("account"));
  const [studenupdateData, setStudentupdateData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();
  const studentData = useSelector((state) =>
    id ? state.students.find((data) => data._id === id) : null
  );

  useEffect(() => {
    if (studentData) setStudentupdateData(studentData);
  }, [studentData]);

  const handleChange = (e) => {
    setStudentformData(((e) => [e.target.name]: e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      clear();
    
  };

  const clear = () => {
      // setCurrentId(0);
      setStudentformData({ title: "", message: "", tags: "", selectedFile: "" });
    };
  
  return (
    <>
      {!user?.result?._id ? (
        history.push("/")
      ) : (
        <>
          <MuiThemeProvider>
            {studentData.map((values) => (
              <>
                <Dialog open fullWidth maxWidth="sm">
                  <AppBar open fullWidth maxWidth="sm">
                    <AppBar title="Enter User Details" />
                    <form onSubmit={handleSubmit}>
                      <TextField
                        placeholder="Enter Your First Name"
                        label="First Name"
                        onChange={handleChange}
                        defaultValue={values.firstName}
                        margin="normal"
                        fullWidth
                      />
                      <br />
                      <TextField
                        placeholder="Enter Your Last Name"
                        label="Last Name"
                        onChange={handleChange}
                        defaultValue={values.lastName}
                        margin="normal"
                        fullWidth
                      />
                      <br />
                      <TextField
                        placeholder="Enter Your Email"
                        label="Email"
                        onChange={handleChange}
                        defaultValue={values.email}
                        margin="normal"
                        fullWidth
                      />
                      <br />
                      <Button
                        color="primary"
                        type="submit"
                        variant="contained"
                        onClick={nextStep}
                      >
                        Continue
                      </Button>
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={clear}
                      >
                        Clear
                      </Button>
                    </form>
                  </AppBar>
                </Dialog>
              </>
            ))}
          </MuiThemeProvider>
        </>
      )}
    </>
  );
}

export default EditFirstPage;
