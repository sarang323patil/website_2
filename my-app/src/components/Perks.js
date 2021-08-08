import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import logo from '../images/logo_white.svg'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import psygist from '../images/psygist1.svg';
import psytrist from '../images/psytrist.svg';
import ment from '../images/ment.svg';

const useStyles = makeStyles((theme) => ({

    wrapper:{
        height: '100vh',
        width: '100vw',
        // backgroundColor: '#0093E9',
        // backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
        backgroundColor: '#74EBD5',
        backgroundImage: 'linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)',

        // paddingTop:'5%',
       
//         background-color: #74EBD5;
// background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);

    },
    button:{
        paddingTop:20
    },
    
    imagewrapper:{
        // paddingTop:'5%',
        // backgroundColor:'rgb(77, 219, 255)'
    },

    image:{
        height:650
    },

    image1:{
        paddingTop:95,
        height:410
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
        color:'#2c3e50',
        // fontStyle:'italic'
    },

    rightText:{
        fontSize:25,
        fontFamily:'Pacifico',
        textAlign:'center',
        paddingRight:50,
        paddingLeft:50,
        color:'#2c3e50'
    },

    heading:{
        fontWeight:'bold',
        textAlign:'center',
        fontFamily:'Pacifico',
        color:'white',
        fontSize:35,
        maxHeight:"matchItem"
       
    },
    
    vl:{
        borderLeft: '6px solid green',
        height: 500,
        // position:'absolute',
        left: '50%',
        marginLeft: -3,
        top: 0,
    },

    txt:{
        fontSize:20,
        fontFamily:'Pacifico',
        textAlign:'center',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: 'black',
        color:'white',
        opacity:0.2,
        // border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },

      threeText:{
        fontSize:30,
        fontFamily:'Pacifico',
        textAlign:'center',
        paddingRight:50,
        paddingLeft:50,
        color:'#fff'
    },


      font: {
        fontFamily:'Pacifico',
        textAlign:'center'
      }
}));




function Perks() {
    const classes = useStyles();
    
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);

    const handleOpen1 = () => {
      setOpen1(true);
    };
  
    const handleClose1 = () => {
      setOpen1(false);
    };

    const handleOpen2 = () => {
      setOpen2(true);
    };
  
    const handleClose2 = () => {
      setOpen2(false);
    };

    const handleOpen3 = () => {
      setOpen3(true);
    };
  
    const handleClose3 = () => {
      setOpen3(false);
    };

    return (
        <Grid container className={classes.wrapper} id='perks'>


            <Grid item sm={12} xs={12} className={classes.heading}>
                <h1>Perks</h1>
            </Grid>


            <Grid container item sm={4} xs={4} className={classes.cols}>
                <Grid item sm={12} xs={12} className={classes.img}>
                <div className={classes.threeText}>Psychologist</div>
                <img src={psygist} className={classes.image1} onClick={handleOpen1}></img>
                
                    {/* <Button >Psychologist</Button> */}
                    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open1}
        onClose={handleClose1}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open1}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" className={classes.font}>Psychologist</h2>
            <p id="transition-modal-description" className={classes.font}>Need some professional help right at yourr doorstep without disclosing much about yourself? 
                                            Connect with the best Counsellors and Psychologists at one place.</p>
          </div>
        </Fade>
      </Modal>
                </Grid>
                {/* <Grid item sm={12} xs={12} className={classes.txt}>
                Every human can achieve marvels,
                                        if they take right decisions <br></br>during the decisive moment of their lives...
                </Grid> */}
            </Grid>

           

            <Grid container item sm={4} xs={4} className={classes.cols}>
                <Grid item sm={12} xs={12} className={classes.img}>
                <div className={classes.threeText}>Psychiatrist</div>
                <img src={psytrist} className={classes.image} onClick={handleOpen2}></img>
                
                {/* <Button onClick={handleOpen}>Psychiatrist</Button> */}
                    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open2}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" className={classes.font}>Psychiatrist</h2>
            <p id="transition-modal-description" className={classes.font}>Find the best specialists, Mentor Doctors for the well being of your mental health.</p>
          </div>
        </Fade>
      </Modal>
                </Grid>
                {/* <Grid item sm={12} xs={12} className={classes.txt}>
                    Every human can achieve marvels,<br></br> 
                        if they take right decisions <br></br>during the decisive moment of their lives...
                </Grid> */}
            </Grid>


            <Grid container item sm={4} xs={4} className={classes.cols}>
                <Grid item sm={12} xs={12} className={classes.img}>
                <div className={classes.threeText}>Mentor</div>
                <img src={ment} className={classes.image} onClick={handleOpen3}></img>
                
                {/* <Button onClick={handleOpen}>Mentor</Button> */}
                    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open3}
        onClose={handleClose3}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open3}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" className={classes.font} >Mentor</h2>
            <p id="transition-modal-description" className={classes.font}>Stuck with career options? Want to pursue something different? 
            Then you are at the right place! Best mentors with worth sharing real life experiences to guide the new minds of the nation.</p>
          </div>
        </Fade>
      </Modal>
                </Grid>
                {/* <Grid item sm={12} xs={12} className={classes.txt}>
                    Every human can achieve marvels,<br></br> 
                                        if they take right decisions <br></br>during the decisive moment of their lives...
                </Grid> */}
            </Grid>




        {/* <Grid item sm={6} xs={12} className={classes.imagewrapper}>
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

            </Grid> */}
        
    </Grid>
    )
}

export default Perks
