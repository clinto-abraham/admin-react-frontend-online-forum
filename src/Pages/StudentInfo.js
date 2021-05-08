import React from "react";
import { useHistory } from "react-router-dom";

//  <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>

function StudentInfo() {
  const user = JSON.parse(localStorage.getItem("account"));
  const history = useHistory();
  return (
    <>
      {!user?.result?._id ? (
        history.push("/")
      ) : (
        <div>
          <table className="table table-bordered border-primary"></table>
        </div>
      )}
    </>
  );
}

export default StudentInfo;
