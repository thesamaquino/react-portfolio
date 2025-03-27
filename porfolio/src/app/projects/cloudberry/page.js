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
          Farm Design Project
        </Typography>
        <Skeleton sx={{backgroundColor: "#fff687", width: '40%'}}/>
        <Skeleton sx={{backgroundColor: "#e6bbff", width: '95%', marginLeft: 'auto'}}/>
        
       
        <Typography 
             variant="h5" component="p" 
          sx={{ my: 5, px: 2 }}
        >
          This is an academic project where we design a farm website named Cloudberry from scratch using the wireframing library from Figma.
        </Typography>
        
       
        <Box sx={{ mb: 5 }}>
          <iframe 
            style={{ 
              border: "1px solid rgba(0, 0, 0, 0.1)", 
              borderRadius: '8px' 
            }}
            width="100%" 
            height="500" 
            src="https://embed.figma.com/design/eHs0UpyBATyoySyIZI9n8V/Wireframe?node-id=1530-4611&embed-host=share" 
            allowFullScreen
          ></iframe>
        </Box>

     
        <Typography 
             variant="h5" component="p" 
          sx={{ mb: 5, px: 2 }}
        >
          For the second part, we were tasked to make a hi-fidelity wireframe using a given layout by the Instructor.
        </Typography>

     
        <Box sx={{ mb: 5 }}>
          <iframe 
            style={{ 
              border: "1px solid rgba(0, 0, 0, 0.1)", 
              borderRadius: '8px'
            }} 
            width="100%" 
            height="800" 
            src="https://www.figma.com/design/U1piprHnEkQxSxOrPazG7j/Design-Composition-Assignment---Starter-Files-(1)?node-id=24-88&t=wXTWFYplTgTCBPx0-1" 
            allowFullScreen
          ></iframe>



        <Typography 
          variant="h5" component="p" 
          sx={{ my: 5, px: 2 }}
        >
          At the end of this project, I became familiar with Figma&apos;s features: text styles, grid, components and the vast offerings of Figma&apos;s community library. 
        </Typography>

        <Stack direction="row" justifyContent="space-between" width="100%" mt={4}>
        <Link href="/projects/swatchlab" >
        <Button variant="contained" sx={{backgroundColor:"#fff687", color: "#000000"
         }}>Previous Project</Button>
        </Link>
        <Link href="/projects/focus" >
        <Button variant="contained" sx={{backgroundColor:"#e6bbff", color: "#000000"
         }}>Next Project</Button>
        </Link>
      </Stack>

        </Box>
      </Box>
    </>
  );
}

