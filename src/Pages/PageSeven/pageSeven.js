import React, { useState, useEffect } from "react";

import { Typography, Button, Box, Grid, Container } from "@mui/material";

import Notification from "../../Audio/SFX/Notification.mp3";

import Arrow from "../../Components/Arrow";

import Background19 from "../../Backgrounds/19.png";
import Background191A from "../../Backgrounds/19.1A.png";
import Background191B from "../../Backgrounds/19.1B.mp4";
import Background191C from "../../Backgrounds/19.1C.mp4";
import Background191D from "../../Backgrounds/19.1D.png";
import Background191E from "../../Backgrounds/19.1E.png";
import Background192A from "../../Backgrounds/19.2A.png";
import Background192B from "../../Backgrounds/19.2B.png";
import Background192C from "../../Backgrounds/19.2C.png";

import Avatar12 from "../../Audio/Avatar/AVATAR 12.mp3";
import Avatar13 from "../../Audio/Avatar/AVATAR 13.mp3";
import Avatar14 from "../../Audio/Avatar/AVATAR 14.mp3";
import Avatar15 from "../../Audio/Avatar/AVATAR 15.mp3";
import Avatar16 from "../../Audio/Avatar/AVATAR 16.mp3";
import Avatar17 from "../../Audio/Avatar/AVATAR 17.mp3";
import Avatar18 from "../../Audio/Avatar/AVATAR 18.mp3";

import Hope7 from "../../Audio/Hope/HOPE 7.mp3";
import Hope8 from "../../Audio/Hope/HOPE 8.mp3";
import Hope9 from "../../Audio/Hope/HOPE 9.mp3";

import Faith1 from "../../Audio/DrFaith/DR FAITH 1.mp3";
import Faith2 from "../../Audio/DrFaith/DR FAITH 2.mp3";
import Faith3 from "../../Audio/DrFaith/DR FAITH 3.mp3";
import Faith4 from "../../Audio/DrFaith/DR FAITH 4.mp3";

import Sobbing from "../../Audio/SFX/AVATAR SOBBING 1.mp3";
import Sobbing2 from "../../Audio/SFX/AVATAR SOBBING 2.mp3";
import PhoneRinging from "../../Audio/SFX/Phone Ringing.mp3";

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
    setUserChoice("Seek");
  };

  useEffect(() => {
    if (currentTypography === 21) {
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
                  fontFamily: "Figtree",
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
                  mt: 4,
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  fontFamily: "Figtree",
                  fontWeight: "500",
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
                    Seek immediate support
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
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000000000}
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
                    {userName} experiences symptoms of anxiety and depression.
                    <br />
                    She brushes them off, convincing herself that it's just a
                    phase.
                  </Typography>
                </Fader>
              </Container>
            )}
            {currentTypography === 2 && (
              <Fader
                onNextTypography={handleNextTypography}
                intervalTime={6000}
              >
                <Subtitle
                  text={`${userName}: “I'm just tired. It's nothing serious.”`}
                />
                <audio src={Avatar18} autoPlay loop={false} controls={false} />
              </Fader>
            )}
            {currentTypography === 3 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={10000000000}
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
                    As time passes, {userName}’s symptoms worsen.
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
                    She loses her appetite, struggles to concentrate at school,
                    and withdraws from social activities.
                  </Typography>
                </Fader>
              </Container>
            )}
            {currentTypography === 4 && (
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
                  In a moment of clarity, {userName} realizes she can no longer
                  ignore her symptoms.
                </Typography>
                <Button
                  variant="outlined"
                  sx={{ fontSize: "24px", mt: 4, px: 5}}
                  style={{
                    boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    fontFamily: "Figtree",
                  }}
                  onClick={handleRoute}
                >
                  SEEK IMMEDIATE HELP
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
                currentTypography >= 17
                  ? `url(${Background191E})`
                  : currentTypography >= 14
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
                    {userName}'s' phone buzzes with a message notification.
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
                    She picks it up to see a reminder for her therapy <br />
                    appointment later in the week.
                  </Typography>
                  <audio
                    src={Notification}
                    autoPlay
                    loop={false}
                    controls={false}
                  />
                </Fader>
              </Container>
            )}
            {currentTypography === 2 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={5000}
                >
                  <Subtitle
                    text={`${userName}: “Maybe I should reach out sooner…”`}
                  />{" "}
                  <audio
                    src={Avatar12}
                    autoPlay
                    loop={false}
                    controls={false}
                  />
                </Fader>
              </Container>
            )}
            {currentTypography >= 3 && currentTypography < 8 && (
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
                    {userName} sits in front of her laptop,
                    <br /> her therapist's face on the screen.
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
                    She looks relieved to see her.
                  </Typography>
                </Fader>
              </Container>
            )}
            {currentTypography === 4 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={6000}
                >
                  <Subtitle
                    text={`Dr. Faith: “I'm glad you reached out. Tell me what's been going on.”`}
                  />
                  <audio src={Faith1} autoPlay loop={false} controls={false} />
                </Fader>
              </Container>
            )}
            {currentTypography === 5 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={6500}
                >
                  <audio src={Sobbing} autoPlay loop={false} controls={false} />
                </Fader>
              </Container>
            )}
            {currentTypography === 6 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={6000}
                >
                  <Subtitle
                    text={`Dr. Faith: “It sounds like you're recognizing the signs of a relapse early.”`}
                  />
                  <audio src={Faith2} autoPlay loop={false} controls={false} />
                </Fader>
              </Container>
            )}
            {currentTypography === 7 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={7000}
                >
                  <Subtitle
                    text={`Dr. Faith: “That's a significant step. Let's work together to address this.”
                  `}
                  />
                  <audio src={Faith3} autoPlay loop={false} controls={false} />
                </Fader>
              </Container>
            )}
            {currentTypography >= 8 && currentTypography <= 13 && (
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
            {currentTypography === 8 && (
              <Container maxWidth="lg">
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
                    After {userName}’s therapy session, she calls her friend,
                    Hope.
                  </Typography>
                  <audio
                    src={PhoneRinging}
                    autoPlay
                    loop={false}
                    controls={false}
                  />
                </Fader>
              </Container>
            )}
            {currentTypography === 9 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={5000}
                >
                  <Subtitle
                    text={`Hope: “Hey I'm here for you. Whatever you need.”
                  `}
                  />
                  <audio src={Hope7} autoPlay loop={false} controls={false} />
                </Fader>
              </Container>
            )}
            {currentTypography === 10 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={5000}
                >
                  <audio
                    src={Sobbing2}
                    autoPlay
                    loop={false}
                    controls={false}
                  />
                </Fader>
              </Container>
            )}
            {currentTypography === 11 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={5000}
                >
                  <Subtitle
                    text={`Hope: “Have you talked to your therapist?”
                  `}
                  />
                  <audio src={Hope8} autoPlay loop={false} controls={false} />
                </Fader>
              </Container>
            )}
            {currentTypography === 12 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={12000}
                >
                  <Subtitle
                    text={`${userName}:  “Yeah, I just had a session. It helped and I'm feeling more hopeful now.
                  `}
                  />
                  <audio
                    src={Avatar13}
                    autoPlay
                    loop={false}
                    controls={false}
                  />
                </Fader>
              </Container>
            )}
            {currentTypography === 13 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={11000}
                >
                  <Subtitle
                    text={`${userName}: “Recognizing the signs of relapse was scary, but reaching out for support was the best decision I made.”
                  `}
                  />
                  <audio
                    src={Avatar14}
                    autoPlay
                    loop={false}
                    controls={false}
                  />
                </Fader>
              </Container>
            )}
            {currentTypography === 14 && (
              <Container maxWidth="lg">
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
                    The healing journey hasn't been easy, but {userName} is
                    starting to feel more like herself again.
                  </Typography>
                </Fader>
              </Container>
            )}
            {currentTypography === 15 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={8000}
                >
                  <Subtitle
                    text={`Dr Faith: “You're making significant progress, ${userName}. I'm proud of how far you've come.”
                  `}
                  />
                  <audio src={Faith4} autoPlay loop={false} controls={false} />
                </Fader>
              </Container>
            )}
            {currentTypography === 16 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={7000}
                >
                  <Subtitle
                    text={`Hope: “You're doing amazing! We're all here for you, every step of the way.”
                  `}
                  />
                  <audio src={Hope9} autoPlay loop={false} controls={false} />
                </Fader>
              </Container>
            )}
            {currentTypography === 17 && (
              <Container maxWidth="lg">
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
                    {userName} is ready to let go of the past and step into the
                    future with courage and compassion.
                  </Typography>
                </Fader>
              </Container>
            )}
            {currentTypography === 18 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={12000}
                >
                  <Subtitle
                    text={`${userName}: “Healing isn't linear. It's messy, it's challenging, but it's also beautiful."
                  `}
                  />
                  <audio
                    src={Avatar15}
                    autoPlay
                    loop={false}
                    controls={false}
                  />
                </Fader>
              </Container>
            )}
            {currentTypography === 19 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={9000}
                >
                  <Subtitle
                    text={`${userName}: “Every step of the way, I've discovered strength I never knew I had."
                  `}
                  />
                  <audio
                    src={Avatar16}
                    autoPlay
                    loop={false}
                    controls={false}
                  />
                </Fader>
              </Container>
            )}
            {currentTypography === 20 && (
              <Container maxWidth="lg">
                <Fader
                  onNextTypography={handleNextTypography}
                  intervalTime={11000}
                >
                  <Subtitle
                    text={`${userName}: “ And now, as I look ahead, I see endless possibilities. I'm ready to embrace them all."
                  `}
                  />
                  <audio
                    src={Avatar17}
                    autoPlay
                    loop={false}
                    controls={false}
                  />
                </Fader>
              </Container>
            )}
          </div>
        </>
      )}

      {![0, 4].includes(currentTypography) &&
        !(userChoice === "Ignore" && currentTypography === 2) &&
        !(
          userChoice === "Seek" &&
          [2, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 18, 19, 20].includes(
            currentTypography
          )
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

export default PageSeven;
