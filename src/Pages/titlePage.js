import React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Fade, Grid, Link } from "@mui/material";

import "./titlePage.css";
import "../Fonts/fonts.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

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
                  marginTop: "16px",
                  fontFamily: "Figtree",
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
                      sx={{ fontWeight: "bold" }}
                      color="white"
                    >
                      <div className="glitch-wrapper">
                        <div className="glitch eighties" data-glitch="UNMUTED">
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
              </Grid>
            </>
          )}

          {currentTypography === 1 && (
            <>
              <Fader
                onNextTypography={handleNextTypography}
                intervalTime={8000}
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
                      style={{ fontFamily: "Figtree" }}
                    >
                      Remember, you can exit the journey anytime by clicking the
                      'x' button.
                    </Typography>
                  </Box>
                </Grid>
              </Fader>
            </>
          )}

          <Box
            sx={{
              position: "fixed",
              bottom: "40px",
              right: "40px",
              padding: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              handleNextTypography();
            }}
          >
            <ArrowCircleRightIcon sx={{ fontSize: 82, color: "white" }} />
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default TitlePage;
