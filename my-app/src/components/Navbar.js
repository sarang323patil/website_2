import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {HashLink as Link} from 'react-router-hash-link'
import Grid from '@material-ui/core/Grid';

// import {Link} from 'react-router-dom'
import logo from '../images/logo_white.svg'
import { grey } from '@material-ui/core/colors';

// import { Link, animateScroll as scroll } from "react-scroll";

// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  buttons:{
    textAlign:'right',
    fontFamily:'Montserrat',
  },
  title: {
    flexGrow: 1,
  },
  name:{
    fontFamily:'Montserrat',
    fontSize:20,
    fontWeight:'bold'
  },
  logo:{
      height:60,
      width:'auto',
  },

  navbar:{
      height:60,
      backgroundColor:'#2c3e50',
      // backgroundImage:'linear-gradient(to right, #bdc3c7, #2c3e50)',
      opacity:25
  }
}));

 function Navbar() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <AppBar position='fixed' className={classes.navbar}> 
        <Toolbar>
        <Grid item xs={2}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Typography className={classes.name}>DENDO</Typography>
          </IconButton></Grid>
          {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}

          {/* <Link
    activeClass="active"
    to="section1"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500} */}
{/* > */}
        <Grid item xs={10} className={classes.buttons}>
          <Button color="inherit" component={Link} smooth to='#home' style={{fontFamily:'Montserrat'}}>Home</Button>
          <Button color="inherit" component={Link} smooth to='#vision' style={{fontFamily:'Montserrat'}}>Vision</Button>
          <Button color="inherit" component={Link} smooth to='#perks' style={{fontFamily:'Montserrat'}}>Perks</Button>
          <Button color="inherit" component={Link} smooth to='#contactus' style={{fontFamily:'Montserrat'}}>Contact Us</Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Navbar;

