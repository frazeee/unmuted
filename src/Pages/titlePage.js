import React from "react"; // Import React instead of importing all as React
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";

const TitlePage = ({onProceed}) => {
  return (
    <div>
      <Container lg>
        <Grid item lg={4}>
          <Box
            sx={{
              marginTop: 30,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h1" sx={{ fontWeight: "bold" }} color={"white"}>
              UNMUTED
            </Typography>
            <Typography variant="h4" sx={{ mb: 3 }} color={"white"} align="center" >
            A Story on Women’s Protection and Wellbeing
            </Typography>
            <Typography sx={{ mb: 3 }} color={"white"}>
              Her story is silenced. Will you be the one to unmute it?
            </Typography>
            <Grid container justifyContent="center">
              <Button size="medium" variant="contained" color="primary" onClick={onProceed}>
                Proceed
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default TitlePage;
