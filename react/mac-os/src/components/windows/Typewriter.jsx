import { useEffect, useState } from "react";

const Typewriter = ({ text, speed = 40, style = {}, as = "pre" }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  const Component = as;
  return <Component style={style}>{displayed}</Component>;
};

export default Typewriter;
