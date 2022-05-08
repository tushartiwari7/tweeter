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

export function TweetCard({tweet}) {
    console.log(tweet)
    const {firstName, lastName, userName, likes, comments, retweets, tweetData, userImage, tweetImg} = tweet
  return (
    <ThemeProvider theme={DarkTheme}>
      <Card sx={{ maxWidth: 550, margin:"5px" }}>
        <CardHeader
          avatar={
            <CardMedia
              component="img"
              sx={{ borderRadius: "50%", width: 50, height: 50 }}
              image={userImage}
              alt="user Image"
            />
          }
          action={
            <IconButton aria-label="settings">{/* add icon */}</IconButton>
          }
          title={firstName + lastName}
          subheader={userName}
        />
        <Box sx={{ marginLeft: "59px" }}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {tweetData}
            </Typography>
          </CardContent>
          <>
          {
              tweetImg && <CardMedia
              sx={{
                padding: "20px",
                borderRadius: "20px",
              }}
              component="img"
              minHeight="210"
              image={tweetImg}
              alt="Paella dish"
            />
          }</>
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
              <FaRegComment sx={{ mr: 2 }} /> {comments}
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
              <FaRetweet sx={{ mr: 2 }} /> {retweets}K
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
              <FaRegHeart sx={{ mr: 2 }} /> {likes}k
            </Box>
          </CardActions>
        </Box>
      </Card>
    </ThemeProvider>
  );
}
