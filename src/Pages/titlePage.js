import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Grid, Link } from "@mui/material";

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import "./titlePage.css";
import "../Fonts/fonts.css";
import backgroundVideo from "../Backgrounds/TitleVideo.mp4";

const TitlePage = ({ onProceed }) => {
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
          <div
            style={{
              position: "absolute",
              top: "0",
              marginTop: "16px",
              fontFamily: "Figtree",
            }}
          >
            {" "}
            <Link href="#" color="inherit" sx={{ marginRight: 3 }}>
              About the Project
            </Link>
            <Link href="#" color="inherit">
              References
            </Link>
          </div>

          <Grid item lg={8}>
            <Box sx={{ textAlign: "center" }}>
              <div className="glitch-wrapper">
                <Typography
                  variant="h1"
                  sx={{ fontWeight: "bold" }}
                  color="white"
                >
                  <div className="glitch-wrapper">
                    <div className="glitch eighties" data-glitch="UNMUTED">
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
          </Grid>
          <Box
            sx={{
              position: "fixed",
              bottom: "40px",
              right: "40px",
              padding: "10px",
              cursor: "pointer",
            }}
            onClick={onProceed}
          >
            <ArrowCircleRightIcon sx={{ fontSize: 82, color: "white", }} />
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default TitlePage;
