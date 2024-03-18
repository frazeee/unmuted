import React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Grid, Button, Link } from "@mui/material";

import "./titlePage.css";
import "../Fonts/fonts.css";
import Arrow from "../Components/Arrow.js";

import backgroundVideo from "../Backgrounds/TitleVideo.mp4";
import Fader from "../Components/Fader";

const TitlePage = ({ onProceed, onPlayPause }) => {
  const [currentTypography, setCurrentTypography] = useState(0);

  const handleNextTypography = () => {
    setCurrentTypography((currentTypography) => currentTypography + 1);
    if (currentTypography + 1 === 2) {
      onProceed();
      onPlayPause();
    }
  };

  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            color: "white",
          }}
        >
          {currentTypography === 0 && (
            <>
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  marginTop: "100px",
                  fontFamily: "Figtree",
                  fontWeight: "400",
                }}
              >
                <Link href="#" color="inherit">
                  About the Project
                </Link>
                <Link href="#" color="inherit" sx={{ marginLeft: 3 }}>
                  References
                </Link>
              </div>

              <Grid item lg={8}>
                <Box sx={{ textAlign: "center" }}>
                  <div className="glitch-wrapper">
                    <Typography
                      variant="h1"
                      sx={{
                        fontWeight: "bold",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      }}
                      color="white"
                    >
                      <div className="glitch-wrapper">
                        <div className="glitch redHat" data-glitch="UNMUTED">
                          UNMUTED
                        </div>
                      </div>
                    </Typography>
                  </div>
                  <Typography
                    variant="h5"
                    color="white"
                    style={{ fontFamily: "Figtree" }}
                  >
                    Her story is silenced.
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ mb: 3 }}
                    color="white"
                    style={{ fontFamily: "Figtree" }}
                  >
                    {" "}
                    Will you be the one to unmute it?
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  sx={{ fontSize: "24px", px: 3, mx: "auto", display: "block" }}
                  style={{
                    boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    fontFamily: "Figtree",
                  }}
                  onClick={handleNextTypography}
                >
                  START
                </Button>
              </Grid>
            </>
          )}

          {currentTypography === 1 && (
            <>
              <Fader
                onNextTypography={handleNextTypography}
                intervalTime={800000000}
              >
                <Grid item lg={8}>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h5"
                      color="white"
                      style={{
                        fontFamily: "Figtree",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      }}
                    >
                      This project may contain information that is painful or
                      difficult to read for some individuals.
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ mb: 3 }}
                      color="white"
                      style={{
                        fontFamily: "Figtree",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      }}
                    >
                      We advise caution and encourage those who may be sensitive
                      to such content to consider their well-being before
                      engaging.
                    </Typography>

                    <Typography
                      variant="h5"
                      sx={{ mb: 3 }}
                      color="white"
                      style={{
                        fontFamily: "Figtree",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      }}
                    >
                      Remember, you can exit the journey anytime by closing the browser.
                    </Typography>
                  </Box>
                </Grid>
              </Fader>
            </>
          )}

          {![0].includes(currentTypography) && (
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
      </Container>
    </div>
  );
};

export default TitlePage;
