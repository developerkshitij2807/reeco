import React from "react";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    green: { main: "#22c55e" },
  },
});

const Header = () => {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const id = "32547ABC";

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Orders
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="text.primary"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Order {id}
    </Link>,
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ boxShadow: 2, paddingX: 22.5, paddingTop: 2 }}>
        <Breadcrumbs separator=">" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 3,
            gap: 1,
          }}
        >
          <Typography sx={{ fontSize: 25, fontWeight: 800, flexGrow: 1 }}>
            Order {id}
          </Typography>

          <Button
            color="success"
            size="small"
            sx={{ borderRadius: 50, border: 1, paddingX: 3 }}
          >
            Book
          </Button>
          <Button
            variant="contained"
            color="success"
            size="small"
            sx={{ borderRadius: 50 }}
          >
            Approve Order
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
