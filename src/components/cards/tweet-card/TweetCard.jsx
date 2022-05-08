import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";
import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme } from "../../index";
import "./TweetCard.css";

export function TweetCard() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Card sx={{ maxWidth: 550, margin: "50px" }}>
        <CardHeader
          avatar={
            <CardMedia
              component="img"
              sx={{ borderRadius: "50%", width: 50, height: 50 }}
              image="https://pbs.twimg.com/profile_images/1465392583194992640/qAD__iJb_400x400.jpg"
              alt=""
            />
          }
          action={
            <IconButton aria-label="settings">{/* add icon */}</IconButton>
          }
          title="Rushikesh Tarapure"
          subheader="@Neo_MonkStar"
        />
        <Box sx={{ marginLeft: "59px" }}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardMedia
            sx={{
              padding: "20px",
              borderRadius: "20px",
            }}
            component="img"
            height="210"
            image="https://pbs.twimg.com/media/FSN1EzCaAAEc5Fa?format=jpg&name=small"
            alt="Paella dish"
          />
          <CardActions
            disableSpacing
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              className="hover-blue"
            >
              <FaRegComment sx={{ mr: 2 }} /> 200
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              className="hover-green"
            >
              <FaRetweet sx={{ mr: 2 }} /> 2K
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              className="hover-pink"
            >
              <FaRegHeart sx={{ mr: 2 }} /> 5k
            </Box>
          </CardActions>
        </Box>
      </Card>
    </ThemeProvider>
  );
}
