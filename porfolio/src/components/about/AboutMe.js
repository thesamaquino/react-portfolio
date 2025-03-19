'use client';

import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import { ProfileImage } from './ProfileImage'
import Link from 'next/link';
import { useState } from 'react';
import { Autobiography } from './Autobiography';
import SkillsGraph from './SkillsGraph';

export const AboutMe = () => {

  return (
    <Box 
    id="about"
    sx={{ 
      maxWidth: 1248,
       width: "100%", 
       mx: "auto", 
       paddingTop: '171px',
       paddingBottom: 8
       }}>
      <Typography variant="h2">About Me</Typography>
        <Stack sx={{paddingX: {xs: 1, sm: 2, md: 4, lg: 8}, paddingY: 4}}>
          {/* <ProfileImage /> */}
          <Autobiography/>
          <SkillsGraph/>
        </Stack>

    </Box>
  )
}
