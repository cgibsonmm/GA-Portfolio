import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  appBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  name: {
    padding: '3px 10px',
    border: `3px solid #3a7cec`,
    fontWeight: '600',
  },
  noUnderline:{
    textDecoration: 'none',
  },
  active: {
    marginRight: '15px',
    fontSize: '14px',
    fontWeight: '700',
    letterSpacing: '1px',
    padding: '22px 0',
    position: 'relative',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: '.35s',
    '&:hover':{
      textDecoration:'none',
    },
    '&:after':{
      background: '#3a7cec none repeat scroll 0 0',
      bottom: 0,
      content: "''",
      height: '2px',
      left: '50%',
      marginLeft: '-5px',
      opacity: '0',
      position: 'absolute',
      transition: '.55s',
      left: '0',
      marginLeft: '0px',
      opacity: '1',
      width: '100%',
    }
  },
  inactive: {
    marginRight: '15px',
    fontSize: '14px',
    fontWeight: '700',
    letterSpacing: '1px',
    padding: '22px 0',
    position: 'relative',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: '.35s',
    // '&:after':{
    //   background: '#3a7cec none repeat scroll 0 0',
    //   bottom: 0,
    //   content: "''",
    //   height: '2px',
    //   left: '50%',
    //   marginLeft: '-5px',
    //   opacity: '0',
    //   position: 'absolute',
    //   transition: '.55s',
    //   left: '0',
    //   marginLeft: '0px',
    //   opacity: '1',
    //   width: '100%',
    //  }
  },
  leftPadding: {
    paddingLeft: '10px'
  }
});

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [linkStatus, setLinkStatus] = useState([{
      title: 'About Me',
      active: false,
      target: "#about-me"
    },{
      title: 'Portfolio',
      active: false,
      target: "#portfolio"
    },{
      title: "Contact Me",
      active: false,
      target: '#contact'
    }
  ])

  function markActive(index){
    const links = linkStatus
    links.map(link => {
      return link.active = false
    })
    links[index].active = true
    setLinkStatus(links)
  }

  function handleDrawOpen(){
    setDrawerOpen(true)
  }

  function handleDrawClose(){
    setDrawerOpen(false)
  }

  function rightLinks(){
    return linkStatus.map((item, index) => (
      <Link
        href={item.target}
        offset="75"
        color="secondary"
        component={AnchorLink}
        className={[(item.active ? classes.active : classes.inactive), classes.leftPadding ]}
        onClick={()=> markActive(index), handleDrawClose}
        key={`nav-link-${index}`}
        >
        {item.title}
      </Link>
    ))
  }

  const classes = useStyles();
  return (
    <header>
      <nav>
        <AppBar color='white' position="fixed">
          <Container maxWidth="lg">
            <Toolbar className={classes.appBar}>
              <AnchorLink offset="200" href="#main" className={classes.noUnderline}>
                <Typography className={classes.name} variant="h5" color="primary">
                  COREY GIBSON
                </Typography>
              </AnchorLink>
              <Hidden smDown>
                <div className="right-bar">
                  {rightLinks()}
                </div>
              </Hidden>
              <Hidden mdUp>
                <Button onClick={handleDrawOpen}><MenuIcon/></Button>
              </Hidden>
            </Toolbar>
          </Container>
        </AppBar>
        <Toolbar/>
      </nav>
      <Drawer className={classes.leftPadding}
        open={drawerOpen}
        onClose={handleDrawClose}
        anchor="top"
        >
        {rightLinks()}
      </Drawer>
    </header>
  );
}
