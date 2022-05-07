import * as React from "react";
import { DarkTheme } from "../../index";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";

export function ProfileCard() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Card
        sx={{
          display: "flex",
          width: "27rem",
          height: "6rem",
          padding: "0.5rem 1rem",
          margin:"10rem",
          justifyContent: "space-between",
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
            image="https://pbs.twimg.com/profile_images/1386919873435996160/RNgT6yEg_400x400.jpg"
            alt="Jantu Deb"
          />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column",flexGrow:"1" }}>
          <CardContent sx={{pl:"2rem"}}>
            <Typography component="div" variant="h6" sx={{textAlign:"left" }}>
              Jantu Deb
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              @Jantu__Deb
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            sx={{
              height: "fit-content",
              color: "secondary.main",
            }}
          >
            Follow
          </Button>
        </Box>
      </Card>
    </ThemeProvider>
  );
}
