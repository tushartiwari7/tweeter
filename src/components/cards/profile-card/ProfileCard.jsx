import * as React from "react";
import { DarkTheme } from "../../index";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";

export function ProfileCard({ firstName, lastName, userImage, userName }) {
  const navigator = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.split("/")[2];
  return (
    <ThemeProvider theme={DarkTheme}>
      <Card
        sx={{
          display: "flex",
          width: "100%",
          height: "6rem",
          padding: "0.5rem 1rem",
          justifyContent: "space-between",
          cursor: "pointer",
          mb: 1,
        }}
        onClick={() => {
          navigator(`/${userName}`);
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ borderRadius: "50%", width: 70, height: 70 }}
            image={userImage}
            alt={`${firstName} ${lastName}`}
          />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: "1" }}>
          <CardContent sx={{ pl: "2rem" }}>
            <Typography component="div" variant="h6" sx={{ textAlign: "left" }}>
              {`${firstName} ${lastName}`}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {userName}
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            sx={{
              height: "fit-content",
              color: "secondary.main",
              textTransform: "none",
              mr: 3,
            }}
          >
            {pathname === "followers" ? "Unfollow" : "Follow"}
          </Button>
        </Box>
      </Card>
    </ThemeProvider>
  );
}
