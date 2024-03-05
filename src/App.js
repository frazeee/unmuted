import "./App.css";
import TitlePage from "./Pages/titlePage";
import AgeConsent from "./Pages/ageConsent/ageConsent";
import PageThree from "./Pages/PageThree/pageThree";

import { useState } from "react";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

import TypewriterTest from "./Pages/Typewriter";

function App() {
  // Create styles using makeStyles
  const theme = createTheme((theme) => ({
    typo: {
      flexGrow: 1,
      textAlign: "center",
    },
  }));

  responsiveFontSizes(theme);

  const [page, setPage] = useState(0);

  const handleProceed = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{}}>
        {page === 0 && <TitlePage onProceed={handleProceed} />}
        {page === 1 && <AgeConsent onProceed={handleProceed} />}
        {page === 2 && <PageThree onProceed={handleProceed} />}

        <PageThree />
      </div>
    </ThemeProvider>
  );
}

export default App;
