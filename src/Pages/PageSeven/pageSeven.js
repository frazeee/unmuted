import React, { useState, useEffect } from "react";

import { Typography, Button, Box, Grid, Container } from "@mui/material";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Background19 from "../../Backgrounds/19.png";
import Background191A from "../../Backgrounds/19.1A.png";
import Background191B from "../../Backgrounds/19.1B.mp4";
import Background191C from "../../Backgrounds/19.1C.mp4";
import Background191D from "../../Backgrounds/19.1D.png";
import Background191E from "../../Backgrounds/19.1E.png";
import Background192A from "../../Backgrounds/19.2A.png";
import Background192B from "../../Backgrounds/19.2B.png";
import Background192C from "../../Backgrounds/19.2C.png";

import Subtitle from "../../Components/Subtitle";
import Fader from "../../Components/Fader";

const PageSeven = ({ userName, onProceed }) => {
  const [currentTypography, setCurrentTypography] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  const [showChoiceRoute, setShowChoiceRoute] = useState(false);

  const handleNextTypography = () => {
    if (currentTypography === 0) {
      setShowChoiceRoute(true);
    }
    setCurrentTypography((currentTypography) => currentTypography + 1);
  };

  console.log(currentTypography, userChoice, showChoiceRoute);

  const handleChoice = (choice) => {
    setCurrentTypography(1);
    setUserChoice(choice);
    setShowChoiceRoute(true);
  };

  const handleRoute = () => {
    setCurrentTypography(1);
    setUserChoice("Reach");
  };

  useEffect(() => {
    if (currentTypography === 19) {
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
              backgroundImage: `url(${Background19})`,
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
                  {userName} recognizes the signs of relapse early.
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
                What will she do about it?
              </Typography>
              <Grid container spacing={6}>
                {" "}
                <Grid item md={12} lg={6}>
                  <Button
                    onClick={() => handleChoice("Seek")}
                    variant="outlined"
                    style={{
                      boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                    }}
                    sx={{ fontSize: "24px" }}
                  >
                    Seeks immediate support
                  </Button>
                </Grid>
                <Grid item md={12} lg={6}>
                  <Button
                    onClick={() => handleChoice("Ignore")}
                    variant="outlined"
                    style={{
                      boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      fontFamily: "Figtree",
                    }}
                    sx={{ fontSize: "24px", px: 5 }}
                  >
                    Ignore symptoms
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </>
      )}

      {showChoiceRoute && userChoice === "Ignore" && (
        <>
          <div
            style={{
              backgroundImage:
                currentTypography === 4
                  ? `url(${Background192C})`
                  : currentTypography === 3
                  ? `url(${Background192B})`
                  : `url(${Background192A})`,

              backgroundSize: "cover",
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            {currentTypography === 1 && (
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
                  {userName} experiences symptoms of anxiety and depression. She
                  brushes them off, convincing herself that it's just a phase.
                </Typography>
              </Fader>
            )}
            {currentTypography === 2 && (
              <Fader
                onNextTypography={handleNextTypography}
                intervalTime={10000}
              >
                <Subtitle
                  text={`${userName}:
                  “I'm just tired. It's nothing serious.”`}
                />
              </Fader>
            )}
            {currentTypography === 3 && (
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
          </div>
        </>
      )}

      {showChoiceRoute && userChoice === "Seek" && (
        <>
          <div
            style={{
              backgroundImage:
                currentTypography >= 15
                  ? `url(${Background191E})`
                  : currentTypography >= 12
                  ? `url(${Background191D})`
                  : `url(${Background191A})`,
              backgroundSize: "cover",
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            {currentTypography === 1 && (
              <Container maxWidth="lg">
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
                    {userName}'s' phone buzzes with a message notification. She
                    picks it up to see a reminder for her therapy appointment
                    later in the week.
                  </Typography>
                </Fader>
              </Container>
            )}
            {currentTypography === 2 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Subtitle
                    text={`${userName}:
                  “Maybe I should reach out sooner…”`}
                  />
                </Fader>
              </Container>
            )}
            {currentTypography >= 3 && currentTypography < 7 && (
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
                  <source src={Background191B} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </>
            )}
            {currentTypography === 3 && (
              <Container maxWidth="lg">
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
                    {userName} sits in front of her laptop, her therapist's face
                    on the screen. She looks relieved to see her.
                  </Typography>
                </Fader>
              </Container>
            )}
            {currentTypography === 4 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Subtitle
                    text={`Dr. Faith:
                  “${userName}, I'm glad you reached out. Tell me what's been going on.”`}
                  />
                </Fader>
              </Container>
            )}
            {currentTypography === 5 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Subtitle
                    text={`Dr. Faith:
                  “It sounds like you're recognizing the signs of a relapse early.”`}
                  />
                </Fader>
              </Container>
            )}
            {currentTypography === 6 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Subtitle
                    text={`Dr. Faith:
                  “That's a significant step. Let's work
                  together to address this.”
                  `}
                  />
                </Fader>
              </Container>
            )}
            {currentTypography >= 7 && currentTypography <= 11 && (
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
                  <source src={Background191C} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </>
            )}
            {currentTypography === 7 && (
              <Container maxWidth="lg">
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
                    After {userName}’s therapy session, she calls her friend,
                    Hope.
                  </Typography>
                </Fader>
              </Container>
            )}
            {currentTypography === 8 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Subtitle
                    text={`Hope:
                  “Hey I'm here for you. Whatever you need.”
                  `}
                  />
                </Fader>
              </Container>
            )}
            {currentTypography === 9 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Subtitle
                    text={`Hope:
                  “Have you talked to your therapist?”
                  `}
                  />
                </Fader>
              </Container>
            )}
            {currentTypography === 10 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Subtitle
                    text={`${userName}:
                  “Yeah, I just had a session. It helped and I'm feeling more hopeful now.
                  `}
                  />
                </Fader>
              </Container>
            )}
            {currentTypography === 11 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Subtitle
                    text={`${userName}:
                  “ Recognizing the signs of relapse was scary, but reaching out for support was the best decision I made.”
                  `}
                  />
                </Fader>
              </Container>
            )}
            {currentTypography === 12 && (
              <Container maxWidth="lg">
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
                    The healing journey hasn't been easy, but {userName} is
                    starting to feel more like herself again.
                  </Typography>
                </Fader>
              </Container>
            )}
            {currentTypography === 13 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Subtitle
                    text={`Dr Faith:
                  “You're making significant progress, ${userName}. I'm proud of how far you've come.”
                  `}
                  />
                </Fader>
              </Container>
            )}
            {currentTypography === 14 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Subtitle
                    text={`Hope:
“You're doing amazing! We're all here for you, every step of the way.”
                  `}
                  />
                </Fader>
              </Container>
            )}
            {currentTypography === 15 && (
              <Container maxWidth="lg">
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
                    {userName} is ready to let go of the past and step into the
                    future with courage and compassion.
                  </Typography>
                </Fader>
              </Container>
            )}
            {currentTypography === 16 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Subtitle
                    text={`${userName}:
“Healing isn't linear. It's messy, it's challenging, but it's also beautiful. Every step of the way,"
                  `}
                  />
                </Fader>
              </Container>
            )}
            {currentTypography === 17 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Subtitle
                    text={`${userName}:
“I've discovered strength I never knew I had"
                  `}
                  />
                </Fader>
              </Container>
            )}
            {currentTypography === 18 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000}
                >
                  <Subtitle
                    text={`${userName}:
“ And now, as I look ahead, I see endless possibilities. I'm ready to embrace them all."
                  `}
                  />
                </Fader>
              </Container>
            )}
          </div>
        </>
      )}

      {(![0, 3].includes(currentTypography) && userChoice === "Ignore") ||
        (![0].includes(currentTypography) && userChoice === "Seek" && (
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
                color: [0].includes(currentTypography) ? "black" : "white",
              }}
            />
          </Box>
        ))}
    </div>
  );
};

export default PageSeven;
