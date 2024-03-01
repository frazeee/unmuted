import "./ageConsent.css";
import { Container, Grid, Typography, Box, Paper, Button } from "@mui/material";
import { useState, useEffect } from "react";

const AgeConsent = ({ onProceed }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)
  }, []);

  return (
    <div className={`warning ${isVisible ? "show" : ""}`}>
      <Container lg>
        <Grid>
          <Box
            sx={{
              marginTop: 24,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              color={"white"}
              align="center"
              sx={{mb:3}}
            >
              This project may contain information that is painful or difficult
              to read for some individuals. We advise caution and encourage
              those who may be sensitive to such content to consider their
              well-being before engaging.
            </Typography>
            <Paper elevation={1} sx={{ padding: '20px', textAlign: 'center' }}>
              <Typography variant="h6" sx={{fontWeight:"bold"}} gutterBottom>
                Age Confirmation Required ⚠️
              </Typography>
              <Typography gutterBottom>
                This website contains content suitable for individuals aged 18
                and above. By proceeding, you confirm that you are the required
                age. Please click “I am 18 or older” to continue.
              </Typography>
              <Button variant="contained" color="primary" onClick={onProceed} sx={{ marginTop: '10px' }}>
                I am 18+
              </Button>
              <Typography sx={{ marginTop: '20px' }}>
                Thank you for your understanding and compliance.
              </Typography>
            </Paper>
            <Typography
              variant="h6"
              color={"white"}
              align="center"
              sx={{ mt: 5 }}
            >
              Remember, you can exit the journey anytime by clicking the{" "}
              <span style={{ fontWeight: "bold" }}>'X'</span> button.
            </Typography>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default AgeConsent;
