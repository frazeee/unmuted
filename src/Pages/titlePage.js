import React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Grid, Button, Link, Modal } from "@mui/material";

import "./titlePage.css";
import "../Fonts/fonts.css";
import Arrow from "../Components/Arrow.js";

import backgroundVideo from "../Backgrounds/TitleVideo.mp4";
import Fader from "../Components/Fader";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TitlePage = ({ onProceed, onPlayPause }) => {
  const [currentTypography, setCurrentTypography] = useState(0);

  const [openAboutModal, setOpenAboutModal] = useState(false);
  const [openReferencesModal, setOpenReferencesModal] = useState(false);

  const handleOpenAbout = () => {
    setOpenAboutModal(true);
  };

  const handleCloseAbout = () => {
    setOpenAboutModal(false);
  };

  const handleOpenReferences = () => {
    setOpenReferencesModal(true);
  };

  const handleCloseReferences = () => {
    setOpenReferencesModal(false);
  };
  const handleNextTypography = () => {
    setCurrentTypography((currentTypography) => currentTypography + 1);
    if (currentTypography + 1 === 1) {
      onPlayPause();
    }
    if (currentTypography + 1 === 2) {
      onProceed();
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
                  marginTop: "100px",
                  fontFamily: "Figtree",
                  fontWeight: "400",
                }}
              >
                <Link href="#" color="inherit" onClick={handleOpenAbout}>
                  About the Project
                </Link>

                <Link
                  href="#"
                  color="inherit"
                  sx={{ marginLeft: 3 }}
                  onClick={handleOpenReferences}
                >
                  References
                </Link>
              </div>

              <Grid item lg={8}>
                <Box sx={{ textAlign: "center" }}>
                  <div className="glitch-wrapper">
                    <Typography
                      variant="h1"
                      sx={{
                        fontWeight: "bold",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      }}
                      color="white"
                    >
                      <div className="glitch-wrapper">
                        <div className="glitch redHat" data-glitch="UNMUTED">
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
                <Button
                  variant="outlined"
                  sx={{ fontSize: "24px", px: 3, mx: "auto", display: "block" }}
                  style={{
                    boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    fontFamily: "Figtree",
                  }}
                  onClick={handleNextTypography}
                >
                  START
                </Button>
              </Grid>
            </>
          )}

          {currentTypography === 1 && (
            <>
              <Fader
                onNextTypography={handleNextTypography}
                intervalTime={800000000}
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
                      style={{
                        fontFamily: "Figtree",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      }}
                    >
                      Remember, you can exit the journey anytime by closing the
                      browser.
                    </Typography>
                  </Box>
                </Grid>
              </Fader>
            </>
          )}

          <Modal
            open={openAboutModal}
            onClose={handleCloseAbout}
            aria-labelledby="about-modal-title"
            aria-describedby="about-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="about-modal-title"
                variant="h6"
                component="h2"
                style={{ fontFamily: "Figtree" }}
              >
                <b>About the Project</b>
              </Typography>
              <Typography
                id="about-modal-description"
                sx={{ mt: 2 }}
                style={{ fontFamily: "Figtree" }}
              >
                Unmuted is a thesis project that explores the profound
                psychological impact of sexual harassment, with a particular
                focus on its prevalence and effects within online environments.
              </Typography>
              <Typography
                sx={{ mt: 2, mb: 2 }}
                style={{ fontFamily: "Figtree" }}
              >
                The creatives behind this project, Julia de Armas and Kayi
                Tamsi, advocate against sexual harassment.
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ mt: 0.5 }}
                style={{ fontFamily: "Figtree" }}
              >
                <strong>Julia de Armas:</strong> Research and Scriptwriting,
                Cinematography
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ mt: 0.5 }}
                style={{ fontFamily: "Figtree" }}
              >
                <strong>Kayi Tamsi:</strong> Creative Direction, Audio and
                Visuals
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ mt: 0.5 }}
                style={{ fontFamily: "Figtree" }}
              >
                <strong>Kyle Uy:</strong> Web Consultant
              </Typography>
            </Box>
          </Modal>

          <Modal open={openReferencesModal} onClose={handleCloseReferences}>
            <Box sx={style}>
              <Typography id="about-modal-title" variant="h6" component="h2" sx={{fontFamily:"Figtree",fontWeight: "800"}}>
                References
              </Typography>

              <Typography style={{ color: "black", fontFamily: "Figtree" }}>
                Statistics mentioned in the hypernarrative were retrieved from
                the following sources:
              </Typography>
              <ul>
                <li>
                  <Link
                    variant="subtitle1"
                    sx={{ mt: 4 }}
                    href="https://datareportal.com/reports/digital-2023-philippines#:~:text=The%20Philippines%20Mwas%20home%20to,percent%20of%20the%20total%20population."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography
                      style={{ color: "black", fontFamily: "Figtree", fontWeight: "bold" }}
                    >
                      “About 73% of Filipinos are social media users.” Simon
                      Kemp (2023)
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    variant="subtitle1"
                    href="https://plan-international.org/philippines/news/2020/10/16/7-in-10-girls-and-young-women-in-ph-experience-online-harassment-plan-international-study/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography
                      style={{ color: "black", fontFamily: "Figtree", fontWeight: "bold" }}
                      sx={{ mt: 2 }}
                    >
                      “Nearly 7 in 10 girls and young women in the Philippines
                      have experienced harassment on social media. These
                      harassments happen frequently.” Aly Narvaez (2020)
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    variant="subtitle1"
                    href="https://journals.sagepub.com/doi/10.1177/08862605221147064"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography
                      style={{ color: "black", fontFamily: "Figtree", fontWeight: "bold" }}
                      sx={{ mt: 2 }}
                    >
                      “Those who have experienced the incident may feel ashamed
                      and may not want others to know what happened. They might
                      avoid seeking help or reporting their experience.”
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    variant="subtitle1"
                    href="https://www.pewresearch.org/internet/2017/07/11/online-harassment-in-focus-most-recent-experience/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography
                      style={{ color: "black", fontFamily: "Figtree", fontWeight: "bold" }}
                      sx={{ mt: 2 }}
                    >
                      “Research proves that ignoring harassment doesn't stop
                      it.” (2017)
                    </Typography>
                  </Link>
                </li>
              </ul>

              <Typography
                sx={{ mt: 2 }}
                style={{ color: "black", fontFamily: "Figtree", }}
              >
                We would also like to acknowledge the students, teachers, and
                mental health experts who contributed to our ideation and
                decision-making process, ensuring that we create a story that is
                both genuine and transformative.
              </Typography>
            </Box>
          </Modal>

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
              <Arrow />
            </Box>
          )}
        </div>
      </Container>
    </div>
  );
};

export default TitlePage;
