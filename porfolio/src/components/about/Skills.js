import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';


export default function IconGrid() {
  const icons = [
    { href: 'https://www.flaticon.com/free-icons/html', src: '/html.webp', alt: 'html icon' },
    { href: 'https://www.flaticon.com/free-icons/css', src: '/css.webp', alt: 'css icon' },
    { href: 'https://www.flaticon.com/free-icons/javascript', src: '/js-file.webp', alt: 'javascript icon' },
    { href: 'https://www.flaticon.com/free-icons/wordpress', src: '/wordpress.webp', alt: 'wordpress icon' },
    { href: 'https://iconduck.com/icons/28029/tailwind-css', src: '/tailwind-css.svg', alt: 'tailwind icon' },
    { href: 'https://www.flaticon.com/free-icons/bootstrap', src: '/bootstrap.webp', alt: 'bootstrap icon' },
    { href: 'https://www.flaticon.com/free-icons/scss', src: '/scss.webp', alt: 'scss icon' },
    { href: 'https://www.flaticon.com/free-icons/react', src: '/react-original-wordmark.svg', alt: 'react icon' },
    { href: 'https://iconduck.com/icons/302085/brand-threejs', src: '/brand-threejs.svg', alt: 'three js icon' },
    { href: 'https://www.flaticon.com/free-icons/joomla', src: '/joomla.webp', alt: 'joomla icon' },
    { href: 'https://iconduck.com/icons/39864/figma', src: '/figma.svg', alt: 'figma icon' }
  ];

  return (
    <>
    <Typography variant="h3" sx={{my: 8}}>My Skills</Typography>
    <Box display="flex" justifyContent="center">
      <Grid container spacing={2} justifyContent="center">
        {icons.map((icon, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} display="flex" justifyContent="center">
            <a href={icon.href} title={icon.alt} target="_blank" rel="noopener noreferrer">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={150}
                height={150}
                priority
              />
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
}