import React, { useState, useEffect } from "react";

import {
  Typography,
  Button,
  Box,
  Grid,
  Container,
} from "@mui/material";

import "./styles.css";

import BackgroundVideo from "../../Backgrounds/Slide15.mp4";
import Background161A from "../../Backgrounds/16.1A.png";
import Background161B from "../../Backgrounds/16.1B.png";
import Background161C from "../../Backgrounds/16.1C.png";
import Background162A from "../../Backgrounds/16.2A.mp4";
import Background162B from "../../Backgrounds/16.2B.png";
import WhiteGrunge from "../../Backgrounds/WhiteGrunge.png";

import Avatar4 from "../../Audio/Avatar/AVATAR 4.mp3";
import Avatar5 from "../../Audio/Avatar/AVATAR 5.mp3";
import Avatar6 from "../../Audio/Avatar/AVATAR 6.mp3";
import Avatar7 from "../../Audio/Avatar/AVATAR 7.mp3";
import Hope1 from "../../Audio/Hope/HOPE 1.mp3";
import Hope2 from "../../Audio/Hope/HOPE 2.mp3";
import Hope3 from "../../Audio/Hope/HOPE 3.mp3";
import Hope4 from "../../Audio/Hope/HOPE 4.mp3";
import Hope5 from "../../Audio/Hope/HOPE 5.mp3";
import PhoneRinging from "../../Audio/SFX/Phone Ringing.mp3";
import PhoneEnding from "../../Audio/SFX/Phone Ending.mp3";

import Subtitle from "../../Components/Subtitle";
import Fader from "../../Components/Fader";
import Arrow from "../../Components/Arrow";

const PageFive = ({ userName, onProceed }) => {
  const [currentTypography, setCurrentTypography] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  const [showChoiceRoute, setShowChoiceRoute] = useState(false);

  const handleNextTypography = () => {
    setCurrentTypography((currentTypography) => currentTypography + 1);
    if (currentTypography + 1 === 2) {
      setShowChoiceRoute(true);
    }
  };

  useEffect(() => {
    if (currentTypography === 14) {
      onProceed();
    }
  }, [currentTypography]);

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
              mt: 4,
              color: "white",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              fontFamily: "Figtree",
              fontWeight: "500",
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
                  fontWeight: "400",
                }}
                sx={{
                  fontSize: "24px",
                  mx: 5,
                  fontWeight: "bold",
                  lineHeight: "35px",
                }}
                onClick={() => handleChoice("Keep")}
              >
                “Keep it to yourself. <br /> Your life will be peaceful that
                way.”
              </Button>
            </Grid>
            <Grid item md={12} lg={6}>
              <Button
                variant="outlined"
                style={{
                  boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  fontFamily: "Figtree",
                  fontWeight: "400",
                }}
                sx={{
                  fontSize: "24px",
                  mx: 5,
                  fontWeight: "bold",
                  lineHeight: "35px",
                }}
                onClick={() => handleChoice("Tell")}
              >
                “You don't have to go through this alone.
                <br /> It’s time to tell someone.”
              </Button>
            </Grid>
          </Grid>
        </>
      )}

      {currentTypography === 1 && (
        <Fader onNextTypography={handleNextTypography} intervalTime={7000}>
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
                  width: "30%",
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
                DID YOU KNOW?
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
                Many people cope by
                <span style={{ fontWeight: "800", margin: "5px" }}>
                  pretending it didn't happen,
                </span>
                hoping to return to normalcy.
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
                However,
                <span style={{ fontWeight: "800", margin: "10px" }}>
                  talking about the incident
                </span>
                is an important step for healing.
              </Typography>
            </Container>
          </div>
        </Fader>
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
                      {userName} contemplates reaching out to her friend, Hope,
                      but ultimately decides against it.
                    </Typography>
                  </Fader>
                )}
                {currentTypography === 3 && (
                  <Fader
                    onNextTypography={handleNextTypography}
                    intervalTime={7500}
                  >
                    <Subtitle
                      text={`${userName}: “I can handle this on my own. I don't want to burden anyone with my problems.”`}
                    />
                    <audio
                      src={Avatar4}
                      autoPlay
                      loop={false}
                      controls={false}
                    />
                  </Fader>
                )}
                {currentTypography === 4 && (
                  <Fader
                    onNextTypography={handleNextTypography}
                    intervalTime={100000000000}
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
                      As time passes, {userName} battles the pain in silence.
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        mt: 3,
                        color: "white",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        fontFamily: "Figtree",
                        fontWeight: "500",
                      }}
                    >
                      She feels isolated and alone, unable to share her <br />
                      experiences with anyone.
                    </Typography>
                  </Fader>
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
                        fontFamily: "Figtree",
                        fontWeight: "500",
                      }}
                      gutterBottom
                    >
                      {userName} reflects on her decision.
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        mt: 3,
                        color: "white",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        fontFamily: "Figtree",
                        fontWeight: "500",
                      }}
                      gutterBottom
                    >
                      She wonders what might happen if she reaches out to her
                      friend, Hope.
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
                currentTypography >= 11
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
                      {userName} hesitates, staring at her phone, before finally
                      deciding to call her trusted friend, HOPE.
                    </Typography>
                  </Fader>
                </Container>
              </div>
            )}
            {currentTypography >= 2 && currentTypography <= 10 && (
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
                    zIndex: -1,
                  }}
                >
                  <source src={Background162A} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </>
            )}
            {currentTypography === 3 && (
              <div className="fade-in" style={{ textAlign: "center" }}>
                <Container maxWidth="md">
                  <Fader
                    onNextTypography={handleNextTypography}
                    intervalTime={7500}
                  >
                    <audio
                      src={PhoneRinging}
                      autoPlay
                      loop={false}
                      controls={false}
                    />
                  </Fader>
                </Container>
              </div>
            )}
            {currentTypography === 4 && (
              <div className="fade-in" style={{ textAlign: "center" }}>
                <Container maxWidth="md">
                  <Fader
                    onNextTypography={handleNextTypography}
                    intervalTime={3000}
                  >
                    <Subtitle text={`Hope: “Hey, What’s up?”`} />
                    <audio src={Hope1} autoPlay loop={false} controls={false} />
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
                      text={`${userName}: “Hey Hope, I... I've been keeping something from you. I've been struggling mentally, more than I've let on.”`}
                    />
                    <audio
                      src={Avatar5}
                      autoPlay
                      loop={false}
                      controls={false}
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
                    intervalTime={10500}
                  >
                    <Subtitle
                      text={`${userName}: “It's... it's because of my past traumas. I don't know how to deal with it alone anymore.”`}
                    />
                    <audio
                      src={Avatar6}
                      autoPlay
                      loop={false}
                      controls={false}
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
                    intervalTime={7000}
                  >
                    <Subtitle
                      text={`Hope: “I'm so sorry you've been going through this alone. But I'm here for you, always.”`}
                    />
                    <audio src={Hope2} autoPlay loop={false} controls={false} />
                  </Fader>
                </Container>
              </div>
            )}
            {currentTypography === 8 && (
              <div className="fade-in" style={{ textAlign: "center" }}>
                <Container maxWidth="md">
                  <Fader
                    onNextTypography={handleNextTypography}
                    intervalTime={7000}
                  >
                    <Subtitle
                      text={`Hope: “You don't have to carry this burden by yourself. Let's figure out a way forward together.”`}
                    />
                    <audio src={Hope3} autoPlay loop={false} controls={false} />
                  </Fader>
                </Container>
              </div>
            )}
            {currentTypography === 9 && (
              <div className="fade-in" style={{ textAlign: "center" }}>
                <Container maxWidth="md">
                  <Fader
                    onNextTypography={handleNextTypography}
                    intervalTime={9000}
                  >
                    <Subtitle
                      text={`${userName}: “Thanks, Hope. I just feel so lost. I don't know where to turn or what to do next.”`}
                    />{" "}
                    <audio
                      src={Avatar7}
                      autoPlay
                      loop={false}
                      controls={false}
                    />
                  </Fader>
                </Container>
              </div>
            )}
            {currentTypography === 10 && (
              <div className="fade-in" style={{ textAlign: "center" }}>
                <Container maxWidth="md">
                  <Fader
                    onNextTypography={handleNextTypography}
                    intervalTime={1500}
                  >
                    <audio
                      src={PhoneEnding}
                      autoPlay
                      loop={false}
                      controls={false}
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
                    intervalTime={1000000}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        ml: -10,
                        color: "white",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        fontFamily: "Figtree",
                        fontWeight: "500",
                        textWrap: "nowrap",
                      }}
                    >
                      {userName} begins to open up to Hope about the depth of
                      her struggles.
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        mt: 4,
                        color: "white",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        fontFamily: "Figtree",
                        fontWeight: "500",
                      }}
                    >
                      With Hope's support and understanding, Rachel feels a
                      weight lifting off her shoulders.
                    </Typography>
                  </Fader>
                </Container>
              </div>
            )}
            {currentTypography === 12 && (
              <div className="fade-in" style={{ textAlign: "center" }}>
                <Container maxWidth="md">
                  <Fader
                    onNextTypography={handleNextTypography}
                    intervalTime={5000}
                  >
                    <Subtitle
                      text={`Hope: “You're incredibly brave for opening up like this.”`}
                    />
                    <audio src={Hope4} autoPlay loop={false} controls={false} />
                  </Fader>
                </Container>
              </div>
            )}
            {currentTypography === 13 && (
              <div className="fade-in" style={{ textAlign: "center" }}>
                <Container maxWidth="md">
                  <Fader
                    onNextTypography={handleNextTypography}
                    intervalTime={9000}
                  >
                    <Subtitle
                      text={`Hope: “And remember, seeking professional help is a positive step towards healing. You're not alone in this journey, ok?”`}
                    />{" "}
                    <audio src={Hope5} autoPlay loop={false} controls={false} />
                  </Fader>
                </Container>
              </div>
            )}
          </div>
        </>
      )}

      {![0, 1, 3, 5].includes(currentTypography) &&
        !(
          userChoice === "Tell" &&
          [4, 5, 6, 7, 8, 9, 10, 12, 13].includes(currentTypography)
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

export default PageFive;
