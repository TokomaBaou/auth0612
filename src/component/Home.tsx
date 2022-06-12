import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";

export const Home = () => {
  return (
    <>
      <Container>
        <Grid container style={{ marginTop: "1em" }}>
          <Grid item md={4}></Grid>
          <Grid item md={4}>
            <Typography>Home</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
