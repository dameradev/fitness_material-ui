import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h1" component="h2" color="inherit">
          h1. Heading
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

//  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//         <MenuIcon />
//       </IconButton>
//       <Typography variant="h6" className={classes.title}>
//         Photos
//       </Typography>
//       {auth && (
//         <div>
//           <IconButton
//             aria-label="account of current user"
//             aria-controls="menu-appbar"
//             aria-haspopup="true"
//             onClick={handleMenu}
//             color="inherit"
//           >
//             <AccountCircle />
//           </IconButton>
//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorEl}
//             anchorOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             open={open}
//             onClose={handleClose}
//           >
//             <MenuItem onClick={handleClose}>Profile</MenuItem>
//             <MenuItem onClick={handleClose}>My account</MenuItem>
//           </Menu>
//         </div>
//       )}
