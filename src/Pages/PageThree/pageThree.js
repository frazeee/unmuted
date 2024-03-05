import React, { useState, useEffect } from "react";
import {
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  SvgIcon,
  Box,
} from "@mui/material";
import "./styles.css"; // Import the external CSS file
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import Typewriter from "../Typewriter";

const PageThree = () => {
  const [currentTypography, setCurrentTypography] = useState(0);
  const [userName, setUsername] = useState("");

  const handleSubmit = (event) => {
    handleNextTypography();
  };

  const handleNextTypography = () => {
    setCurrentTypography(currentTypography + 1);
  };

  return (
    <>
      <Box
        position="absolute"
        top={0}
        right={0}
        p={2}
      >
        <ArrowForwardSharpIcon sx={{ color: "white", width: "50px", height: "50px" }} onClick = {handleNextTypography} />
      </Box>

      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className={currentTypography === 0 ? "fade-in" : "fade-out"}
          style={{ textAlign: "center" }}
        >
          {currentTypography === 0 && (
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              You are about to follow a young woman to a path of healing.
            </Typography>
          )}
        </div>
        <div
          className={currentTypography === 1 ? "fade-in" : "fade-out"}
          style={{ textAlign: "center" }}
        >
          {currentTypography === 1 && (
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              Let your decisions be her guide.
            </Typography>
          )}
        </div>
        {currentTypography === 2 && (
          <>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              style={{ height: "100vh" }}
            >
              <Paper
                sx={{ mt: 48 }}
                elevation={3}
                className={currentTypography === 2 ? "fade-in" : "fade-out"}
                style={{ width: "50%", padding: "20px", textAlign: "center" }}
              >
                <Typography variant="h4" gutterBottom>
                  Here she is.
                </Typography>
                <Typography variant="h5" gutterBottom>
                  What's her name?
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={userName}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  style={{ marginTop: "10px", borderRadius: "15px" }}
                >
                  Continue
                </Button>
              </Paper>
            </Grid>
          </>
        )}

        <div
          className={currentTypography === 3 ? "fade-in" : "fade-out"}
          style={{ textAlign: "center" }}
        >
          {currentTypography === 3 && (
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              {userName}, what a beautiful name!
            </Typography>
          )}
        </div>

        <div style={{ textAlign: "center" }}>
          {currentTypography === 4 && (
            <Typewriter text="73% of Filipinos are social media users. Gen Z, aged 18 to 24, is the largest segment." />
          )}
        </div>

        <div style={{ textAlign: "center" }}>
          {currentTypography === 5 && (
         <Typewriter text={`${userName}, belongs to this demographic.`} />
          )}
        </div>
      </div>
    </>
  );
};

export default PageThree;
