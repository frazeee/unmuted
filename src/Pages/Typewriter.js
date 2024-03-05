import { useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import { ReactTyped, Typed } from "react-typed";
import { Container } from "@mui/material";

const Typewriter = ({ text }) => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [text],
      typeSpeed: 45, // Adjust typing speed as desired
    });

    // Cleanup function to destroy the Typed instance on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <Container>
        <Typography
          variant="h3"
          ref={typedElement}
          color={"white"}
        ></Typography>
      </Container>
    </div>
  );
};
export default Typewriter;
