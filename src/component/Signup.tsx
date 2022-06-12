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

// authサービスをインポート
import auth from "../firebase";
export const Signup = (props: any) => {
  //formに入力された値を保持する
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //ログイン　状態かどうかを判定するイベントを発動
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      //ログインしている場合、ホームへリダイレクト
      user && props.history.push("/");
    });
  }, []);

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
