import React, { FC, useEffect, useState } from "react";

import { Colors } from "../../config/palette";
import strings from '../../config/strings.json'
import useStyles from "./styles";

interface IHeader { }

const Header: FC<IHeader> = ({ }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    if (currentIndex < strings["home.text.welcome"].length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + strings["home.text.welcome"][currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <>
      <div className={classes.textContainer}>
        <span className={classes.text} style={{ color: Colors.GREEN, paddingRight: '1rem', fontSize: '3.5rem' }}>
          {strings['home.text.bash']}
        </span>
        <span className={classes.text} id={"helloText"}>
          {displayText}
        </span>
        <div className={classes.bar} />
      </div>
    </>
  );
};

export default Header;
