import React, { useRef, useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "../components/Copyright";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../redux/actions/authAction";
import { useHistory } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const email = useRef();
  const password = useRef();
  const auth = useSelector((state) => state.firebase.auth);

  const [sub, setSub] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const creds = {
      email: email.current.value,
      password: password.current.value,
    };
    setSub(true);
    dispatch(signIn(creds));
  };
  useEffect(() => {
    if (isLoaded(auth) && sub && !isEmpty(auth)) {
      history.push("/");
    }
  }, [sub, history, dispatch, auth]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={password}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => handleSubmit(e)}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forgot">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to="/register">{"Don't have  an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </div>

      <Grid container alignItems="center" justify="center">
        <Grid item>
          <Box mt={15}>
            <Copyright />
          </Box>
          <Box mt={10}>
            {sub && (
              <Card>
                <CardContent>
                  <LinearProgress />
                </CardContent>
              </Card>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
