import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  flex:{
    display: 'flex',
    justifyContent: 'center'
  }
})

export default function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.flex}>
      <Typography align='center' variant="caption">
        &copy; 2019 Corey Gibson
      </Typography>
    </div>
  );
}
