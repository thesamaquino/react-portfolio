import {
  Box,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";

export const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        maxWidth: 1248,
        width: "100%",
        mx: "auto",
        paddingTop: '150px',
        paddingBottom: 8
      }}
      direction={{ md: "row" }}
      spacing={4}
    >
      {/* leftside of the contact */}

      <Typography variant="h2">Let&rsquo;s Connect</Typography>
      <Skeleton sx={{ backgroundColor: "#fff687", width: '40%' }} />
      <Skeleton sx={{ backgroundColor: "#e6bbff", width: '95%', marginLeft: 'auto' }} />
      <Stack spacing={3} sx={{ paddingX: { xs: 1, sm: 2, md: 4, lg: 8 }, paddingY: 4 }} >
        <Typography sx={{ fontSize: '2rem' }}>
          Did I successfully manage to come across as interesting and you wanna connect?
        </Typography>
        <Typography sx={{ fontSize: '2rem' }}>
          Join my legion (kidding). I would love to share thoughts and connect with you. Let&apos;s connect through my socials below!
        </Typography>
        {/* icons */}
        <Stack direction="row" spacing={3}>
          <Link href="https://www.linkedin.com/in/sheilaaquino92/" target="_blank" aria-label="View my Linkedin Profile">
            <IconButton size="large" sx={{ color: '#ff4d6d' }} aria-label="LinkedIn Icon" title="Visit my LinkedIn profile">
              <LinkedInIcon sx={{ fontSize: "2.5rem" }} />
            </IconButton>
          </Link>
          <Link href="https://github.com/smaq92" target="_blank" aria-label="View my Github Profile">
            <IconButton size="large" sx={{ color: '#ff4d6d' }} aria-label="Github Icon">
              <GitHubIcon sx={{ fontSize: "2.5rem" }} title="Visit my Github Profile" />
            </IconButton>
          </Link>
        </Stack>
        {/* end of icons */}
      </Stack>
      {/* end of left side */}

    </Box>
  );
}
