import "./App.css";
import TitlePage from "./Pages/titlePage";
import AgeConsent from "./Pages/ageConsent/ageConsent";
import PageThree from "./Pages/PageThree/pageThree";
import PageFour from "./Pages/PageFour/PageFour";
import PageFive from "./Pages/PageFive/pageFive";
import PageSix from "./Pages/pageSix/pageSix";

import { useRef, useState, useEffect } from "react";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

import BackgroundMusic from "./Audio/BGMusic.mp3";
import OutroMusic from "./Audio/OUTRO.mp3";
import PageSeven from "./Pages/PageSeven/pageSeven";
import PageEight from "./Pages/pageEight/pageEight";


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
  const [isOutroPlaying, setIsOutroPlaying] = useState(false);
  const audioRef = useRef(null);
  const outroRef = useRef(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.volume = 0.01;
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handleChangeName = (userName) => {
    setUsername(userName);
  };

  const handleOutroPlayPause = () => {
    setIsOutroPlaying(!isOutroPlaying);
  };

  useEffect(() => {
    if (isOutroPlaying) {
      outroRef.current.volume = 0.01; // Adjust volume as needed
      outroRef.current.play();
    } else {
      outroRef.current.pause();
    }
  }, [isOutroPlaying]);

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
      <audio ref={outroRef} src={OutroMusic} controls={false} loop>
        Your browser does not support the audio element.
      </audio>
      <ThemeProvider theme={theme}>
        <div className="App" style={{}}>
          {page === 0 && (
            <TitlePage
              onProceed={handleProceed}
              onPlayPause={handlePlayPause}
            />
          )}
          {page === 1 && <AgeConsent onProceed={handleProceed} />}
          {page === 2 && (
            <PageThree
              onProceed={handleProceed}
              userName={userName}
              handleChangeName={handleChangeName}
              onPlayPause={setIsPlaying}
            />
          )}
          {page === 3 && (
            <PageFour onProceed={handleProceed} userName={userName} />
          )}
          {page === 4 && (
            <PageFive onProceed={handleProceed} userName={userName} />
          )}
          {page === 5 && (
            <PageSix onProceed={handleProceed} userName={userName} />
          )}
          {page === 6 && (
            <PageSeven
              onProceed={handleProceed}
              userName={userName}
              handlePlayPause={handleOutroPlayPause}
            />
          )}
          {page === 7 && (
            <PageEight onProceed={handleProceed} userName={userName} />
          )}
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
