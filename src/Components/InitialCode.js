import React from "react";
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
export default function Icode ( props) {
   const { vecI} = props;
   const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.success.main,
      color:theme.palette.common.white,
    },
    body:{
      backgroundColor:theme.palette.common.white,fontSize: 13,
    }
}))(TableCell);
  return(
    <div>
          <h4>Codificación Inicial</h4>
          <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                  <TableHead>
                      <TableRow>
                          <StyledTableCell align="left">Codificación Criptograma</StyledTableCell>
                          <StyledTableCell align="left">Codificación Clave</StyledTableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {vecI.map((param, index) => (
                          <TableRow key={index}>
                              <StyledTableCell align="left">{param.cc}</StyledTableCell>
                              <StyledTableCell align="left">{param.ck}</StyledTableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </TableContainer>
    </div>
  )
}