import { Button, Grid, Typography } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import React, { useState } from 'react';
import AuthModel from './AuthModel';

const Authentication = () => {

  const [openAuthModel, setOpenAuthModel]=useState(false);
  const handleOpenAuthModel=()=>setOpenAuthModel(true);
  const handleCloseAuthModel=()=>setOpenAuthModel(false);

  return (
    <Grid container>
    <Grid item xs={12} lg={7} sx={{ display: { xs: 'none', lg: 'block' } }}>
        <img className='w-full h-screen' src='https://thumbs.dreamstime.com/b/berlin-germany-jan-twitter-social-media-blue-bird-sign-logo-symbol-minimalist-design-painted-over-white-brick-wall-background-137526023.jpg' alt='twitter background' />
      </Grid>
      <Grid item xs={12} lg={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
        <div>
          <Typography variant='h3' component='h1' align='center' mb={4} sx={{ fontWeight: 'bold', color: 'text.primary' }}>
            Welcome to <span style={{ color: '#1DA1F2' }}>TweetScape</span>
          </Typography>
          <Typography variant='h5' component='h2' align='center' mb={6} sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
            Join <span style={{ color: '#1DA1F2' }}>TweetScape</span> Today
          </Typography>

          <div style={{ width: '70%', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <GoogleLogin width={330} />
          </div>
            <Typography variant='body1' align='center' mt={4} sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
            <Button onClick={handleOpenAuthModel} fullWidth variant='contained' size='large' sx={{ borderRadius: '29px', py: '7px', mt: '20px' }}>
              Create Account
            </Button>
            <Typography variant='body2' align='center' mt={2} sx={{ color: 'text.secondary' }}>
              By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
            </Typography>
          </div>

          <div style={{ marginTop: '20px' }}>
            <Typography variant='h6' align='center' mb={2} sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
              Already Have an Account?
            </Typography>
            <Button onClick={handleOpenAuthModel} fullWidth variant='outlined' size='large' sx={{ borderRadius: '29px', py: '7px' }}>
              Login
            </Button>
          </div>
        </div>
      </Grid>

      <AuthModel open={openAuthModel} handleClose={handleCloseAuthModel}/>
    </Grid>
  );
};

export default Authentication;
