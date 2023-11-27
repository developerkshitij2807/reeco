import React, { useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import IconButton from "@mui/material/IconButton";


import { Grid, Typography } from "@mui/material";

const ProductEditModal = ({
  open,
  handleClose,
  description,
  name,
  price: initialPrice,
  quantity: initialQuantity,
}) => {
  const [price, setPrice] = useState(initialPrice);
  const [quantity, setQuantity] = useState(initialQuantity);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "75%",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          borderRadius: 10,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={handleClose}>
            <CloseOutlinedIcon />
          </IconButton>
        </Box>
        <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
          {description}
        </Typography>
        <Typography sx={{ fontSize: 15, fontWeight: 100, marginBottom: 2 }}>
          {name}
        </Typography>
        <Grid container spacing={2} sx={{ alignItems: "center" }}>
          <Grid item xs={4}>
            Image here
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginY: 1,
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontWeight: 100 }}>Price ($)</Typography>
              <TextField
                id="outlined-basic"
                label="Price"
                variant="outlined"
                color="success"
                sx={{ width: "40%" }}
                value={price}
                InputProps={{ sx: { borderRadius: 7.5 } }}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginY: 2,
              }}
            >
              <Typography sx={{ fontWeight: 100 }}>Quantity</Typography>

              <TextField
                id="outlined-basic"
                label="Quantity"
                variant="outlined"
                color="success"
                value={quantity}
                sx={{ width: "40%" }}
                InputProps={{ sx: { borderRadius: 7.5 } }}
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginY: 1,
              }}
            >
              <Typography sx={{ fontWeight: 100 }}>Total</Typography>
              <Typography sx={{ fontWeight: 100 }}>
                {price * quantity}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "end", gap: 2 }}>
          <Button
            variant="outlined"
            color="success"
            sx={{ borderRadius: 10 }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: 10 }}
            onClick={handleClose}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProductEditModal;
