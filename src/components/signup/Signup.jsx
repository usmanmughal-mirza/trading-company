
import React from 'react'
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import  Grid  from '@mui/material/Grid';
import Button from "@mui/material/Button";


const Signup = () => {
  return (
    <>
    <Grid container spacing={2}>

  <Grid item xs={6}>
  <TextField id="outlined-basic" label="UserID" variant="standard" fullWidth />

  </Grid>

  <Grid item xs={6}>
  <TextField id="outlined-basic" label="Name" variant="standard" fullWidth />

  </Grid>

  <Grid item xs={12}>
  <TextField id="outlined-basic" label="Email" variant="standard" fullWidth />

  </Grid>

  <Grid item xs={12}>
  <TextField id="outlined-basic" label="Password" variant="standard" fullWidth />

  </Grid>

  <Grid item xs={12} sx={{margin:"2rem 0 1rem 0"}}>
    <Button variant='contained' fullWidth> Sign Up</Button>
  </Grid>

  </Grid>
  </>
  )
}

export default Signup