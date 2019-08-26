import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));


const SimpleTable = (props) =>{

const classes = useStyles();

const rows= props.shows;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Watchers</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Trakt</TableCell>
            <TableCell align="right">TVDB</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.show.ids.trakt}>
              <TableCell component="th" scope="row">
                {row.show.title}
              </TableCell>
              <TableCell align="right">{row.watchers}</TableCell>
              <TableCell align="right">{row.show.year}</TableCell>
              <TableCell align="right">{row.show.ids.trakt}</TableCell>
              <TableCell align="right">{row.show.ids.tvdb}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
 

export default  SimpleTable 
