import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GenericCard from "src/components/generic/GenericCard";

const ProductDetails = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <GenericCard
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ paddingRight: 2, borderRight: 1 }}>
          <Typography sx={{ fontWeight: 800, color: "#374151" }}>
            Supplier
          </Typography>
          <Typography sx={{ fontWeight: 800, color: "#000000" }}>
            East coast fruits & vegetables
          </Typography>
        </Box>
        <Box sx={{ paddingX: 2, borderRight: 1 }}>
          <Typography sx={{ fontWeight: 800, color: "#374151" }}>
            Shipping Date
          </Typography>
          <Typography sx={{ fontWeight: 800, color: "#000000" }}>
            Thu, 10 Feb
          </Typography>
        </Box>
        <Box sx={{ paddingX: 2, borderRight: 1 }}>
          <Typography sx={{ fontWeight: 800, color: "#374151" }}>
            Total
          </Typography>
          <Typography sx={{ fontWeight: 800, color: "#000000" }}>
            $15,028.3
          </Typography>
        </Box>

        <Box sx={{ paddingX: 2, borderRight: 1 }}>
          <Typography sx={{ fontWeight: 800, color: "#374151" }}>
            Category
          </Typography>
          <Typography sx={{ fontWeight: 800, color: "#000000" }}>
            $15,028.3
          </Typography>
        </Box>
        <Box sx={{ paddingX: 2, borderRight: 1 }}>
          <Typography sx={{ fontWeight: 800, color: "#374151" }}>
            Department
          </Typography>
          <Typography sx={{ fontWeight: 800, color: "#000000" }}>
            300-444-678
          </Typography>
        </Box>
        <Box sx={{ paddingX: 2 }}>
          <Typography sx={{ fontWeight: 800, color: "#374151" }}>
            Status
          </Typography>
          <Typography sx={{ fontWeight: 800, color: "#000000" }}>
            Awaiting your approval
          </Typography>
        </Box>
      </GenericCard>
    </Grid>
  );
};

export default ProductDetails;
