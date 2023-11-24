import React from "react";
import Card from "@mui/material/Card";

const GenericCard = ({ children, style }) => {
  return (
    <Card
      sx={{
        marginY: 5,
        width: "80%",
        padding: 2,
        borderRadius: 2,
        ...style,
      }}
    >
      {children}
    </Card>
  );
};

export default GenericCard;
