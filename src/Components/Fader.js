import { useState, useEffect } from "react";

const Fader = ({ children, onNextTypography, intervalTime }) => {
  const [fadeProp, setFadeProp] = useState({
    fade: 'fade-in',
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      setFadeProp({
        fade: fadeProp.fade === 'fade-in' ? 'fade-out' : 'fade-in',
      });

      setTimeout(() => {
        onNextTypography();
      }, 1000); // 2 seconds delay
    }, intervalTime);

    return () => clearInterval(timeout);
  }, [fadeProp, intervalTime]);

  return (
    <div className={fadeProp.fade}>
      {children}
    </div>
  );
};

export default Fader;
