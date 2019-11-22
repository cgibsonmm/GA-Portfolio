import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px'
  },
  icon:{
    height: '40px'
  }
})

export default function IconCard({icon}) {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <i className={icon} style={{fontSize: '50px', color: '#3a7cec'}}/>
      <Typography variant="h6">
        {icon.split('-')[1].toUpperCase()}
      </Typography>
    </Card>
  )
}
