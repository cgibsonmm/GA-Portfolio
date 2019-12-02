import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import CardContent from '@material-ui/core/CardContent'
import Fade from '@material-ui/core/Fade'
import IconButton from '@material-ui/core/IconButton'
import Backdrop from '@material-ui/core/Backdrop'
import { CardActionArea, Typography } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link'


const useStyles = makeStyles({
  image: {
    paddingTop: '56.25%'
  },
  modalImage: {
    width: '100%'
  },
  modal:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    width: '75%'
  }
})


export default function ProjectCard({project}) {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  function handleOpen(){
    setOpen(true)
  }

  function handleClose(){
    setOpen(false)
  }

  return (
    <Grid item sm={12} md={6}>
      <Card>
        <CardActionArea
          onClick={handleOpen}
        >
          <CardHeader
          title={project.title}
          subheader={project.tech.join(', ')}
        />
        <CardMedia
          image={project.image}
          className={classes.image}
        />
        </CardActionArea>
        <CardContent>
          <Typography variant="body2">
            {project.description}
          </Typography>
          <IconButton component={Link} target="blank" href={project.url}>
            <LinkIcon/>
          </IconButton>
          <IconButton component={Link} target="blank" href={project.gitUrl}>
            <GitHubIcon/>
          </IconButton>
        </CardContent>
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade  in={open} className={classes.paper}>
            <img className={classes.modalImage} src={`${project.image}`} alt={project.title} />
          </Fade>
        </Modal>
      </Card>
    </Grid>
  )
}
