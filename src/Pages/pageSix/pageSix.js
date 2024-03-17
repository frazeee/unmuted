import React, { useState, useEffect } from "react";

import { Typography, Button, Box, Grid, Container } from "@mui/material";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Background17 from "../../Backgrounds/17.png";
import Background182A from "../../Backgrounds/18.2A.png";
import Background182B from "../../Backgrounds/18.2B.png";
import Background181A from "../../Backgrounds/18.1A.png";
import Background181C from "../../Backgrounds/18.1C.mp4";
import Statistics5 from "../../Statistics/Statistics-Visualizers-05.png";

import Subtitle from "../../Components/Subtitle";
import Fader from "../../Components/Fader";

const PageSix = ({ userName, onProceed }) => {
  const [currentTypography, setCurrentTypography] = useState(1);
  const [userChoice, setUserChoice] = useState("");
  const [showChoiceRoute, setShowChoiceRoute] = useState(false);

  const handleNextTypography = () => {
    setCurrentTypography((currentTypography) => currentTypography + 1);
    if (currentTypography + 1 === 2) {
      setShowChoiceRoute(true);
    }
  };

  const handleChoice = (choice) => {
    setCurrentTypography(1);
    setUserChoice(choice);
  };

  const handleRoute = () => {
    setCurrentTypography(2);
    setUserChoice("Reach");
  };

  useEffect(() => {
    if (currentTypography === 7 && userChoice === "Reach") {
      onProceed();
    }
  }, [currentTypography]);

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
              backgroundImage: `url(${Background17})`,
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
                <strong>
                  {userName} must deal with this experience her way.
                </strong>
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                }}
                gutterBottom
              >
                How will she do it?
              </Typography>
              <Grid container spacing={6}>
                {" "}
                <Grid item md={12} lg={6}>
                  <Button
                    onClick={() => handleChoice("Reach")}
                    variant="outlined"
                    style={{
                      boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                    }}
                    sx={{ fontSize: "24px" }}
                  >
                    “Reach out to a professional”
                  </Button>
                </Grid>
                <Grid item md={12} lg={6}>
                  <Button
                    onClick={() => handleChoice("Convince")}
                    variant="outlined"
                    style={{
                      boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                    }}
                    sx={{ fontSize: "24px", px: 5 }}
                  >
                    “Convince herself that she can do this alone”
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </>
      )}

      {currentTypography === 1 && (
        <Fader onNextTypography={handleNextTypography} intervalTime={10000000}>
          <div
            style={{
             
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
            }}
          >
            <img src={Statistics5}/>
          </div>
        </Fader>
      )}

      {showChoiceRoute && userChoice === "Convince" && (
        <>
          <div
            style={{
              backgroundImage:
                currentTypography >= 6
                  ? `url(${Background182B})`
                  : `url(${Background182A})`,
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
              {currentTypography === 2 && (
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    {userName}'s friends notice her withdrawal and express
                    concern, urging her to seek help. She brushes off their
                    worries, insisting that she's managing just fine on her own.
                  </Typography>
                </Fader>
              )}
              {currentTypography === 3 && (
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Subtitle
                    text={`Hope:
                    “I'm worried about you. You don't seem like yourself lately.”`}
                  />
                </Fader>
              )}
              {currentTypography === 4 && (
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Subtitle
                    text={`${userName}:
                    “I appreciate your concern, but yeah, there's really nothing to worry about.”`}
                  />
                </Fader>
              )}
              {currentTypography === 5 && (
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Subtitle
                    text={`${userName}:
                    “I'll need some time to figure things out, but I’ll find my way back soon enough.”`}
                  />
                </Fader>
              )}

              {currentTypography === 6 && (
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    {userName}’s symptoms escalate to a breaking point, and she
                    finds herself overwhelmed by intense panic attacks and
                    feelings of despair.
                  </Typography>
                </Fader>
              )}
              {currentTypography === 7 && (
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Subtitle
                    text={`${userName}:
                    “I can't do this anymore. I've been pretending for too long. I need help.”`}
                  />
                </Fader>
              )}
              {currentTypography === 8 && (
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={1000000}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    }}
                    gutterBottom
                  >
                    {userName} realizes that she can no longer do this alone.
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{ fontSize: "24px" }}
                    style={{
                      boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                    }}
                    onClick={handleRoute}
                  >
                    Reach out to a professional
                  </Button>
                </Fader>
              )}
            </Container>
          </div>
        </>
      )}

      {showChoiceRoute && userChoice === "Reach" && (
        <>
          <div
            style={{
              backgroundImage: `url(${Background181A})`,
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
              {currentTypography === 2 && (
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    }}
                    gutterBottom
                  >
                    {userName} sits nervously in online therapy and opens up
                    about her struggles.
                  </Typography>
                </Fader>
              )}
              {currentTypography === 3 && (
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    The therapist, Dr. Faith, listens attentively as {userName}{" "}
                    shares her experiences.
                  </Typography>
                </Fader>
              )}
              {currentTypography === 4 && (
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    Dr. Faith discusses various treatment options with{" "}
                    {userName}. She feels overwhelmed but ultimately decides to
                    pursue therapy.
                  </Typography>
                </Fader>
              )}

              {currentTypography >= 5 && (
                <>
                  <video
                    autoPlay
                    loop
                    muted
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      top: "50%",
                      left: "50%",
                      transform: " translate(-50%, -50%)",
                      zIndex: 0,
                    }}
                  >
                    <source src={Background181C} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </>
              )}
              {currentTypography === 5 && (
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000000}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    But {userName}’s journey towards healing is not without its
                    challenges. She experiences a relapse in her symptoms after
                    a period of stability.
                  </Typography>
                </Fader>
              )}
              {currentTypography === 6 && (
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000000}
                >
                  <Subtitle
                    text={`${userName}:
“Something doesn't feel right... these feelings, they're creeping back in.”`}
                  />
                </Fader>
              )}
            </Container>
          </div>
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
          <ArrowCircleRightIcon
            sx={{
              fontSize: 82,
              color: [0, 1].includes(currentTypography) ? "black" : "white",
            }}
          />
        </Box>
      )}
    </div>
  );
};

export default PageSix;