import React, { useState } from "react";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { productDetails } from "src/constants";
import ProductEditModal from "src/components/pages/Main/ProductEditModal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: "#22c55e",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const headers = [
  "Product name",
  "Brand",
  "Price",
  "Quantity",
  "Total",
  "",
  "Status",
];

const ProductListTable = () => {
  const [productItems, setProductItems] = useState(productDetails);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCheckButtonClick = (e, id) => {
    e.preventDefault();

    const newProductItems = productItems.map((product, index) => {
      if (id === index) {
        return {
          ...product,
          status: "success",
        };
      } else return product;
    });

    setProductItems(newProductItems);
  };

  const handleCloseButtonClick = (e, id) => {
    e.preventDefault();

    const newProductItems = productItems.map((product, index) => {
      if (id === index) {
        return {
          ...product,
          status: "error",
        };
      } else return product;
    });

    setProductItems(newProductItems);
  };

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  return (
    <TableContainer
      component={Paper}
      sx={{ borderTopLeftRadius: 20, borderTopRightRadius: 10, boxShadow: 3 }}
    >
      <Table
        sx={{
          minWidth: 650,
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <StyledTableCell key={index} align={index === 5 ? "right" : ""}>
                {header}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {productItems.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.brand.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.quantity * product.price}</TableCell>
              <TableCell>
                {product.status && (
                  <Button
                    color={product.status}
                    variant="contained"
                    sx={{ borderRadius: 50, flexShrink: 1, width: "40%" }}
                  >
                    {product.status === "success"
                      ? "Approved"
                      : product.status === "error"
                      ? "Missing"
                      : ""}
                  </Button>
                )}
              </TableCell>
              <TableCell align="right" sx={{ backgroundColor: "lightgray" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <IconButton>
                    <CheckOutlinedIcon
                      onClick={(e) => handleCheckButtonClick(e, index)}
                      color={
                        product.status === "success" ? "success" : "inherit"
                      }
                    />
                  </IconButton>
                  <IconButton>
                    <CloseOutlinedIcon
                      onClick={(e) => handleCloseButtonClick(e, index)}
                      color={product.status === "error" ? "error" : "inherit"}
                    />
                  </IconButton>
                  <Button color="inherit" onClick={handleModalOpen}>
                    Edit
                  </Button>
                </Box>
                <ProductEditModal
                  open={modalOpen}
                  handleClose={handleModalClose}
                  description={product.description}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductListTable;
