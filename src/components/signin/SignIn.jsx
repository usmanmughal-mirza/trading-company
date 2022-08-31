import React from 'react'
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import  Grid  from '@mui/material/Grid';
import Button from "@mui/material/Button";


const SignIn = () => {
  return (
    <>
    <Grid container spacing={2}>

  <Grid item xs={12}>
  <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth />

  </Grid>

  <Grid item xs={12}>
  <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth />

  </Grid>

  <Grid item xs={12} sx={{margin:"2rem 0 1rem 0"}}>
    <Button variant='contained' fullWidth> Sign In</Button>
  </Grid>

  </Grid>
  </>
  )
}

export default SignIn