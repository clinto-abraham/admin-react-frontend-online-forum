import React from "react";
import { useHistory } from "react-router-dom";

function PaydayControls() {
  const user = JSON.parse(localStorage.getItem("account"));
  const history = useHistory();
  return (
    <>
      {!user?.result?._id ? history.push("/") : <h1>Salary Adminstration</h1>}
    </>
  );
}

export default PaydayControls;
