import "./App.css";
import TitlePage from "./Pages/titlePage";
import AgeConsent from "./Pages/ageConsent/ageConsent";
import PageThree from "./Pages/PageThree/pageThree";

import { useState } from "react";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

import TypewriterTest from "./Components/Typewriter";
import PageFour from "./Pages/PageFour/PageFour";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff", 
      },
    },
  });

  responsiveFontSizes(theme);

  const [page, setPage] = useState(0);

  const handleProceed = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const [userName, setUsername] = useState("Rachel");

  const handleChangeName = (userName) => {
    setUsername(userName);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{}}>
        {/* {page === 0 && <TitlePage onProceed={handleProceed} />}
        {page === 1 && <AgeConsent onProceed={handleProceed} />}
        {page === 2 && (
          <PageThree
            onProceed={handleProceed}
            userName={userName}
            handleChangeName={handleChangeName}
          />
        )}
        {page === 3 && <PageFour onProceed={handleProceed} userName={userName} />} */}
        <PageFour onProceed={handleProceed} userName={userName} />
      </div>
    </ThemeProvider>
  );
}

export default App;
