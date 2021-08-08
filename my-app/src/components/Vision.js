import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import '../components/Vision.css';
import mobileImg from '../images/mobile.png';
import cameraImg from '../images/camera.png';
import processorImg from '../images/processor.png';
import displayImg from '../images/display.png';
import batteryImg from '../images/battery.png';
import arrowImg from '../images/battery.png';
// import visionbgImg from '../images/visionbgImg.jpg';

const useStyles = makeStyles((theme) => ({

    wrapper:{
        height: '100vh',
        width: '100vw',
        paddingTop:'0%'
    },

    rightText:{
        fontSize:30,
        fontFamily:'Pacifico',
        textAlign:'center',
        paddingRight:50,
        paddingLeft:50,
        color:'#fff'
    },

    titleText:{
        fontSize:75,
        fontFamily:'Pacifico',
        textAlign:'center',
        paddingRight:50,
        paddingLeft:50,
        color:'#fff'
    }

}));



function Vision() {

     const classes = useStyles();


    return (
        <div className={classes.wrapper} id='vision'>
            <div className="overlay"></div>
            <div className="title">
                <h1 className={classes.titleText}>Our Vision</h1>
            </div>
            <div className="content">
            
                <p className={classes.rightText}> We as an organization aspire a world with minimal or no mental issues, which can lead to disastrous solution which people think is, is suicide. In our country mental illness is treated like a taboo, but literally it is just like another normal disease which needs a professional treatment. “Peaceful mind, soulful life”, quotes sum up everything.
                </p>
                <br></br>
                <p className={classes.rightText}> There are numerous opportunities hovering around us, but we can see only those which are traversed by people in our surroundings, and that bounds the future for a child, probably waste of thousands of talents and genius minds. 
                </p>
                <br></br>
                <p className={classes.rightText}> "Children are like wet cement. Whatever falls on them makes an impression." -Haim Ginott
                    Just a hand with proper path can lead this force to pull out marvels in universe. We will connect our hands with such prodigies to provide the best possible outcomes this life can lead too.
                </p>
            </div>
        </div>
    )
}

export default Vision;


