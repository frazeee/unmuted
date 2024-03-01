import React, { useState, useEffect } from "react";
import { Typography, Paper, TextField, Button, Grid } from "@mui/material";
import "./styles.css"; // Import the external CSS file

const PageThree = () => {
  const [showFirstTypography, setShowFirstTypography] = useState(true);
  const [showSecondTypography, setShowSecondTypography] = useState(false);
  const [showThirdTypography, setShowThirdTypography] = useState(false);
  const [showPaper, setShowPaper] = useState(false);
  const [userName, setUsername] = useState("");

  const handleSubmit = (event) => {
      setShowPaper(false);
      setShowThirdTypography(true)
  };

  useEffect(() => {
    const firstTimeout = setTimeout(() => {
      setShowFirstTypography(false);
      setShowSecondTypography(true);
      setShowPaper(false);
    }, 5000); // 5 seconds

    const secondTimeout = setTimeout(() => {
      setShowSecondTypography(false);
      setShowPaper(true);
    }, 10000); // 10 seconds

    return () => {
      clearTimeout(firstTimeout);
      clearTimeout(secondTimeout);
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className={showFirstTypography ? "fade-in" : "fade-out"}
        style={{ textAlign: "center" }}
      >
        {showFirstTypography && (
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>
            You are about to follow a young woman to a path of healing.
          </Typography>
        )}
      </div>
      <div
        className={showSecondTypography ? "fade-in" : "fade-out"}
        style={{ textAlign: "center" }}
      >
        {showSecondTypography && (
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>
            Let your decisions be her guide.
          </Typography>
        )}
      </div>
      {showPaper && (
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
              className={showPaper ? "fade-in" : "fade-out"}
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
        className={showThirdTypography ? "fade-in" : "fade-out"}
        style={{ textAlign: "center" }}
      >
        {showThirdTypography && (
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>
            {userName}, that's a great name.
          </Typography>
        )}
      </div>
    </div>
  );
};

export default PageThree;
