import React, { useState, useEffect } from "react";

import Typewriter from "../../Components/Typewriter";

import "./styles.css";

import { Typography, Button, Box, Grid, Item, Container } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import WhiteGrunge from "../../Backgrounds/WhiteGrunge.png";
import Background from "../../Backgrounds/Slide11-12.png";
import Background2 from "../../Backgrounds/Slide13.jpg";
import Subtitle from "../../Components/Subtitle";

const PageFour = ({ userName, onProceed }) => {
  const [currentTypography, setCurrentTypography] = useState(0);

  const handleNextTypography = () => {
    setCurrentTypography(currentTypography + 1);
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {currentTypography === 0 && (
          <div
            className="typewriter-container"
            style={{
              backgroundImage: `url(${WhiteGrunge})`,
            }}
          >
            <Typewriter
              text="Nearly 7 in 10 girls and young women in the Philippines have experienced harassment on social media.
These harassments happen frequently."
            />
          </div>
        )}

        {currentTypography === 1 && (
          <div
            className="typewriter-container"
            style={{
              backgroundImage: `url(${WhiteGrunge})`,
            }}
          >
            <Typewriter
              text={`Sadly, ${userName} is one of them, and her past haunts her.`}
            />
          </div>
        )}

        {currentTypography === 2 && (
          <div
            className="fade-in"
            style={{
              backgroundImage: `url(${Background})`,
              backgroundSize: "cover",
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "opacity 2s ease",
              fontFamily: "Figtree",
            }}
          >
            <div>
              <Container lg>
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  One afternoon, {userName} scrolls through her social media
                  feed, hoping to unwind after a long day.
                </Typography>
              </Container>
            </div>
          </div>
        )}
        {currentTypography === 3 && (
          <div
            className="fade-in"
            style={{
              backgroundImage: `url(${Background2})`,
              backgroundSize: "cover",
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Figtree",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Container maxWidth="md">
                {/* First block */}
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    transition: "opacity 1s ease-in-out", // CSS transition for opacity change
                  }}
                >
                  Suddenly, a post catches her eye—a familiar image with abusive
                  comments that remind her of her past experiences.
                </Typography>
              </Container>
            </div>
          </div>
        )}

        {currentTypography === 4 && (
          <div
            style={{
              backgroundImage: `url(${Background2})`,
              backgroundSize: "cover",
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Figtree",
            }}
          >
            <div className="fade-in" style={{ textAlign: "center" }}>
              <Container maxWidth="md">
                <Subtitle text={`${userName}: “No... not again.”`} />
              </Container>
            </div>
          </div>
        )}

        {currentTypography === 5 && (
          <div
            style={{
              backgroundImage: `url(${Background2})`,
              backgroundSize: "cover",
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Figtree",
            }}
          >
            <div className="fade-in" style={{ textAlign: "center" }}>
              <Container maxWidth="md">
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  The memories flood her mind, triggering intense feelings of
                  fear, humiliation, and helplessness.
                </Typography>
              </Container>
            </div>
          </div>
        )}

        {currentTypography === 6 && (
          <div
            style={{
              backgroundImage: `url(${Background2})`,
              backgroundSize: "cover",
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="fade-in"
              style={{ textAlign: "center", width: "80%" }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#ffee1a",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  fontWeight: "bold",
                }}
                gutterBottom
              >
                Imagine you're {userName}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                }}
                gutterBottom
              >
                What will she do?
              </Typography>
              <Grid container spacing={6}>
                {" "}
                {/* Add spacing between buttons (optional) */}
                <Grid item md={12} lg={6}>
                  <Button
                    onClick={() => setCurrentTypography(7)}
                    variant="outlined"
                    style={{
                      boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                    }}
                    sx={{ fontSize: "24px" }}
                  >
                    Deactivate Account
                  </Button>
                </Grid>
                <Grid item md={12} lg={6}>
                  <Button
                    onClick={() => setCurrentTypography(7)}
                    variant="outlined"
                    style={{
                      boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                    }}
                    sx={{ fontSize: "24px", px: 4 }}
                  >
                    Report Comments
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        )}
        {currentTypography === 7 && (
          <div
            style={{
              backgroundImage: `url(${WhiteGrunge})`,
              backgroundSize: "cover",
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
            }}
          >
            <div className="fade-in" style={{ textAlign: "center" }}>
              <Container maxWidth="md">
                <Typography
                  variant="h4"
                  style={{
                    backgroundColor: "#e70c1a",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  gutterBottom
                >
                  DID YOU KNOW?
                </Typography>
                <Typography variant="h4">
                  Research proves that ignoring harassment doesn't stop it.
                </Typography>
              </Container>
            </div>
          </div>
        )}
      </div>

      {![6].includes(currentTypography) && (
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
          <ArrowCircleRightIcon
            sx={{
              fontSize: 82,
              color: [0, 1].includes(currentTypography) ? "black" : "white",
            }}
          />
        </Box>
      )}
    </>
  );
};

export default PageFour;
