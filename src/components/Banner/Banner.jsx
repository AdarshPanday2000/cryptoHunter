import React from 'react'
import { makeStyles,Container,Typography } from '@material-ui/core';
import Carousal from './Carousal';

const useStyles = makeStyles(() => ({
    banner :{
        backgroundImage : "url(./banner.jpg)",
    },
    bannerContent :{
        height : 400,
        display: "flex",
        flexDirection: 'column',
        paddingTop: 25,
        justifyContent: 'space-around',
    },
    tagline:{
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    },
}))

function Banner() {

    //needs to be created to use the custom style from MUI
    const classes = useStyles();

  return (
    <div className={classes.banner}>
        <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
                <Typography
                    varient="h1"
                    style={{
                        fontWeight : "bold",
                        marginBottom : 15,
                        fontFamily : "Montserrat",
                        fontSize: "4rem", // Adjust the font size as needed
                    }}>
                        Crypto Hunter
                </Typography>

                <Typography
                      variant="subtitle2"
                      style={{
                        color:"darkgrey",
                        textTransform:'capitalize',
                        fontFamily:'Montserrat',
                      }}>
                        Get all the info regarding your favourite Crypto Currency.
                </Typography>
            </div>
            <Carousal />
        </Container>
    </div>
  )
}

export default Banner


// classes.banner = for providing out own style from material UI