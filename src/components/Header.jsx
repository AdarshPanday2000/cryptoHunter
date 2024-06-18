import React from 'react'
import { AppBar, Container, Toolbar, Typography, Select, MenuItem } from '@material-ui/core';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core';
import { useNavigate } from 'react-router-dom'; //bring back to the particular page
import { CryptoState } from '../pages/CryptoContext';
import AuthModal from './Authentication/AuthModal';
import UserSidebar from './Authentication/UserSidebar';

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color : 'gold',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        cursor: 'pointer'
    } 
}))


function Header() {
    const classes = useStyles()
    const navigate = useNavigate();
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            type: 'dark',
        },
    })
    //importing context state
    const { currency, setCurrency,user } = CryptoState()
    //console.log(currency)

    
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static' >
        <Container>
            <Toolbar>
                <Typography className={classes.title} onClick={() => navigate('/')} variant='h6'>Crypto Hunter</Typography>

                <Select varient = 'outlined' style = {{
                    width: 100,
                    height: 40,
                    marginRight: 15,
                }} 
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}>
                    <MenuItem value={"USD"}>USD</MenuItem>
                    <MenuItem value={"INR"}>INR</MenuItem>
                </Select>
                {user ? <UserSidebar/> : <AuthModal />}
            </Toolbar>
        </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header


//AppBar = header bar from MUI
// positon = keeps the header in the normal document flow
// container = for responsive
// toolbar = provides spacing and aligns v\children comp in header
