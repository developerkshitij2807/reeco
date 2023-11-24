import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GenericCard from "src/components/generic/GenericCard";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ProductListTable from "src/components/pages/Main/ProductListTable";

const ProductList = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <GenericCard>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            marginY: 2,
            alignItems: "center",
          }}
        >
          <FormControl sx={{ flexGrow: 1, marginRight: 75 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Search...
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              sx={{ borderRadius: 10 }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <SearchOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            color={"success"}
            variant="outlined"
            sx={{ borderRadius: 20 }}
          >
            Add Item
          </Button>
          <LocalPrintshopOutlinedIcon color="success" />
        </Box>
        <ProductListTable />
      </GenericCard>
    </Grid>
  );
};

export default ProductList;
