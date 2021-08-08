import React from 'react'
import { createMuiTheme, withStyles, makeStyles, ThemeProvider  } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './ContactUs.css';
import customerImg from '../images/customer.png';
import mentorImg from '../images/mentor.png';
import jobImg from '../images/customer.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';


const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({

    wrapper:{
        height: '100vh',
        width: '100vw'
        /*paddingTop:'5%'*/
    },
    
    titleText:{
        fontSize:75,
        fontFamily:'Pacifico',
        textAlign:'center',
        paddingRight:50,
        paddingLeft:50,
        color:'#fff'
    }    ,

    threeText:{
        fontSize:25,
        fontFamily:'Pacifico',
        textAlign:'center',
        paddingRight:50,
        paddingLeft:50,
        color:'#fff'
    }   ,

    subHead:{
        fontSize:35,
        fontFamily:'Pacifico',
        textAlign:'center',
        paddingRight:50,
        paddingLeft:50,
        color:'#fff'
    }

}));




function ContactUs() {


     const classes = useStyles();


    return (
        <div className={classes.wrapper} id='contactus'>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <h1 className={classes.titleText}>Opportunities</h1>
            </Grid>
            <div className="mainContact">
                <Grid item xs={4}>
                <div className="customer">
                    <h3 className={classes.subHead}>Customer</h3>
                    <p className={classes.threeText}>Want to get rid of mental issues with some professional help. 
                    Are you a student want to pursue a career which is less travelled by 
                    your natives or you want to discuss anything and need a professional advice 
                    for the same We have everything u want.</p> <br></br>
                    <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
                    Get started
                    </BootstrapButton>    
                
                </div>
                </Grid>

                <Grid item xs={4}>
                <div className="mentor">
                    <h3 className={classes.subHead}>Mentor</h3>  
                    <p className={classes.threeText}>If you are a professional psychologist or a student 
                    pursing the same course you can earn and learn through a whole new level of 
                    counselling platform. Here you can help a wide range of people who need this 
                    professional help. 
                    For getting listed register with verified documents.</p> <br></br>
                    <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
                    Apply Here
                    </BootstrapButton>    
                
                </div>
                </Grid>

                <Grid item xs={4}>
                <div className="internship">
                    <h3 className={classes.subHead}>Internship</h3>
                    <p className={classes.threeText}>Want to work on some real-life Projects through applying your 
                    skills on these projects for a good cause. Here at Dendo we believe in skills rather 
                    than any certifications or degrees. 
                    Come On board we are waiting for some serious talents.</p> <br></br>
                    <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
                    Apply Here
                    </BootstrapButton>    
                
                </div>
                </Grid>
            </div>
        </Grid>
        </div>
    )
}

export default ContactUs
