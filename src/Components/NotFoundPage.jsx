import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Container sx={{ textAlign: "center", marginTop: "100px" }}>
      <Typography variant="h1" component="h2" gutterBottom>
        Not Character Found
      </Typography>
      <Typography variant="body1" paragraph>
        Sorry, the page you are looking for does not exist
      </Typography>
      {/* <Button component={Link} to="/" variant="contained" color="primary">
        Back
      </Button> */}
    </Container>
  );
}
