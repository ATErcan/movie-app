import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { forgotPassword, signIn, signUpWithGoogle } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../assets/GoogleIcon";

const Login = () => {
  const navigate = useNavigate();

  // state to store login information
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleLoginInfo = (e) => {
    setLoginInfo((prevLoginInfo) => {
      return {
        ...prevLoginInfo,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(loginInfo.email, loginInfo.password, navigate);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            value={loginInfo.email}
            onChange={handleLoginInfo}
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
            value={loginInfo.password}
            onChange={handleLoginInfo}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Button
            type="button"
            fullWidth
            variant="text"
            onClick={() => signUpWithGoogle(navigate)}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "0.5rem",
              cursor: "pointer",
              border: "1.5px solid #3C8BD9",
              mb: 2,
            }}
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                href="#"
                onClick={() => forgotPassword(loginInfo.email)}
                variant="body2"
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
