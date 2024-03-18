import "./ageConsent.css";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";

import "../../Fonts/fonts.css"
import WhiteGrunge from "../../Backgrounds/WhiteGrunge.png";

const AgeConsent = ({ onProceed }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${WhiteGrunge})`,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={`warning ${isVisible ? "show" : ""}`}>
        <Container lg>
          <Grid>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h4" gutterBottom  sx={{fontFamily:"Figtree", fontWeight: "500"}}>
                <div className="">
                This website contains content suitable for individuals
                <strong> aged 18 and above.</strong> By proceeding, you confirm
                that you are the required age.
                </div>
              </Typography>
        
              <Button
                variant="contained"
                color="primary"
                onClick={onProceed}
                sx={{
                  fontSize: "24px",
                  marginTop: "10px",
                  backgroundColor: "black",
                  color: "white",
                  fontFamily:"Figtree"
                }}
              >
                I am 18+
              </Button>
            </Box>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default AgeConsent;
