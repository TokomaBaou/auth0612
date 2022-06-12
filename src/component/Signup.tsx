import React, { Fragment, useEffect, useState } from "react";

import {
  Button,
  Container,
  FormControl,
  Grid,
  Link,
  TextField,
  Typography
} from "@material-ui/core";

export const Signup = () => {
  return (
    <>
      <Container>
        <Grid container style={{ marginTop: "1em" }}>
          <Grid item md={4}></Grid>
          <Grid item md={4}>
            <Typography>Signup</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
