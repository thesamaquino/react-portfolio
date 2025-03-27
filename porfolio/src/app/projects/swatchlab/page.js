


import { Navbar } from "@/components/Navbar";
import { Box, Button, ImageList, ImageListItem, Skeleton, Stack, Typography } from "@mui/material";
import Link from "next/link";


export default function Swatchlab() {
  const itemData = [
    { img: '/swatchlab-admin.png', title: 'Swatchlab Admin Page' },
    { img: '/swatchlab-add-fabric.png', title: 'Swatchlab Add Fabric Page' },
    { img: '/swatchlab-fabric-gallery.png', title: 'Swatchlab Fabric Gallery Page' },
    { img: '/swatchlab-delete-funfact.png', title: 'Swatchlab Delete Fun Fact  Page' },
  ];

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
    
        <Stack direction="row" spacing={4} sx={{alignItems: "center"}}>
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            mb: 3,
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" }, 
            wordWrap: "break-word" 
          }}  
    
        >
          Gallery Website
        </Typography>
        <Link href="https://sheaqu.dreamhosters.com/portfolio/public/" passHref>
        <Button variant="contained" sx={{backgroundColor:"pink", color: "#000000"
         }}>View Website</Button>
        </Link>
        </Stack>
       
        <Skeleton sx={{backgroundColor: "#fff687", width: '40%'}}/>
        <Skeleton sx={{backgroundColor: "#e6bbff", width: '95%', marginLeft: 'auto'}}/>
        
     
        <Typography 
             variant="h5" component="p" 
          sx={{ my: 5, px: 2 }} 
        >
          This is an academic project where we were tasked to create and design our own CRUD Application.
        </Typography>

        <Box sx={{ width: '100%', height: 'auto', overflowY: 'scroll', padding: 2 }}>
      <ImageList
        variant="masonry"
        sx={{
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)', // 1 column on small screens
            sm: 'repeat(2, 1fr)', // 2 columns on small-medium screens
            md: 'repeat(3, 1fr)', // 3 columns on medium screens
          },
          gap: 8,
        }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>

        
       
        <Typography 
          variant="h5" component="p" 
          sx={{ my: 5, px: 2 }}
        >
         I chose to make a Fabric Catalogue where an authenticated user can add, edit and delete fabric and fun facts. This project taught me the ins and outs of PHP as well as best UX/UI design best practices. 
        </Typography>

        <Stack direction="row" justifyContent="space-between" width="100%" mt={4}>
        <Link href="/projects/something-big" >
        <Button variant="contained" sx={{backgroundColor:"#fff687", color: "#000000"
         }}>Previous Project</Button>
        </Link>
        <Link href="/projects/cloudberry" >
        <Button variant="contained" sx={{backgroundColor:"#e6bbff", color: "#000000"
         }}>Next Project</Button>
        </Link>
      </Stack>
        </Box>
    </>
  );
}
