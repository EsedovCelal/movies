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

// import * as React from "react";
// import { AppBar, Box, Typography, Toolbar, Link, Button } from "@mui/material";

// const navItems = ["character", "episodes", "locations"];

// function Navbar() {
//   return (
//     <Box>
//       <AppBar
//         sx={{
//           backgroundColor: "#1A1A1D",
//         }}
//       >
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 2 }}>
//             <Link style={{ color: "danger" }} href="/character">
//               <Button size="md" sx={{ color: "#FA5D29" }}>
//                 Rick And Morty
//               </Button>
//             </Link>
//           </Typography>
//           <Box>
//             {navItems.map((item) => (
//               <Link key={item} href={`/${item}`}>
//                 <Button sx={{ color: "#FA5D29" }}>{item}</Button>
//               </Link>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// export default Navbar;
