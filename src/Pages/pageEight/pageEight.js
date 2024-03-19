import React, { useState, useEffect } from "react";

import {
  Typography,
  Box,
  Container,
  Grid,
  Button,
  Snackbar,
} from "@mui/material";
import Arrow from "../../Components/Arrow";
import Background from "../../Backgrounds/14.2B.png";

import Fader from "../../Components/Fader";

const PageEight = ({ userName, onProceed }) => {
  const [currentTypography, setCurrentTypography] = useState(0);

  const handleNextTypography = () => {
    setCurrentTypography((currentTypography) => currentTypography + 1);
  };

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopyLink = () => {
    const currentLink = window.location.href;
    navigator.clipboard
      .writeText(currentLink)
      .then(() => {
        setSnackbarOpen(true);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {currentTypography === 0 && (
        <>
          <div
            style={{
              backgroundImage: `url(${Background})`,
              backgroundSize: "cover",
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <Container maxWidth="lg">
              <Fader
                onNextTypography={handleNextTypography}
                intervalTime={500000000}
              >
                <Typography
                  variant="h4"
                  sx={{
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    fontFamily: "Figtree",
                    fontWeight: "400",
                  }}
                  gutterBottom
                >
                  Remember, don't hesitate to turn to caring friends and family
                  for support. Having them around can make a big difference in
                  dealing with tough situations.
                </Typography>
              </Fader>
            </Container>
          </div>
        </>
      )}

      {currentTypography === 1 && (
        <>
          <div
            style={{
              backgroundImage: `url(${Background})`,
              backgroundSize: "cover",
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <Container maxWidth="lg">
              <Fader
                onNextTypography={handleNextTypography}
                intervalTime={500000000}
              >
                <Typography
                  variant="h4"
                  sx={{
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    fontFamily: "Figtree",
                    fontWeight: "400",
                  }}
                  gutterBottom
                >
                  It's time to unmute and let your voice be heard. When we share
                  our stories and listen to each other, we create a powerful
                  force for healing.
                </Typography>
              </Fader>
            </Container>
          </div>
        </>
      )}
      {currentTypography === 2 && (
        <div
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <Container maxWidth="lg">
            <Fader
              onNextTypography={handleNextTypography}
              intervalTime={500000000}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  fontFamily: "Figtree",
                  fontWeight: "400",
                }}
              >
                United, we can create a world where all voices matter and
                justice prevails.
              </Typography>
            </Fader>
          </Container>
        </div>
      )}
      {currentTypography === 3 && (
        <div
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <Container maxWidth="lg">
            <Fader
              onNextTypography={handleNextTypography}
              intervalTime={5000000000000}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#ffee1a",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  fontFamily: "Figtree",
                  fontWeight: "400",
                  mb: 5,
                }}
              >
                If you or someone you know has encountered sexual harassment,
                there are organizations and experts ready to help.
              </Typography>
              <Grid container spacing={5}>
                <Grid item xs={12} md={4} alignItems="center">
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                      fontWeight: "bold",
                    }}
                    gutterBottom
                  >
                    For Legal Action and Support
                  </Typography>
                  <Button
                    variant="outlined"
                    style={{
                      textTransform: "none",
                      boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                      width: "100%",
                      height: "31%"
                    }}
                    sx={{ fontSize: "20px", mb: 2 }}
                    onClick={() =>
                      window.open("https://cybercrime.doj.gov.ph", "_blank")
                    }
                  >
                    Office of the Cybercrime
                  </Button>

                  <Button
                    variant="outlined"
                    style={{
                      textTransform: "none",
                      boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                    }}
                    sx={{ fontSize: "20px" }}
                    onClick={() =>
                      window.open(
                        "https://dict.gov.ph/cybercrime-investigation-and-coordinating-center-cicc/",
                        "_blank"
                      )
                    }
                  >
                    Cybercrime Investigation and Coordinating Center
                  </Button>
                </Grid>
                <Grid item xs={12} md={4} alignItems="center">
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                      fontWeight: "bold",
                    }}
                    gutterBottom
                  >
                    De La Salle University Units
                  </Typography>{" "}
                  <Button
                    variant="outlined"
                    style={{
                      textTransform: "none",
                      boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                    }}
                    sx={{ fontSize: "20px", mb: 2, px: 2 }}
                    onClick={() =>
                      window.open(
                        "https://www.dlsu.edu.ph/offices/osa/occs-home/",
                        "_blank"
                      )
                    }
                    gutterBottom
                  >
                    Office of Counseling and Career Services
                  </Button>
                  <Button
                    variant="outlined"
                    style={{
                      textTransform: "none",
                      boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                    }}
                    sx={{ fontSize: "20px", mb: 5, px: 2 }}
                    onClick={() =>
                      window.open("https://www.facebook.com/LCIDW/", "_blank")
                    }
                  >
                    Lasallian Center for Inclusion, Diversity, and Wellbeing
                  </Button>
                </Grid>
                <Grid item xs={12} md={4} alignItems="center">
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                      fontWeight: "bold",
                    }}
                    gutterBottom
                  >
                    For Psychological Services
                  </Typography>
                  <Button
                    variant="outlined"
                    style={{
                      textTransform: "none",
                      boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                      width: "100%",
                      height: "31%"
                    }}
                    sx={{ fontSize: "20px", mb: 2,  }}
                    onClick={() =>
                      window.open("https://www.fullypsych.com/", "_blank")
                    }
                  >
                    Fully Psych
                  </Button>
                  <Button
                    variant="outlined"
                    style={{
                      textTransform: "none",
                      boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                    }}
                    sx={{ fontSize: "20px", px: 5 }}
                    onClick={() => window.open("https://ncmh.gov.ph", "_blank")}
                  >
                    The National Center of Mental Health
                  </Button>
                </Grid>
                <Grid item xs={12} md={12} alignItems="center">
                  {" "}
                  <Button
                    variant="outlined"
                    style={{
                      color: "#ffee1a",
                      borderColor: "#ffee1a",
                      boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                      fontWeight: "400"
                    }}
                    sx={{ fontSize: "20px", px: 2, mb: 3, mt: -3 }}
                    onClick={() => {
                      window.open(
                        "https://pcw.gov.ph/faq-republic-act-no-11313/",
                        "_blank"
                      );
                    }}
                  >
                    Read more about the Safe Spaces Act (Bawal Bastos Law)
                  </Button>
                </Grid>
                <Grid item xs={12} md={12} alignItems="center">
                  {" "}
                  <Button
                    variant="outlined"
                    style={{
                      width: "40%",
                      boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                      fontWeight: "400"
                    }}
                    sx={{ fontSize: "20px" }}
                    onClick={handleCopyLink}
                  >
                    Click to share with your friends
                  </Button>
                  <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                    message="Link copied!"
                  />
                </Grid>
              </Grid>
            </Fader>
          </Container>
        </div>
      )}

      {![3, 4].includes(currentTypography) && (
        <Box
          sx={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={handleNextTypography}
        >
          <Arrow />
        </Box>
      )}
    </div>
  );
};

export default PageEight;
