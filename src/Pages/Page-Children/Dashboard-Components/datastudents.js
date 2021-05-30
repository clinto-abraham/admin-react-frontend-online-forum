import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  CircularProgress,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@material-ui/core";
import { Link } from 'react-router-dom'
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useSelector } from "react-redux";
// import { getStudents } from '../../../redux/actions/studentAction'

const DataStudents = (props) => {
  const { students, isLoading } = useSelector((state) => state.students);
  // const dispatch = useDispatch();
  // dispatch(getStudents());

  return (
    <div className="padding-grid">
      <Card {...props}>
        <CardHeader title="Latest updates on students" />
        <Divider />
        <PerfectScrollbar>
          <Box sx={{ minWidth: 800 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Roll Number</TableCell>
                  <TableCell>Name of student</TableCell>
                  <TableCell sortDirection="desc">
                    <Tooltip enterDelay={300} title="Sort">
                      <TableSortLabel active direction="desc">
                        Date of Admission
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              {isLoading ? (
                <CircularProgress />
              ) : (
                <TableBody>
                  {students.map((stu) => (
                    <TableRow hover key={stu.id}>
                      <TableCell>{stu.rollNumber}</TableCell>
                      <TableCell>{stu.firstName}  {" "} {stu.lastName} + {" "} {stu.surname}</TableCell>
                      <TableCell>
                        {moment(stu.createdAt).format("DD/MM/YYYY")}
                      </TableCell>
                      <TableCell>
                        <Chip color="primary" label={stu.status} size="small" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </Box>
        </PerfectScrollbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}>
            <Link to="/students-info">
          <Button
            color="primary"
            endIcon={<ArrowRightIcon />}
            size="small"
            variant="text">
            View all
          </Button>
          </Link>
        </Box>
      </Card>
    </div>
  );
};

export default DataStudents;

// const s = [
//   {
//     id: uuid(),
//     ref: 'CDD1049',
//     amount: 30.5,
//     customer: {
//       name: 'Ekaterina Tankova'
//     },
//     createdAt: 1555016400000,
//     status: 'In Progress'
//   }