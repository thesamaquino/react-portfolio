import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material"

export const HeroBanner = () => {
  return (
    <Stack
      direction={{ md: 'row' }}
      justifyContent={"space-between"}
      alignContent={{ xs: 'middle' }}
      sx={{
        backgroundColor: 'pink',
        height: 'calc(100vh - 107px)'
      }}>
      <Stack direction='row' height={{ xs: '30vh', md: 'calc(100vh - 107px)' }} justifyContent={{ xs: 'start' }} sx={{ overflow: 'hidden', backgroundColor: '#fff687' }}>
        <Image
          src='/art-photo.webp'
          alt="sam's profile photo"
          width={320}
          height={300}
          priority
          className='object-cover'
        />
      </Stack>

      <Stack justifyContent={{ xs: 'space-between', sm: 'center' }} flexGrow={1} height={{ md: 'calc(100vh - 107px)' }}>
        <Stack flexGrow={1} sx={{backgroundColor: '#e6bbff', justifyContent: 'end', paddingX:{xs:2,md:3 } }}><Typography sx={{  fontSize: { xs: '3.5rem', sm: '4rem', md: '5rem', lg: '6rem' } }}>Web <span className='lg:block'>Designer</span></Typography></Stack>
        <Stack flexGrow={1} sx={{backgroundColor: '#fff687' , paddingX:{xs:2,md:3 }}} ><Typography sx={{  textAlign: 'right', fontSize: { xs: '3.5rem', sm: '4rem', md: '5rem', lg: '6rem' } }}>Web Developer</Typography></Stack>
      </Stack>

      <Stack direction='row' height={{ xs: '30vh', md: 'calc(100vh - 107px)' }} justifyContent={{ xs: 'end' }} sx={{ overflow: 'hidden', backgroundColor: '#e6bbff'}}>
        <Image
          src='/logic-photo.webp'
          alt="sam's profile photo"
          width={320}
          height={500}
          priority
          className='object-cover'
        />
      </Stack>


    </Stack>
  )
}
