import React, { useState, useEffect } from "react";

import Typewriter from "../../Components/Typewriter";

import "./styles.css";

import { Typography, Button, Box, Grid, Item, Container } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import WhiteGrunge from "../../Backgrounds/WhiteGrunge.png";
import Background from "../../Backgrounds/Slide11-12.png";
import Background2 from "../../Backgrounds/Slide13.jpg";
import Background14A from "../../Backgrounds/14.1A.png";
import Background14C from "../../Backgrounds/14.1C.png";
import Background142A from "../../Backgrounds/14.2A.png";
import Background142B from "../../Backgrounds/14.2B.png";
import Background142D from "../../Backgrounds/14.2D.png";

import Subtitle from "../../Components/Subtitle";
import Fader from "../../Components/Fader";

const PageFour = ({ userName, onProceed }) => {
  const [currentTypography, setCurrentTypography] = useState(6);
  const [userChoice, setUserChoice] = useState(0);
  const [choiceRoute, setChoiceRoute] = useState(0);
  const [showChoiceRoute, setShowChoiceRoute] = useState(false);
  const [subtitleOpacity, setSubtitleOpacity] = useState(false);
  const [typographyOpacity, setTypographyOpacity] = useState(false);

  const handleNextTypography = () => {
    setCurrentTypography((currentTypography) => currentTypography + 1);
    if (currentTypography + 1 === 8) {
      setShowChoiceRoute(true);
    }
  };

  console.log(currentTypography);

  const handleChoice = (choice) => {
    setCurrentTypography(7);
    setUserChoice(choice);
  };

  const handleRoute = () => {
    setCurrentTypography(8);
    setUserChoice("Report");
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
                    onClick={() => handleChoice("Deactivate")}
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
                    onClick={() => handleChoice("Report")}
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

        {showChoiceRoute && userChoice === "Report" && (
          <div
            style={{
              backgroundImage: currentTypography >= 11
              ? currentTypography === 13
                ? `url(${Background142D})` // New background for typography 13
                : `url(${Background142B})` // Background for typography 11 or higher (except 13)
              : `url(${Background142A})`, // Original background
            
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
              <Container maxWidth="lg">
                {currentTypography === 8 && (
                  <Fader
                    onNextTypography={handleNextTypography}
                    intervalTime={10000}
                  >
                    <Subtitle
                      text={`${userName}: “It's happening again... I can't let them get away with this.”`}
                    />
                  </Fader>
                )}
                {currentTypography === 9 && (
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
                      style={{ opacity: typographyOpacity }}
                    >
                      {userName} decides to report the abusive content to the
                      social media platform.
                    </Typography>
                  </Fader>
                )}
                {currentTypography === 10 && (
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
                      With trembling fingers, she navigates through the process,
                      her resolve unwavering despite her racing thoughts.
                    </Typography>
                  </Fader>
                )}
                {currentTypography === 11 && (
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
                      Addressing online harassment and victim-blaming may feel
                      like a dauntingly large task. But culture change begins
                      with<strong> small, positive actions.</strong>
                    </Typography>
                  </Fader>
                )}
                {currentTypography === 12 && (
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
                      For a long time, {userName} has been crippled by
                      flashbacks and overwhelming feelings of fear and
                      humiliation, making it impossible for her to engage in
                      social media without experiencing anxiety and discomfort.
                    </Typography>
                  </Fader>
                )}
                {currentTypography === 13 && (
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
                    >
                      One morning, {userName} wakes up feeling a sudden surge of
                      courage coursing through her veins. With a newfound
                      determination, she feels it is time to break the silence
                      surrounding what she has endured.
                    </Typography>
                  </Fader>
                )}
              </Container>
            </div>
          </div>
        )}

        {showChoiceRoute && userChoice === "Deactivate" && (
          <div
            style={{
              backgroundImage: `url(${Background14A})`,
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
                {currentTypography === 8 && (
                  <>
                    <Fader
                      onNextTypography={handleNextTypography}
                      intervalTime={10000}
                    >
                      <Subtitle
                        text={`${userName}: “I should report this... but what's the point? It won't change anything.”`}
                      />
                    </Fader>
                  </>
                )}
                {currentTypography === 9 && (
                  <Fader
                    onNextTypography={handleNextTypography}
                    intervalTime={7000}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: "white",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      }}
                      style={{ opacity: typographyOpacity }}
                    >
                      {userName} closes the app, pushing aside the urge to
                      report the abusive content. She tries to convince herself
                      that ignoring it is best, but deep down, she knows the
                      pain and fear still linger.
                    </Typography>
                  </Fader>
                )}
              </Container>
            </div>
            {currentTypography === 10 && (
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
                    Despite {userName}'s attempts to brush off what she had
                    seen, her anxiety intensifies in the days that follow. She
                    finds herself avoiding social media altogether.
                  </Typography>
                </Fader>
              </Container>
            )}
            {currentTypography === 11 && (
              <div
                style={{
                  backgroundImage: `url(${Background14C})`,
                  backgroundSize: "cover",
                  height: "100vh",
                  width: "100vw",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Figtree",
                }}
              >
                <Container maxWidth="md">
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
                      {userName} wonders if things could have been different if
                      she had taken a stand against the online abuse.
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
                      Report Comments
                    </Button>
                  </Fader>
                </Container>
              </div>
            )}
          </div>
        )}
      </div>

      {(![6, 11].includes(currentTypography) ||
        (currentTypography === 11 && userChoice === "Report")) && (
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
              color: [0, 1, 7].includes(currentTypography) ? "black" : "white",
            }}
          />
        </Box>
      )}
    </>
  );
};

export default PageFour;
