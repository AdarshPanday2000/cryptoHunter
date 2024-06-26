import { Box, Button, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { CryptoState } from '../../pages/CryptoContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth }from '../../firebase';


function Signup({ handleClose }) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const { setAlert } = CryptoState();

    const handleSubmit = async () => {
        if(password !== confirmPassword){
            setAlert({
                open : true,
                message : 'Passwords do not match',
                type: 'error'
            })
            return;
        }

        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            setAlert({
                open: true,
                message: `Sign Up Successful. Welcome ${result.user.email}`,
                type : 'success',
            })
            handleClose()  //to close the box modal
        } catch (error) {
            
        }
    }

  return (
    <Box p={3} style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
        <TextField
            variant='outlined'
            type='email'
            label='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
        >

        </TextField>

        <TextField
            variant='outlined'
            type='password'
            label='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
        >

        </TextField>

        <TextField
            variant='outlined'
            type='password'
            label='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
        >

        </TextField>
        <Button
            variant='contained'
            size='large'
            style={{ backgroundColor: '#EEBC1D'}}
            onClick={handleSubmit}
        >
            Sign Up
        </Button>
    </Box>
  )
}

export default Signup

//createUserWithEmailAndPassword = makes a new user after clicking button (firebase fucntion)