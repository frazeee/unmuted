import React, { useState, useEffect } from "react";

import { Typography, Button, Box, Grid, Container } from "@mui/material";

import "./styles.css";

import Arrow from "../../Components/Arrow";
import Background17 from "../../Backgrounds/17.png";
import Background182A from "../../Backgrounds/18.2A.png";
import Background182B from "../../Backgrounds/18.2B.png";
import Background181A from "../../Backgrounds/18.1A.png";
import Background181C from "../../Backgrounds/18.1C.png";
import WhiteGrunge from "../../Backgrounds/WhiteGrunge.png";

import Avatar8 from "../../Audio/Avatar/AVATAR 8.mp3";
import Avatar9 from "../../Audio/Avatar/AVATAR 9.mp3";
import Avatar10 from "../../Audio/Avatar/AVATAR 10.mp3";
import Avatar11 from "../../Audio/Avatar/AVATAR 11.mp3";
import Hope6 from "../../Audio/Hope/HOPE 6.mp3";

import Subtitle from "../../Components/Subtitle";
import Fader from "../../Components/Fader";

const PageSix = ({ userName, onProceed }) => {
  const [currentTypography, setCurrentTypography] = useState(0);
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
    if (currentTypography === 6 && userChoice === "Reach") {
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
                  fontFamily: "Figtree",
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
                  fontFamily: "Figtree",
                  fontWeight: "500",
                  mt: 4,
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
                      fontWeight: "400",
                    }}
                    sx={{ fontSize: "24px", px: 10, lineHeight: "35px" }}
                  >
                    Reach out to <br /> a professional
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
                      fontWeight: "400",
                    }}
                    sx={{ fontSize: "24px", px: 5, lineHeight: "35px" }}
                  >
                    Convince herself that <br /> she can do this alone
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </>
      )}

      {currentTypography === 1 && (
        <Fader onNextTypography={handleNextTypography} intervalTime={4000}>
          <div
            className="typewriter-container"
            style={{
              backgroundImage: `url(${WhiteGrunge})`,
            }}
          >
            <Container maxWidth="lg">
              <Typography
                variant="h4"
                style={{
                  backgroundColor: "red",
                  width: "13%",
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
                Those who have experienced the incident may feel{" "}
                <span style={{ fontWeight: "800" }}>ashamed</span> and may
                not want others to know what happened. They might
                <span style={{ fontWeight: "800" }}> {" "}
                  avoid seeking help
                </span>{" "}
                or reporting their experience.
              </Typography>
            </Container>
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
                  intervalTime={100000000}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                      fontWeight: "500",
                    }}
                  >
                    {userName}'s friends notice her withdrawal and express
                    concern, <br />
                    urging her to seek help.
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                      fontWeight: "500",
                      mt: 4,
                    }}
                  >
                    She brushes off their worries, insisting that she's
                    <br /> managing just fine on her own.
                  </Typography>
                </Fader>
              )}
              {currentTypography === 3 && (
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={6000}
                >
                  <Subtitle
                    text={`Hope: “I'm worried about you. You don't seem like yourself lately.”`}
                  />
                  <audio src={Hope6} autoPlay loop={false} controls={false} />
                </Fader>
              )}
              {currentTypography === 4 && (
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={7000}
                >
                  <Subtitle
                    text={`${userName}: “I appreciate your concern, but yeah, there's really nothing to worry about.”`}
                  />{" "}
                  <audio src={Avatar9} autoPlay loop={false} controls={false} />
                </Fader>
              )}
              {currentTypography === 5 && (
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={8000}
                >
                  <Subtitle
                    text={`${userName}: “I'll need some time to figure things out, but I’ll find my way back soon enough.”`}
                  />{" "}
                  <audio
                    src={Avatar10}
                    autoPlay
                    loop={false}
                    controls={false}
                  />
                </Fader>
              )}

              {currentTypography === 6 && (
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={1000000000}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                      fontWeight: "500",
                    }}
                  >
                    {userName}’s symptoms escalate to a breaking point, and she
                    finds
                    <br /> herself overwhelmed by intense panic attacks and
                    feelings of despair.
                  </Typography>
                </Fader>
              )}
              {currentTypography === 7 && (
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={13000}
                >
                  <Subtitle
                    text={`${userName}: “I can't do this anymore. I've been pretending for too long. I need help.”`}
                  />
                  <audio
                    src={Avatar11}
                    autoPlay
                    loop={false}
                    controls={false}
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
                      fontFamily: "Figtree",
                      fontWeight: "500",
                    }}
                    gutterBottom
                  >
                    {userName} realizes that she can no longer do this alone.
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{ fontSize: "24px", mt: 3 }}
                    style={{
                      boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                      fontWeight: "400",
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
              backgroundImage:
                currentTypography >= 4
                  ? `url(${Background181C})`
                  : `url(${Background181A})`,
              backgroundSize: "cover",
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <Container maxWidth={currentTypography === 2 ? "xl" : "lg"}>
              {currentTypography === 2 && (
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={1000000000}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                      fontWeight: "500",
                    }}
                    gutterBottom
                  >
                    {userName} sits nervously in online therapy and opens up
                    about her struggles.
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                      fontWeight: "500",
                    }}
                  >
                    The therapist, Dr. Faith, listens attentively as {userName}{" "}
                    shares her experiences.
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
                      fontFamily: "Figtree",
                      fontWeight: "500",
                    }}
                  >
                    Dr. Faith discusses various treatment options with{" "}
                    {userName}. She feels overwhelmed but ultimately decides to
                    pursue therapy.
                  </Typography>
                </Fader>
              )}

              {currentTypography === 4 && (
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000000}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                      fontWeight: "500",
                    }}
                  >
                    But {userName}’s journey towards healing is not without its
                    challenges. She experiences a relapse in her symptoms after
                    a period of stability.
                  </Typography>
                </Fader>
              )}
              {currentTypography === 5 && (
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Subtitle
                    text={`${userName}: “Something doesn't feel right... these feelings, they're creeping back in.”`}
                  />
                  <audio src={Avatar8} autoPlay loop={false} controls={false} />
                </Fader>
              )}
            </Container>
          </div>
        </>
      )}

      {![0 , 1].includes(currentTypography) &&
        !(
          (userChoice === "Convince" &&
            [3, 4, 5, 7, 8].includes(currentTypography)) ||
          (userChoice === "Reach" && currentTypography === 5)
        ) && (
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

export default PageSix;
