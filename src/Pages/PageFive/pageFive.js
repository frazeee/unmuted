import React, { useState, useEffect } from "react";

import {
  Typography,
  Button,
  Box,
  Grid,
  Snackbar,
  Container,
  Alert
} from "@mui/material";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import BackgroundVideo from "../../Backgrounds/Slide15.mp4";
import WhiteGrunge from "../../Backgrounds/WhiteGrunge.png";
import Background161A from "../../Backgrounds/16.1A.png";
import Background161B from "../../Backgrounds/16.1B.png";
import Background161C from "../../Backgrounds/16.1C.png";
import Background162A from "../../Backgrounds/16.2A.png";
import Background162B from "../../Backgrounds/16.2B.png";

import Subtitle from "../../Components/Subtitle";
import Fader from "../../Components/Fader";

const PageFive = ({ userName, onProceed }) => {
  const [currentTypography, setCurrentTypography] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  const [choiceRoute, setChoiceRoute] = useState(0);
  const [showChoiceRoute, setShowChoiceRoute] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const copyLinkToClipboard = () => {
    const currentURL = window.location.href;
    navigator.clipboard
      .writeText(currentURL)
      .then(() => {
        console.log("Link copied to clipboard:", currentURL);
        setOpenSnackbar(true);
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

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
    setUserChoice("Tell");
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
            <source src={BackgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Typography
            variant="h4"
            sx={{
              color: "#ffee1a",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              fontWeight: "bold",
              fontFamily: "Figtree",
            }}
            gutterBottom
          >
            <strong> You are {userName}’s conscience.</strong>
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
            gutterBottom
          >
            Be the voice she needs to hear.
          </Typography>
          <Grid container spacing={6}>
            <Grid item md={12} lg={6}>
              <Button
                variant="outlined"
                style={{
                  boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  fontFamily: "Figtree",
                }}
                sx={{ fontSize: "24px", mx: 5, fontWeight: "bold" }}
                onClick={() => handleChoice("Keep")}
              >
                “Keep it to yourself. Your life will be peaceful that way.”
              </Button>
            </Grid>
            <Grid item md={12} lg={6}>
              <Button
                variant="outlined"
                style={{
                  boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  fontFamily: "Figtree",
                }}
                sx={{ fontSize: "24px", mx: 5, fontWeight: "bold" }}
                onClick={() => handleChoice("Tell")}
              >
                “You don't have to go through this alone. It’s time to tell
                someone.”
              </Button>
            </Grid>
          </Grid>
        </>
      )}

      {currentTypography === 1 && (
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
                Many people cope by pretending it didn't happen, hoping to
                return to normalcy. However, talking about the incident is an
                important step for healing.
              </Typography>
            </Container>
          </div>
        </div>
      )}

      {showChoiceRoute && userChoice === "Keep" && (
        <>
          <div
            style={{
              backgroundImage:
                currentTypography === 5
                  ? `url(${Background161C})`
                  : currentTypography === 4
                  ? `url(${Background161B})` // New background for typography 4
                  : `url(${Background161A})`,
              backgroundSize: "cover",
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Figtree",
            }}
          >
            <div>
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
                      {userName} contemplating reaching out to her friend, Hope,
                      but ultimately decides against it.
                    </Typography>
                  </Fader>
                )}
                {currentTypography === 3 && (
                  <Fader
                    onNextTypography={handleNextTypography}
                    intervalTime={10000}
                  >
                    <Subtitle
                      text={`${userName}: “I can handle this on my own. I don't want to burden anyone with my problems.”`}
                    />
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
                      As time passes, {userName} battles the pain in silence.
                      She feels isolated and alone, unable to share her
                      experiences with anyone.
                    </Typography>
                  </Fader>
                )}
                {currentTypography === 5 && (
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
                      {userName} reflects on her decision. She wonders what
                      might happen if she reaches out to her friend, Hope.
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
                      Tell Hope
                    </Button>
                  </Fader>
                )}
              </Container>
            </div>
          </div>
        </>
      )}

      {showChoiceRoute && userChoice === "Tell" && (
        <>
          {" "}
          <div
            style={{
              backgroundImage:
                currentTypography >= 9
                  ? `url(${Background162B})`
                  : `url(${Background162A})`,
              backgroundSize: "cover",
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
            }}
          >
            {currentTypography === 2 && (
              <div className="fade-in" style={{ textAlign: "center" }}>
                <Container maxWidth="md">
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
                      {userName} hesitates, staring at her phone, before finally
                      deciding to call her trusted friend, HOPE.
                    </Typography>
                  </Fader>
                </Container>
              </div>
            )}
            {currentTypography === 3 && (
              <div className="fade-in" style={{ textAlign: "center" }}>
                <Container maxWidth="md">
                  <Fader
                    onNextTypography={handleNextTypography}
                    intervalTime={10000}
                  >
                    <Subtitle text={`Hope: “Hey ${userName}? What’s up?”`} />
                  </Fader>
                </Container>
              </div>
            )}
            {currentTypography === 4 && (
              <div className="fade-in" style={{ textAlign: "center" }}>
                <Container maxWidth="md">
                  <Fader
                    onNextTypography={handleNextTypography}
                    intervalTime={10000}
                  >
                    <Subtitle
                      text={`“${userName}: Hey Hope, I... I've been keeping something from you. I've been struggling mentally, more than I've let on.”`}
                    />
                  </Fader>
                </Container>
              </div>
            )}
            {currentTypography === 5 && (
              <div className="fade-in" style={{ textAlign: "center" }}>
                <Container maxWidth="md">
                  <Fader
                    onNextTypography={handleNextTypography}
                    intervalTime={10000}
                  >
                    <Subtitle
                      text={`“${userName}:  It's... it's because of my past traumas. I don't know how to deal with it alone anymore.”`}
                    />
                  </Fader>
                </Container>
              </div>
            )}
            {currentTypography === 6 && (
              <div className="fade-in" style={{ textAlign: "center" }}>
                <Container maxWidth="md">
                  <Fader
                    onNextTypography={handleNextTypography}
                    intervalTime={10000}
                  >
                    <Subtitle
                      text={`“Hope: ${userName},  I'm so sorry you've been going through this alone. But I'm here for you, always.”`}
                    />
                  </Fader>
                </Container>
              </div>
            )}
            {currentTypography === 7 && (
              <div className="fade-in" style={{ textAlign: "center" }}>
                <Container maxWidth="md">
                  <Fader
                    onNextTypography={handleNextTypography}
                    intervalTime={10000}
                  >
                    <Subtitle
                      text={`“Hope:  You don't have to carry this burden by yourself. Let's figure out a way forward together.”`}
                    />
                  </Fader>
                </Container>
              </div>
            )}
            {currentTypography === 8 && (
              <div className="fade-in" style={{ textAlign: "center" }}>
                <Container maxWidth="md">
                  <Fader
                    onNextTypography={handleNextTypography}
                    intervalTime={10000}
                  >
                    <Subtitle
                      text={`“${userName}:
                      Thanks, Hope. I just feel so lost. I don't know where to turn or what to do next.
                      ”`}
                    />
                  </Fader>
                </Container>
              </div>
            )}
            {currentTypography === 9 && (
              <div className="fade-in" style={{ textAlign: "center" }}>
                <Container maxWidth="md">
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
                      {userName} begins to open up to Hope about the depth of
                      her struggles. With Hope's support and understanding,
                      Rachel feels a weight lifting off her shoulders.
                    </Typography>
                  </Fader>
                </Container>
              </div>
            )}
            {currentTypography === 10 && (
              <div className="fade-in" style={{ textAlign: "center" }}>
                <Container maxWidth="md">
                  <Fader
                    onNextTypography={handleNextTypography}
                    intervalTime={10000}
                  >
                    <Subtitle
                      text={`“Hope:
                    ${userName}, you're incredibly brave for opening up like this.
                      ”`}
                    />
                  </Fader>
                </Container>
              </div>
            )}
            {currentTypography === 11 && (
              <div className="fade-in" style={{ textAlign: "center" }}>
                <Container maxWidth="md">
                  <Fader
                    onNextTypography={handleNextTypography}
                    intervalTime={10000}
                  >
                    <Subtitle
                      text={`“Hope:
                      And remember, seeking professional help is a positive step towards healing. You're not alone in this journey, ok?
                      ”`}
                    />
                  </Fader>
                </Container>
              </div>
            )}
            {currentTypography === 12 && (
              <div className="fade-in" style={{ textAlign: "center" }}>
                <Container maxWidth="md">
                  <Button
                    onClick={copyLinkToClipboard}
                    variant="contained"
                    color="primary"
                  >
                    Copy Link
                  </Button>
                  <Snackbar
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                  >
                    <Alert
                      onClose={handleCloseSnackbar}
                      severity="success"
                      sx={{ width: "100%" }}
                    >
                      Link copied to clipboard!
                    </Alert>
                  </Snackbar>
                </Container>
              </div>
            )}
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

export default PageFive;
