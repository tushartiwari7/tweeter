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
          padding: "0.5rem",
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
            image="https://pbs.twimg.com/profile_images/1465392583194992640/qAD__iJb_400x400.jpg"
            alt="Rushikesh Tarapure"
          />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              Rushikesh Tarapure
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              @Neo_MonkStar
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
