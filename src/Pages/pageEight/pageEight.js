import React, { useState, useEffect } from "react";

import {
  Typography,
  Box,
  Container,

} from "@mui/material";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Background from "../../Backgrounds/14.2B.png";

import Fader from "../../Components/Fader";

const PageEight = ({ userName, onProceed }) => {
  const [currentTypography, setCurrentTypography] = useState(0);

  const handleNextTypography = () => {
    setCurrentTypography((currentTypography) => currentTypography + 1);
  };

  useEffect(() => {
    if (currentTypography === 4) {
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
              backgroundImage: currentTypography === 4 ? "":`url(${Background})`,
              backgroundSize: "cover",
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white"
            }}
          >
            <div
              className="fade-in"
              style={{ textAlign: "center", width: "80%" }}
            >
              <Typography
                variant="h4"
                sx={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  fontFamily: "Figtree",
                  fontWeight: "500"
                }}
                gutterBottom
              >
                Remember, don't hesitate to turn to caring friends and family
                for support. Having them around can make a big difference in
                dealing with tough situations.
              </Typography>
            </div>
          </div>
        </>
      )}

      {currentTypography === 1 && (
        <>
          <div
            style={{
              backgroundImage: `url(${Background})`,
              backgroundSize: "cover",
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <div
              className="fade-in"
              style={{ textAlign: "center", width: "80%" }}
            >
              <Typography
                variant="h4"
                sx={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  fontFamily: "Figtree",
                  fontWeight: "500"
                }}
                gutterBottom
              >
                It's time to unmute and let your voice be heard. When we share
                our stories and listen to each other, we create a powerful force
                for healing.
              </Typography>
            </div>
          </div>
        </>
      )}
      {currentTypography === 2 && (
        <Container maxWidth="lg">
          <Fader onNextTypography={handleNextTypography} intervalTime={5000}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              United, we can create a world where all voices matter and justice
              prevails.
            </Typography>
          </Fader>
        </Container>
      )}
      {currentTypography === 3 && (
        <Container maxWidth="lg">
          <Fader onNextTypography={handleNextTypography} intervalTime={5000}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              If you or someone you know has encountered sexual harassment,
              there are organizations and experts ready to help.
            </Typography>
          </Fader>
        </Container>
      )}

      {![2, 3, 4].includes(currentTypography) && (
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
              color: "white",
            }}
          />
        </Box>
      )}
    </div>
  );
};

export default PageEight;
