import React from "react";
import { Typography } from "@mui/material";
import Typewriter from "./Typewriter";

const Subtitle = ({ text }) => {
  const subtitleStyle = {};

  return (
    <Typewriter>
      <Typography
        variant="h5"
        sx={{ mt: 48 }}
        style={{
          fontWeight: 500,
          fontStyle: "italic",
          color: "#ffee1a",
          letterSpacing: "0.16em",
          marginBottom: "16px",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        {text}
      </Typography>
    </Typewriter>
  );
};

export default Subtitle;
