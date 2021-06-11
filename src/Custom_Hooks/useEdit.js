import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TableCell from "@material-ui/core/TableCell";
import { withStyles, makeStyles} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {
  InputAdornment,
  TextField,
} from "@material-ui/core";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import MenuItem from "@material-ui/core/MenuItem";

// export const OptionCustom = ({
//   name,
//   label,
//   value,
//   type,
//   onChange,
//   handleReadingChange,
//   handleSpeakingChange,
//   handleListeningChange,
//   handleWritingChange,
//   variant,
// }) => {
  

//   const classes = useStyles();
//   const teachers = useSelector((state) => state.teachers);
//   console.log(teachers);
//   return (
//     <TextField
//       select
//       type={type}
//       id={name}
//       name={name}
//       value={value}
//       placeholder={label}
//       onChange={onChange}
//       className={classes.textField}
//       fullWidth
//       autoFocus
//       helperText="Please select teacher"
//       variant="outlined"
//     >
//       {teachers.map((option) => (
//         <MenuItem key={option._id} value={option._id}>
//           {option.firstName?option.firstName: "_"} {option.lastName ? option.lastName : "_"}
//         </MenuItem>
//       ))}
//     </TextField>
//   );
// };

// export const TextfieldCustom = ({
//    label, name, value, onChange,
//   // ref,
//   key,
//   type,
  
//   // handleReadingChange,
//   // handleListeningChange,
//   // handleSpeakingChange,
//   // handleWritingChange,
//   // handleLBoolean,
//   // handleRBoolean,
//   // handleWBoolean,
//   // handleSBoolean,
//   // variant,
// }) => {
//   //  const handleChange = (e) = useCallback((e) => {
//   //       e.persist();
//   //        setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
//   //       //  useCallback()
//   //        console.log("handleChange is hit")
//   //      }, []);

//  const [updatedStudent, setUpdatedStudent] = useEdit();
//  const handleChange = (e) => {
//   e.persist();
//    setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
//    console.log("handleChange of TextfieldCustom input is hit", updatedStudent, e)
//  };

 
//  const handleListeningChange = (e) => {
//   e.persist();
//    setUpdatedStudent({...updatedStudent, assigned: {
//      ...updatedStudent.assigned, listening : {
//        ...updatedStudent.listening, [e.target.name]: e.target.value
//      }
//    }})
//    console.log("handleListening of useEdit.js file is hit", updatedStudent)
//  }
//  const classes = useStyles();
//   return (
//     <TextField
//       key={key}
//       type={type}
//       id={name}
//       name={name}
//       value={value}
//       placeholder={label}
//       onChange={onChange}
//       className={classes.textField}
//       fullWidth
//       autoFocus
//       // variant={variant}
//       InputProps={{
//         endAdornment: (
//           <InputAdornment position="end">
//             <BorderColorIcon />
//           </InputAdornment>
//         ),
//       }}
//     />
//   );
// };

// export const SwitchBarCustom = ({
//   name,
//   label,
//   value,
//   onChange,
//   handleRBoolean,
//   handleLBoolean,
//   handleWBoolean,
//   handleSBoolean,
 
// }) => {

//   const classes = useStyles();
//   return (
//       <FormGroup row>
//         <FormControlLabel
//           control={
//             <Switch
//               id={name}
//               name={name}
//               onChange={onChange}
              
              
//               checked={value}
//             />
//           }
//           label={label}
//         />
//       </FormGroup>
//   );
// };

// export const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     margin: "auto",
//     padding: "100px",
//   },
//   textField: {
//     width: "25ch",
//     margin: theme.spacing(1),
//     display: "block",
//   },
//   buttons: {
//     margin: "10px",
//   }
// }));

//  const useEdit = (label, name, value, onChange) => {
//    const [updatedStudent, setUpdatedStudent] = useState({
//         firstName: "",
//         lastName: "",
//         surname: "",
//         fatherName: "",
//         motherName: "",
//         nativeLanguage: "",
//         dateOfBirth: "",
//         email: "",
//         phoneNumber: "",
//         alternatePhone: "",
//         onlineID: "",
//         rollNumber: "",
//         age: "",
//         class: "",
//         address: "",
//         city: "",
//         pinCode: "",
//         state: "",
//         country: "India",
//         totalPayment: "",
//         paymentReceived: "",
//         paymentDue: "",
//         paymentReceipt: "",
//         textarea: "",
//         assigned: {
//           listening: {
//             Lopted: false,
//             LdateOfAssign: "",
//             LmoduleEndDate: "",
//             LmoduleCost: "",
//             LteacherName: "",
//             LtutorialCost: "",
//             LlessonComplete: "",
//             LtutorialHrsComplete: "",
//             LteacherID: "",
//           },
//           reading: {
//             Ropted: false,
//             RdateOfAssign: "",
//             RmoduleEndDate: "",
//             RmoduleCost: "",
//             RteacherName: "",
//             RtutorialCost: "",
//             RlessonComplete: "",
//             RtutorialHrsComplete: "",
//             RteacherID: "",
//           },
    
//           writing: {
//             Wopted: false,
//             WdateOfAssign: "",
//             WmoduleEndDate: "",
//             WmoduleCost: "",
//             WteacherName: "",
//             WtutorialCost: "",
//             WlessonComplete: "",
//             WtutorialHrsComplete: "",
//             WteacherID: "",
//           },
    
//           speaking: {
//             Sopted: false,
//             SdateOfAssign: "",
//             SmoduleEndDate: "",
//             SmoduleCost: "",
//             SteacherName: "",
//             StutorialCost: "",
//             SlessonComplete: "",
//             StutorialHrsComplete: "",
//             SteacherID: "",
//           },
//         },
    
//         admissionDate: "",
//         courseCompletion: false,
//         IMPS: false,
//         GooglePay: false,
//         NEFT: false,
//         PhonePe: false,
//         CASH: false,
//       })

//       const StyledTableCell = withStyles((theme) => ({
//         head: {
//           backgroundColor: theme.palette.background.paper,
//           color: theme.palette.common.black,
//         },
//         body: {
//           fontSize: 14,
//         },
//       }))(TableCell);
      
//       const StyledTableRow = withStyles((theme) => ({
//         root: {
//           "&:nth-of-type(odd)": {
//             backgroundColor: theme.palette.action.hover,
//           },
//         },
//       }))(TableRow);
      
//       // const handleChange = (e) => {
//       //   e.persist();
//       //    setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
//       //    console.log("handleChange of useEdit is hit", updatedStudent)
//       //  };
      
     
//       const handleChange = useCallback((e) => {
//         e.persist();
//          setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
        
//          console.log("handleChange of useEdit is hit", updatedStudent)
//        }, [updatedStudent]);

//        const handleRBoolean = (e) => {
//         e.persist();
//          setUpdatedStudent({...updatedStudent, assigned: {
//            ...updatedStudent.assigned, reading : {
//               ...updatedStudent.reading, [e.target.name]: !e.target.value
//            }
//          }})
//        }
//        const handleLBoolean = (e) => {
//         e.persist();
//          setUpdatedStudent({...updatedStudent, assigned: {
//            ...updatedStudent.assigned, listening : {
//              ...updatedStudent.listening, [e.target.name]: !e.target.checked
//            }
//          }})
//        }
//        const handleSBoolean = (e) => {
//         e.persist();
//          setUpdatedStudent({...updatedStudent, assigned: {
//            ...updatedStudent.assigned, speaking : {
//              ...updatedStudent.speaking, [e.target.name]: !e.target.checked
//            }
//          }})
//        }
//        const handleWBoolean = (e) => {
//         e.persist();
//          setUpdatedStudent({...updatedStudent, assigned: {
//            ...updatedStudent.assigned, writing : {
//              ...updatedStudent.writing, [e.target.name]: !e.target.checked
//            }
//          }})
//        }
//        const handleReadingChange = (e) => {
//         e.persist();
//          setUpdatedStudent({...updatedStudent, assigned: {
//            ...updatedStudent.assigned, reading : {
//              ...updatedStudent.reading, [e.target.name]: e.target.value
//            }
//          }})
//        }
//       //  const handleChange = useCallback((e) => {
//       //   // e.persist();
//       //   //  setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
//       //   //  useCallback()
//       //    console.log("handleChange of edit jsx is hit")
//       //  }, []);
//        const handleListeningChange = useCallback((e) => {
//         e.persist();
//          setUpdatedStudent({...updatedStudent, assigned: {
//            ...updatedStudent.assigned, listening : {
//              ...updatedStudent.listening, [e.target.name]: e.target.value
//            }
//          }})
         
//        }, []);
     
//        const handleWritingChange = (e) => {
//         e.persist();
//          setUpdatedStudent({...updatedStudent, assigned: {
//            ...updatedStudent.assigned, writing : {
//              ...updatedStudent.writing, [e.target.name]: e.target.value
//            }
//          }})
//        }
//        const handleSpeakingChange = (e) => {
//          e.persist();
//          setUpdatedStudent({...updatedStudent, assigned: {
//            ...updatedStudent.assigned, speaking : {
//              ...updatedStudent.speaking, [e.target.name]: e.target.value
//            }
//          }})
//        }

//     return [ 
     
//       updatedStudent, 
//       setUpdatedStudent,
//       handleRBoolean,
//       handleLBoolean,
//       handleWBoolean,
//       handleSBoolean,
//       handleReadingChange,
//       handleSpeakingChange,
//       handleListeningChange,
//       handleWritingChange,
//       StyledTableCell, 
//       StyledTableRow, 
//       handleChange
    
//      ]
// }
// export default useEdit;














// Old working model here


const useEdit = () => {
    
  
        const StyledTableCell = withStyles((theme) => ({
          head: {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.common.black,
          },
          body: {
            fontSize: 14,
          },
        }))(TableCell);
        
        const StyledTableRow = withStyles((theme) => ({
          root: {
            "&:nth-of-type(odd)": {
              backgroundColor: theme.palette.action.hover,
            },
          },
        }))(TableRow);
        
        const useStyles = makeStyles((theme) => ({
            root: {
              display: "flex",
              flexWrap: "wrap",
              margin: "auto",
              padding: "100px",
            },
            textField: {
              width: "25ch",
              margin: theme.spacing(1),
              display: "block",
            },
            buttons: {
              margin: "10px",
            }
          }));
  
      return [ 
        useStyles, StyledTableCell, StyledTableRow

      
       ]
  }
  export default useEdit;












// 
// handleChange,
// handleReadingChange,
// handleListeningChange,
// handleSpeakingChange,
// handleWritingChange,
// handleLBoolean,
// handleRBoolean,
// handleWBoolean,
// handleSBoolean,


      // 
// const Clear = (e) => {
//   e.preventDefault();
//   setUpdatedStudent({
//     firstName: "",
//     lastName: "",
//     surname: "",
//     fatherName: "",
//     motherName: "",
//     nativeLanguage: "",
//     dateOfBirth: "",
//     email: "",
//     phoneNumber: "",
//     alternatePhone: "",
//     onlineID: "",
//     rollNumber: "",
//     age: "",
//     class: "",
//     address: "",
//     city: "",
//     pinCode: "",
//     state: "",
//     country: "India",
//     totalPayment: "",
//     paymentReceived: "",
//     paymentDue: "",
//     paymentReceipt: "",
//     textarea: "",
//     assigned: {
//       listening: {
//         Lopted: false,
//         LdateOfAssign: "",
//         LmoduleEndDate: "",
//         LmoduleCost: "",
//         LteacherName: "",
//         LtutorialCost: "",
//         LlessonComplete: "",
//         LtutorialHrsComplete: "",
//         LteacherID: "",
//       },
//       reading: {
//         Ropted: false,
//         RdateOfAssign: "",
//         RmoduleEndDate: "",
//         RmoduleCost: "",
//         RteacherName: "",
//         RtutorialCost: "",
//         RlessonComplete: "",
//         RtutorialHrsComplete: "",
//         RteacherID: "",
//       },

//       writing: {
//         Wopted: false,
//         WdateOfAssign: "",
//         WmoduleEndDate: "",
//         WmoduleCost: "",
//         WteacherName: "",
//         WtutorialCost: "",
//         WlessonComplete: "",
//         WtutorialHrsComplete: "",
//         WteacherID: "",
//       },

//       speaking: {
//         Sopted: false,
//         SdateOfAssign: "",
//         SmoduleEndDate: "",
//         SmoduleCost: "",
//         SteacherName: "",
//         StutorialCost: "",
//         SlessonComplete: "",
//         StutorialHrsComplete: "",
//         SteacherID: "",
//       },
//     },

//     admissionDate: "",
//     courseCompletion: false,
//     IMPS: false,
//     GooglePay: false,
//     NEFT: false,
//     PhonePe: false,
//     CASH: false,
//   });
// };