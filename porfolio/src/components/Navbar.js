'use client';
import { AppBar, Box, IconButton, List, ListItem,  Stack, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const nav = [
    {link: '#about', title: 'About Me'},
    {link: '#projects', title: 'My Projects'},
    {link: '#contact', title: "Let's connect"}
  ];
  const NavItems = (
    <List 
    sx={{
      maxWidth: 1248,
      width: "100%",
      mx: "auto",
      paddingY: 8,
      height: 'calc(100vh - 98px)'
    }}>
      {nav.map((navItem, index) => (
        
          <ListItem key={index}
          sx={{
            '&:hover': {
              backgroundColor: 'white', 
              color: '#ff4d6d',  
            },
          }}
          >
            <Link 
              href={navItem.link}
            > 
              <Typography
              sx={{
                textDecoration: 'none',
                display: 'block',
                padding: '8px 16px',
                fontSize: {xs: '3rem', sm: '4rem', md:'6rem', lg: '7rem'}
              }}
            >
              {navItem.title}
            </Typography></Link>
          </ListItem>
      ))}

    </List>
  );


  return (
    <>
      <AppBar position="sticky" 
      sx={{
        zIndex: 200,
        backgroundColor: "pink",
        border: isOpen && 'none',
        boxShadow: isOpen && 'none',
        transition: 'all 300ms ease-in-out '
      }}>
        <Toolbar sx={{ maxWidth: 1248, width: "100%", mx: "auto", paddingY: 2, position: 'sticky'  }}>
          {/* <Typography
            variant="h1"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: 'block', fontSize:{xs: '3rem', sm: '4rem',}}}
            color='black'
          >
            Sam
          </Typography> */}
           <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Image
        src="/horizontal-logo.svg" // Replace with the actual path to your logo
        alt="Logo"
        width={100} // Specify the width
        height={40} // Specify the height
        priority // Ensures the logo is loaded early for better LCP
        style={{
          objectFit: "contain", // Maintain aspect ratio
        }}
      />
    </Box>
          <IconButton
            size="large"
            edge="start"
            color="rgba(0,0,0,0.54)"
            aria-label="open drawer"
            sx={{
               mr: 2
               }}
            onClick={handleClick}
          >
            {
              isOpen ? <CloseIcon sx={{fontSize: '3rem'}} /> : <MenuIcon sx={{fontSize: '3rem'}} />
            }

          </IconButton>
        </Toolbar>
      </AppBar>
     <Stack  
          sx={{
            position: 'fixed',
            zIndex: 100,
            top: 64,
            left: 0,
            width: '100%',
            backgroundColor: "pink",
            p: 2,
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
            transition: "opacity 300ms ease-in-out, transform 300ms ease-in-out"  ,
          }}
          elevation={4}
          onClick={handleClick}
        >
          {NavItems}
        </Stack>
      
    </>
  )
}
