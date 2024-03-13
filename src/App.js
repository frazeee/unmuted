import "./App.css";
import TitlePage from "./Pages/titlePage";
import AgeConsent from "./Pages/ageConsent/ageConsent";
import PageThree from "./Pages/PageThree/pageThree";
import PageFour from "./Pages/PageFour/PageFour";

import { useRef, useState, useEffect } from "react";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

import BackgroundMusic from "./Audio/BGMusic.mp3"


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
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);


  const handlePlayPause = () => {
    setIsPlaying(!isPlaying); 
  };


  useEffect(() => {
    if (isPlaying) {
      audioRef.current.volume = 0.1
      audioRef.current.play(); 
    } else {
      audioRef.current.pause(); // Pause audio if isPlaying is false
    }
  }, [isPlaying]);

  const handleChangeName = (userName) => {
    setUsername(userName);
  };

  return (
    <>
                  <audio
                  ref={audioRef}
                  src={BackgroundMusic}
                  controls={false}
                  onEnded={() => setIsPlaying(false)}
                  loop
                >
                  {" "}
                  Your browser does not support the audio element.
                </audio>
    <ThemeProvider theme={theme}>
      <div className="App" style={{}}>
        {/* {page === 0 && <TitlePage onProceed={handleProceed} onPlayPause={handlePlayPause} />}
        {page === 1 && <AgeConsent onProceed={handleProceed} />}
        {page === 2 && (
          <PageThree
            onProceed={handleProceed}
            userName={userName}
            handleChangeName={handleChangeName}
            onPlayPause={setIsPlaying} 
          />
        )}
        {page === 3 && <PageFour onProceed={handleProceed} userName={userName} />} */}
        <PageFour onProceed={handleProceed} userName={userName} />
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
