import React from "react"; // Import React instead of importing all as React
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";

const TitlePage = () => {
  return (
    <div>
      <Container>
        <Grid item lg={4}>
          <Box
            sx={{
              marginTop: 32,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 18, fontWeight: "bold" }}
                  gutterBottom
                >
                  UNMUTED: A Story on Women’s Protection and Wellbeing
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Her story is silenced. Will you be the one to unmute it?
                </Typography>
              </CardContent>
              <CardActions>
                <Grid container justifyContent="center">
                  <Button size="medium" variant="contained" color="primary">
                    Proceed
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default TitlePage;
