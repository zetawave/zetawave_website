import { Box, Grid } from "@mui/material";
import React, { FC } from "react";

import Header from "../../Components/Header";
import useStyles from "./styles";

interface IHome {}

const Home: FC<IHome> = () => {
  const classes = useStyles();
  return (
    <>
        <Header />
        <Grid container spacing={2} className={classes.box}>
          <Grid item xs={12} className={classes.boxItem}>
              <Grid  container spacing={2}>

              </Grid>
          </Grid>
        </Grid>
    </>
  );
};

export default Home;
