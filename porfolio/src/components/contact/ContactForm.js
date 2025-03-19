'use client';

import { useState } from "react";
import {
  FormControl,
  FormLabel,
  OutlinedInput,
  TextField,
  Button,
  InputAdornment,
  Snackbar,
  Alert,
  Stack,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";


export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Snackbar state
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Email validation function
  const validateMail = () => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    if (!validateMail()) {
      setSnackbar({ open: true, message: "Please enter a valid email address.", severity: "error" });
      return;
    }

    setIsSubmitting(true);

    // const templateParams = {
    //   from_name: `${name} (${email})`,
    //   to_name: "Your Name or Recipient Name",
    //   message: message,
    // };

    // emailjs
    //   .send("gmail", "portfoliositecontact", templateParams, "YOUR_USER_ID")
    //   .then(
    //     (response) => {
    //       setSnackbar({ open: true, message: "Your message has been sent successfully!", severity: "success" });
    //       console.log("SUCCESS!", response.status, response.text);
    //     },
    //     (err) => {
    //       setSnackbar({ open: true, message: "Your message could not be sent.", severity: "error" });
    //       console.error("FAILED...", err);
    //     }
    //   )
    //   .finally(() => {
    //     setIsSubmitting(false);
    //     setName("");
    //     setEmail("");
    //     setMessage("");
    //   });
  };

  return (
        <Stack onSubmit={sendMessage}>
          <FormControl variant="outlined">
            <FormLabel htmlFor="outlined-name">Name</FormLabel>
            <OutlinedInput
              placeholder="Timothy Chalamet"
              id="outlined-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
          </FormControl>

          <FormControl variant="outlined">
            <FormLabel htmlFor="outlined-email">Email</FormLabel>
            <OutlinedInput
              type="email"
              placeholder="timothy@chalamet.com"
              id="outlined-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
          </FormControl>

          <FormControl variant="outlined">
            <FormLabel htmlFor="outlined-message">Message</FormLabel>
            <TextField
              multiline
              rows={3}
              variant="outlined"
              fullWidth
              id="outlined-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              slotProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CommentIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>

          <Button type="submit" variant="contained" disableElevation disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
       

        {/* Snackbar for notifications */}
        <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} variant="filled">
            {snackbar.message}
          </Alert>
        </Snackbar>
        </Stack>    
  );
};
