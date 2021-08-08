import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import logo from '../images/logo_white.svg'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import homebg from '../images/homebg.jpg';
import '../components/Home.css';

const useStyles = makeStyles((theme) => ({

    wrapper:{
        height: '100vh',
        width: '100vw',
        //backgroundColor: '#0093E9',
        //backgroundImage:  'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
        // paddingTop:'5%',
       
        
    },
    button:{
        paddingTop:20
    },
    
    imagewrapper:{
        paddingTop:'5%',
        // backgroundColor:'rgb(77, 219, 255)'
    },

    image:{
        height:450
    },
    
    text:{
        // backgroundColor:'rgb(128, 229, 255)',
      

        width:'50vw',
        verticalAlign:'middle',
        paddingTop:'5%',
        textAlign:'center'

    },

    text1:{
        verticalAlign:'end',
        textAlign:'left',
        paddingTop:125
    },
    typo:{
        fontSize:120,
        fontWeight:'bold',
        textAlign:'center',
        fontFamily:'Pacifico',
        color:'white',
        paddingRight:500
    },

    quote:{
        fontFamily:'Montserrat',
        fontWeight:'bold',
        fontSize:20,
        color:'#fff',
        // fontStyle:'italic'
    },

    rightText:{
        fontSize:25,
        fontFamily:'Pacifico',
        textAlign:'center',
        paddingRight:50,
        paddingLeft:50,
        color:'#2c3e50'
    }

}));


function Home() {

    
    const classes = useStyles();


    return (
        <Grid container className={classes.wrapper} id='home'>
            <div className="overlay"> <h1>Example Overlay</h1> 
            </div>
            <Grid item sm={6} xs={12} className={classes.imagewrapper}>
                <img src={logo} className={classes.image}></img>
                <div className={classes.quote}>DOWNLOAD THE APP</div>
                <div className={classes.button}><Button variant="outlined" style={{backgroundColor:'#2c3e50',borderRadius:30,color:'white',opacity:0.8,fontFamily:'Montserrat'}}>
                    GET STARTED</Button></div>
            </Grid>
        
            <Grid container item sm={6} xs={12} className={classes.text} >
                <Grid item xs={12} className={classes.text1}>
                <Typography className={classes.typo}>Dendo</Typography>
                
                </Grid>
                <Grid item xs={12} className={classes.rightText}> Every human can achieve marvels,<br></br> 
                                        if they take right decisions <br></br>during the decisive moment of their lives...
                
                            
                </Grid>

                </Grid>
            
        </Grid>
    )
}

export default Home

