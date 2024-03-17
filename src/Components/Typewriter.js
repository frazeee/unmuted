import { useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Typed from "typed.js"; // Import Typed from 'typed.js'

const Typewriter = ({ children }) => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [children.props.children], // Extract the text from children props
      typeSpeed: 32, // Adjust typing speed as desired
      showCursor: false,
    });

    // Cleanup function to destroy the Typed instance on unmount
    return () => {
      typed.destroy();
    };
  }, [children]); // Add children to dependency array

  return (
    <Container>
      <Typography
        variant="h4"
        sx={{ mt: 48 }}
        ref={typedElement}
        style={{
          fontWeight: 500,
          fontStyle: "italic",
          color: "#ffee1a",
          letterSpacing: "0.16em",
          marginBottom: "16px",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        }}
      />
    </Container>
  );
};
export default Typewriter;
