'use client';

import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemText, Stack, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const nav = ['About Me', 'Projects', "Let's connect"];
  const NavItems = (
    <List 
    sx={{
      height: 'calc(100vh - 98px)'
    }}>
      {nav.map((text, index) => (
        
          <ListItem key={index}
          sx={{
            '&:hover': {
              backgroundColor: 'white', // Hover background color for the whole ListItem
              color: 'secondary.main',  // Optional: Change the text color on hover
            },
          }}
          >
            <Link 
              href="#" 
            > 
              
              <Typography
              variant="h4"
              sx={{
                textDecoration: 'none',
                display: 'block',
                padding: '8px 16px',
                /* '&:hover': {
                  backgroundColor: 'white',
                  color: 'secondary.main',
                }, */
              }}
            >
              {text}
            </Typography></Link>
          </ListItem>
      ))}

    </List>
  );


  return (
    <>
      <AppBar position="relative" 
      sx={{
        zIndex: 20,
        backgroundColor: "pink",
        border: isOpen && 'none',
        boxShadow: isOpen && 'none',
        transition: 'all 300ms ease-in-out '
      }}>
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: 'block' }}
          >
            Sam Aquino
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
               mr: 2,
               }}
            onClick={handleClick}
          >
            {
              isOpen ? <CloseIcon sx={{fontSize: '2.5rem'}} /> : <MenuIcon sx={{fontSize: '2.5rem'}} />
            }

          </IconButton>
        </Toolbar>
      </AppBar>
     <Stack
          sx={{
            position: 'absolute',
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
