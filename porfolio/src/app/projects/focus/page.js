


import { Navbar } from "@/components/Navbar";
import { Box, Button, Skeleton, Stack, Typography } from "@mui/material";
import Link from "next/link";


export default function Focus() {
  return (
    <>
      <Navbar />
      <Box 
        sx={{
          maxWidth: 1248,
          minWidth: 320,
          width: "100%", 
          mx: "auto", 
          pt: '100px', 
          pb: 8,
          px: 8,        

        }}
      >
    
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            mb: 3,
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" }, 
            wordWrap: "break-word" 
          }}  
        >
          Photography Website Design Project
        </Typography>
        <Skeleton sx={{backgroundColor: "#fff687", width: '40%'}}/>
        <Skeleton sx={{backgroundColor: "#e6bbff", width: '95%', marginLeft: 'auto'}}/>
        
     
        <Typography 
             variant="h5" component="p" 
          sx={{ my: 5, px: 2 }} 
        >
          This is an academic project where we were tasked to make a hi-fidelity landing page and style guide for a photography club named FOCUS. 
        </Typography>
       
        <Box sx={{ mb: 5 }}>
          <iframe 
            style={{ 
              border: "1px solid rgba(0, 0, 0, 0.1)", 
              borderRadius: '8px' 
            }} 
            width="100%" 
            height="800" 
            src="https://embed.figma.com/design/O1SlUMjAApF1Bv97IvKell/HIgh-Fidelitey-Landing-Page-(Copy)?node-id=0-1&embed-host=share" 
            allowFullScreen
          ></iframe>

        <Typography 
          variant="h5" component="p" 
          sx={{ my: 5, px: 2 }}
        >
          This is one of the challenging projects I&apos;ve had at NAIT. It&apos;s difficult to come up with a modern design that encapsulates the branding of the club. I&apos;ve learned how to make a styleguide, got more familiar with figma&apos;s variables, components and accessibiltiy rules (color contrast).
        </Typography>

        <Stack direction="row" justifyContent="space-between" width="100%" mt={4}>
        <Link href="/projects/cloudberry" >
        <Button variant="contained" sx={{backgroundColor:"#fff687", color: "#000000"
         }}>Previous Project</Button>
        </Link>
        <Link href="/projects/something-big" >
        <Button variant="contained" sx={{backgroundColor:"#e6bbff", color: "#000000"
         }}>Next Project</Button>
        </Link>
      </Stack>
        </Box>
      </Box>
    </>
  );
}
