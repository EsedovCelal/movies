import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Link } from "@mui/material";

const Navbar = () => {
  const navItems = ["character", "episodes", "locations"];
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          backgroundColor: "#1A1A1D",
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link style={{ color: "danger" }} href="/character">
            <Button size="md" sx={{ color: "#FA5D29" }}>
              Rick And Morty
            </Button>
          </Link>
        </Typography>
        <Box>
          {navItems.map((item) => (
            <Link key={item} href={`/${item}`}>
              <Button sx={{ color: "#FA5D29" }}>{item}</Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
