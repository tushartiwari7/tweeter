import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme } from "../../components";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/tushartiwari7/tweeter">
        Tweeter
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export function Login() {
  const { setLoginState, userDetails } = useAuth();
  const location = useLocation();
  const from = location?.state?.from?.pathname;
  const navigate = useNavigate();
  const [user, setUser] = useState({ userEmail: "", userPassword: "" });

  const loginHandler = (e) => {
    const { userEmail, userPassword } = user;
    const { email, password } = userDetails;
    // eslint-disable-next-line eqeqeq
    if (userEmail == email && userPassword == password) {
      toast.success("logged in successfully");
      setLoginState(true);
      localStorage.setItem("isLogin", true);
      navigate(from || from === "/" ? "/aadarshbalika" : from, {
        replace: true,
      });
    } else {
      toast.error("wrong login credentials");
    }
  };
  return (
    <ThemeProvider theme={DarkTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 6,
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 6,
            paddingBottom: 6,
            bgcolor: "background.dark",
            borderRadius: "10px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setUser({ ...user, userEmail: e.target.value })}
              value={user.userEmail}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) =>
                setUser({ ...user, userPassword: e.target.value })
              }
              value={user.userPassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => loginHandler(e)}
            >
              Log In
            </Button>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                toast.success("logged in successfully");
                setLoginState(true);
                localStorage.setItem("isLogin", true);
                navigate(from || from === "/" ? "/aadarshbalika" : from, {
                  replace: true,
                });
              }}
            >
              Log In As Guest
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
