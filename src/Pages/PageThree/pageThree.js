import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Container,
} from "@mui/material";
import "./styles.css";
import "../../Fonts/fonts.css";

import Unmute from "../../Components/Unmute.js";
import Arrow from "../../Components/Arrow.js";

import Background from "../../Backgrounds/Slide5-6.mp4";
import Background2 from "../../Backgrounds/Slide8.mp4";

import WhiteGrunge from "../../Backgrounds/WhiteGrunge.png";
import Fader from "../../Components/Fader";

const PageThree = ({ onProceed, userName, handleChangeName, onPlayPause }) => {
  const [currentTypography, setCurrentTypography] = useState(0);

  const [name, setName] = useState("Rachel");

  const handleSubmit = (event) => {
    handleChangeName(name);
    handleNextTypography();
  };

  const handleNextTypography = () => {
    setCurrentTypography(currentTypography + 1); // Update currentTypography after 1 second
  };

  useEffect(() => {
    if (currentTypography === 7) {
      onProceed();
    }
  }, [currentTypography]);

  return (
    <>
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
            <Fader
              onNextTypography={handleNextTypography}
              intervalTime={10000000000}
            >
              <Typography
                variant="h4"
                sx={{ fontFamily: "Work Sans", color: "white" }}
              >
                You are about to follow a young woman to a path of healing.
              </Typography>
            </Fader>
          )}
        </div>
        <div
          className={currentTypography === 1 ? "fade-in" : "fade-out"}
          style={{ textAlign: "center" }}
        >
          {currentTypography === 1 && (
            <Fader
              onNextTypography={handleNextTypography}
              intervalTime={10000000000}
            >
              <Typography
                variant="h4"
                sx={{ fontFamily: "Work Sans", color: "white" }}
              >
                Let your decisions be her guide.
              </Typography>
            </Fader>
          )}
        </div>
        {[2, 3].includes(currentTypography) && (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{
              height: "100vh",
              position: "relative",
            }}
          >
            <video
              autoPlay
              loop
              muted
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: -1,
                pointerEvents: "none",
              }}
            >
              <source src={Background} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {currentTypography === 2 && (
              <Container
                className={currentTypography === 2 ? "fade-in" : "fade-out"}
                style={{
                  width: "50%",
                  padding: "20px",
                  textAlign: "center",
                  zIndex: 1,
                  color: "white",
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontFamily: "Figtree", fontWeight: "500" }}
                  >
                    Here she is.
                  </Typography>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontFamily: "Figtree", fontWeight: "500" }}
                  >
                    What's her name?
                  </Typography>
                  <TextField
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      width: "50%",
                      textAlign: "center",
                    }}
                    placeholder="Enter her name here"
                    variant="outlined"
                    required
                    margin="normal"
                    onChange={(e) => setName(e.target.value)}
                  />

                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      display: "block",
                      mx: "auto",
                      color: "#4CAF50",
                      borderColor: "white",
                      "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                        borderColor: "white",
                      },
                    }}
                    style={{
                      marginTop: "18px",
                      borderRadius: "15px",
                      fontSize: "18px",
                      fontFamily: "Figtree",
                      color: "white",
                    }}
                  >
                    Continue
                  </Button>
                </form>
              </Container>
            )}

            {currentTypography === 3 && (
              <Fader
                onNextTypography={handleNextTypography}
                intervalTime={5000}
              >
                <div
                  className={currentTypography === 3 ? "fade-in" : "fade-out"}
                  style={{ textAlign: "center", color: "white", zIndex: 1 }}
                >
                  <Typography variant="h4" sx={{ fontFamily: "Figtree" }}>
                    {userName}, what a beautiful name!
                  </Typography>
                </div>
              </Fader>
            )}
          </Grid>
        )}

        <div
          style={{
            textAlign: "center",
          }}
        >
          {currentTypography === 4 && (
            <Fader
              onNextTypography={handleNextTypography}
              intervalTime={7000}
            >
              <div
                className="typewriter-container"
                style={{
                  backgroundImage: `url(${WhiteGrunge})`,
                }}
              >
                <div>
                  <Typography
                    variant="h4"
                    style={{
                      backgroundColor: "red",
                      width: "22%",
                      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
                    }}
                    sx={{
                      fontFamily: "Figtree",
                      fontWeight: "900",
                      color: "white",
                      mx: "auto",
                      py: 0.5
                    }}
                  >
                    FACT
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: "Figtree",
                      fontWeight: "500",
                      color: "black",
                      mt: 3,
                    }}
                  >
                    <span style={{ fontWeight: "800" }}>73%</span> of Filipinos
                    are social media users.
                    <br /> Gen Z, aged 18 to 24,{" "}
                    <span style={{ fontWeight: "800" }}>
                      {" "}
                      is the largest segment.{" "}
                    </span>
                  </Typography>
                </div>
              </div>
            </Fader>
          )}
        </div>

        <div style={{ textAlign: "center" }}>
          {currentTypography === 5 && (
            <Fader
              onNextTypography={handleNextTypography}
              intervalTime={70000000}
            >
              <div
                className="typewriter-container"
                style={{
                  backgroundImage: `url(${WhiteGrunge})`,
                }}
              >
                <div>
                  <Typography
                    variant="h4"
                    sx={{ fontFamily: "Figtree", fontWeight: "500" }}
                  >
                    {userName} belongs to this demographic.
                  </Typography>
                </div>
              </div>
            </Fader>
          )}
        </div>

        <div
          className={currentTypography === 6 ? "fade-in" : "fade-out"}
          style={{ textAlign: "center" }}
        >
          {currentTypography === 6 && (
            <>
              <video
                autoPlay
                loop
                muted
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: -1,
                  pointerEvents: "none",
                }}
              >
                <source src={Background2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Figtree",
                  fontWeight: "500",
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  mb: 4,
                }}
              >
                Let's uncover {userName}'s story
              </Typography>
              <Box
                onClick={() => {
                  handleNextTypography();
                }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    border: "3px solid white",
                    boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    cursor: "pointer",
                    transition: "transform 0.2s, border-color 0.2s",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <Unmute style={{ width: "100%", height: "100%" }} />
                </div>
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    mt: 4,
                    fontFamily: "Figtree",
                    fontWeight: "500",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  Click to unmute.
                </Typography>
              </Box>
            </>
          )}
        </div>
        {![2, 3, 4, 6].includes(currentTypography) && (
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
    </>
  );
};

export default PageThree;
