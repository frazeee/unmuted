import React, { useState, useEffect, useRef } from "react";
import {
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  SvgIcon,
  Box,
  Container,
} from "@mui/material";
import "./styles.css";
import "../../Fonts/fonts.css";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Typewriter from "../../Components/Typewriter";
import VolumeUp from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VOTest from "../../Audio/BGMusic.mp3";

import Background from "../../Backgrounds/Slide5-6.mp4";
import Background2 from "../../Backgrounds/Slide8.mp4"
import WhiteGrunge from "../../Backgrounds/WhiteGrunge.png";

const PageThree = ({ onProceed, userName, handleChangeName, onPlayPause }) => {
  const [currentTypography, setCurrentTypography] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSubmit = (event) => {
    handleNextTypography();
  };

  const handleNextTypography = () => {
    setCurrentTypography(currentTypography + 1);
  };

  useEffect(() => {
    if (currentTypography === 7) {
      onProceed();
    }
  }, [currentTypography, onProceed]);

  useEffect(() => {
    if ([0, 1, 3].includes(currentTypography) && currentTypography !== 2) {
      const timer = setTimeout(() => {
        setCurrentTypography((prevTypography) => prevTypography + 1);
      }, 4000); // Increment after 3 seconds

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [currentTypography]);

  useEffect(() => {
    if ([4, 5].includes(currentTypography)) {
      const timer = setTimeout(() => {
        setCurrentTypography((prevTypography) => prevTypography + 1);
      }, 9000); // Increment after 5 seconds

      return () => clearTimeout(timer); // Clean up the timer
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
            <Typography
              variant="h4"
              sx={{ fontFamily: "Work Sans", color: "white" }}
            >
              You are about to follow a young woman to a path of healing.
            </Typography>
          )}
        </div>
        <div
          className={currentTypography === 1 ? "fade-in" : "fade-out"}
          style={{ textAlign: "center" }}
        >
          {currentTypography === 1 && (
            <Typography
              variant="h4"
              sx={{ fontFamily: "Work Sans", color: "white" }}
            >
              Let your decisions be her guide.
            </Typography>
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
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontFamily: "Figtree" }}
                >
                  Here she is.
                </Typography>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontFamily: "Figtree" }}
                >
                  What's her name?
                </Typography>
                <TextField
                  style={{ backgroundColor: "white", borderRadius: "5px" }}
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                  onChange={(e) => handleChangeName(e.target.value)}
                />
                <Button
                  variant="outlined"
                  onClick={handleSubmit}
                  sx={{
                    color: "#4CAF50",
                    borderColor: "white",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                      borderColor: "white",
                    },
                  }}
                  style={{
                    marginTop: "10px",
                    borderRadius: "15px",
                    fontFamily: "Figtree",
                    color: "white",
                  }}
                >
                  Continue
                </Button>
              </Container>
            )}

            {currentTypography === 3 && (
              <div
                className={currentTypography === 3 ? "fade-in" : "fade-out"}
                style={{ textAlign: "center", color: "white", zIndex: 1 }}
              >
                <Typography variant="h4" sx={{ fontFamily: "Figtree" }}>
                  {userName}, what a beautiful name!
                </Typography>
              </div>
            )}
          </Grid>
        )}

        <div
          style={{
            textAlign: "center",
          }}
        >
          {currentTypography === 4 && (
            <div
              className="typewriter-container"
              style={{
                backgroundImage: `url(${WhiteGrunge})`,
              }}
            >
              <Typewriter text="73% of Filipinos are social media users. Gen Z, aged 18 to 24, is the largest segment." />
            </div>
          )}
        </div>

        <div style={{ textAlign: "center" }}>
          {currentTypography === 5 && (
            <div
              className="typewriter-container"
              style={{
                backgroundImage: `url(${WhiteGrunge})`,
              }}
            >
              <Typewriter text={`${userName}, belongs to this demographic.`} />
            </div>
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
                  top:"0",
                  left:"0",
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
                sx={{ fontFamily: "Work Sans", color: "white" }}
              >
                Let's uncover {userName}'s story
              </Typography>
              <Box>
                <audio
                  ref={audioRef}
                  src={VOTest}
                  controls={false}
                  onEnded={() => setIsPlaying(false)}
                >
                  {" "}
                  Your browser does not support the audio element.
                </audio>
                {isPlaying && (
                  <>
                    <VolumeUp
                      sx={{ color: "white", width: "250px", height: "250px" }}
                      onClick={() => { handlePlay(); onPlayPause(false); }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ color: "white", fontFamily: "Work Sans" }}
                    >
                      Click to mute.
                    </Typography>
                  </>
                )}
                {!isPlaying && (
                  <>
                    <VolumeOffIcon
                      sx={{ color: "white", width: "250px", height: "250px" }}
                      onClick={() => { handlePlay(); onPlayPause(false); }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ color: "white", fontFamily: "Work Sans" }}
                    >
                      Click to unmute.
                    </Typography>
                  </>
                )}
              </Box>
            </>
          )}
        </div>
        {![2, 3].includes(currentTypography) && (
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
          <ArrowCircleRightIcon sx={{ fontSize: 82, color: "white" }} />
        </Box>
      )}
      </div>
    </>
  );
};

export default PageThree;
