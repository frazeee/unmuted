import React from "react";
import { Typography } from "@mui/material";

const Subtitle = ({ text }) => {
  const subtitleStyle = {};

  return (
    <Typography
    variant="h5"
    sx={{mt: 48}}
      style={{
        fontWeight: 400,
        fontStyle: "italic" ,
        color: "#ffee1a", // Netflix subtitle color
        textTransform: "uppercase",
        letterSpacing: "0.16em",
        marginBottom: "16px",
        backgroundColor: "black"
      }}
    >
      {text}
    </Typography>
  );
};

export default Subtitle;
