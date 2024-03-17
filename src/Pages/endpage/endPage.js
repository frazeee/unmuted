import React from "react";
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  useTheme,
} from "@mui/material";

import "./endpage.css";

const EndPage = () => {
  const theme = useTheme();

  return (
    <div style={{fontFamily: "Figtree"}}>
    <Container maxWidth="xl" sx={{ mt: 20 }}>
      <Grid container spacing={5} justifyContent="center">
        {/* Card 1 - De La Salle University Units */}
        <Grid item xs={12} md={6} alignItems="center">
          <Card className="card-glassmorphism">
            <CardHeader title={<Typography variant="h6" style={{ fontWeight: 'bold', textAlign:"center"  }}>De La Salle University Units</Typography>}/>
            <CardContent>
              <Grid container spacing={5} sx={{ textAlign: "center" }}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">
                    Office of Counseling and Career Services
                  </Typography>
                  <Button variant="contained" color="primary">
                    Button
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">
                    Lasallian Center for Inclusion, Diversity, and Wellbeing
                  </Typography>
                  <Button variant="contained" color="primary">
                    Button
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} alignItems="center">
          <Card className="card-glassmorphism" sx={{}}>
            <CardHeader title={<Typography variant="h6" style={{ fontWeight: 'bold', textAlign:"center"  }}>For Legal Support and Action</Typography>} />
            <CardContent>
              <Grid container spacing={5} sx={{ textAlign: "center" }}>
                <Grid item xs={12} sm={6} alignContent="center">
                  <Typography variant="h6">Office of the Cybercrime</Typography>
                  <Button variant="contained" color="primary">
                    Button
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">
                    Cybercrime Investigation and Coordinating Center
                  </Typography>
                  <Button variant="contained" color="primary">
                    Button
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} alignItems="center">
          <Card className="card-glassmorphism">
            <CardHeader title={<Typography variant="h6" style={{ fontWeight: 'bold', textAlign:"center"  }}>For Psychological Services</Typography>}  />
            <CardContent>
              <Grid container spacing={5} sx={{ textAlign: "center" }}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">
                    Office of Counseling and Career Services
                  </Typography>
                  <Button variant="contained" color="primary">
                    Button
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">
                    Lasallian Center for Inclusion, Diversity, and Wellbeing
                  </Typography>
                  <Button variant="contained" color="primary">
                    Button
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} alignItems="center">
          <Card className="card-glassmorphism">
            <CardHeader title={<Typography variant="h6" style={{ fontWeight: 'bold', textAlign:"center" }}>Other Materials</Typography>}  />
            <CardContent>
              <Grid container spacing={5} sx={{ textAlign: "center" }}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">
                  Read more about the Safe Spaces Act (Bawal Bastos Law) 
                  </Typography>
                  <Button variant="contained" color="primary">
                    Button
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">
                    Share the website to your friends!
                  </Typography>
                  <Button variant="contained" color="primary">
                    Copy Link
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};

export default EndPage;
