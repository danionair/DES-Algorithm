import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
export default function Tkey ( props) {
   const { vecC,vecL} = props;
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
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h4>Generación Claves</h4>
              </Grid>
              <Grid item xs={6}>
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="left">Kn</StyledTableCell>
                                    <StyledTableCell align="left">Clave</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {vecL.map((param, index) => (
                                    <TableRow key={index}>
                                        <StyledTableCell align="left">{param.kn}</StyledTableCell>
                                        <StyledTableCell align="left">{param.key}</StyledTableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={6}>
                <TableContainer component={Paper}>
                            <Table size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="left">Kn</StyledTableCell>
                                        <StyledTableCell align="left">Clave</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {vecC.map((param, index) => (
                                        <TableRow key={index}>
                                            <StyledTableCell align="left">{param.kn}</StyledTableCell>
                                            <StyledTableCell align="left">{param.key}</StyledTableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                    </TableContainer>
              </Grid>
          </Grid>          
          
      </div>
  )
}