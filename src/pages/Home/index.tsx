import { Grid, Typography } from "@mui/material";
import React, { FC } from "react";

import Bidoo from "../../assets/bidoo_analyzer.png";
import Bmac from "../../assets/bmc-button.png";
import ButtonLand from "../../assets/buttonland.png";
import Colorbrush from '../../assets/colorbrush.png'
import Github from "../../assets/github.png";
import Header from "../../Components/Header";
import Playstore from "../../assets/playstore.png";
import strings from "../../config/strings.json";
import useStyles from "./styles";

interface IHome {}

const icons = [
  {
    src: Github,
    alt: "github",
    link: "https://github.com/zetawave",
  },
  {
    src: Bidoo,
    alt: "bidoo",
    link: "https://play.google.com/store/apps/details?id=com.bidoo_analyzer",
  },
  {
    src: Colorbrush,
    alt: "colorbrush",
    link: "https://play.google.com/store/apps/details?id=com.colorbrush",
  },
  {
    src: ButtonLand,
    alt: "buttonland",
    link: "https://play.google.com/store/apps/details?id=com.buttonland",
  },
  {
    src: Playstore,
    alt: "playstore",
    link: "https://play.google.com/store/apps/dev?id=8021603986964830742",
  },
];

const Home: FC<IHome> = () => {
  const classes = useStyles();

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Header />
      <Grid container spacing={2} className={classes.box}>
        <Grid item xs={12} className={classes.boxItem}>
          {icons.map((i: any) => (
            <img
              onClick={() => openLink(i.link)}
              alt={i.alt}
              src={i.src}
              className={classes.icon}
              style={!!i.styles ? { ...i.styles } : {}}
            />
          ))}
        </Grid>
        <Grid item xs={12} className={classes.boxItem}>
          <Typography className={classes.text}>{strings.contact}</Typography>
          <img
            onClick={() => openLink(strings.bmaclink)}
            alt={"bmc"}
            src={Bmac}
            className={classes.button}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
