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

export default function SimpleTable(props){


const classes = useStyles();

let rows= props.shows;
let number = (props.page-1)*props.limit; 




  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Title</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Trakt</TableCell>
            <TableCell align="right">Poster URL or TVDB id</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => ( // eslint-disable-next-line
                number++, 
    
                row.show.ids.tvdb.length>8 ? 
                  (<TableRow key={row.show.ids.trakt}>
                  <TableCell align="right">{number}</TableCell>
                  <TableCell component="th" scope="row">{row.show.title}</TableCell>
                  <TableCell align="right">{row.show.year}</TableCell>
                  <TableCell align="right">{row.show.ids.trakt}</TableCell>
                  <TableCell align="right">  <a href={row.show.ids.tvdb} target="_blank" rel="noopener noreferrer"> {" "}{row.show.ids.tvdb}</a> </TableCell>
                  </TableRow>
                  ) 
               :  
                  (<TableRow key={row.show.ids.trakt}>
                  <TableCell align="right">{number}</TableCell>
                  <TableCell component="th" scope="row">{row.show.title}</TableCell>
                  <TableCell align="right">{row.show.year}</TableCell>
                  <TableCell align="right">{row.show.ids.trakt}</TableCell>
                  <TableCell align="right">  {row.show.ids.tvdb}    </TableCell>
                  </TableRow>
                  )
              ))}
            </TableBody>
      </Table>
    </Paper>
  );
}
 // 


