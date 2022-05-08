import { Container } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, TweetCard } from "../../components";
import { Box } from "@mui/system";
import axios from "axios";

export const Dashboard = () => {
  const [tweets, setTweets] = useState([]);
  const fetchTweets = async () => {
    try {
      const resTweets = await axios.get(
        "https://my-json-server.typicode.com/rkapoor10/Twitter-API-user-tweets-endpoint/tweets"
      );
      console.log(resTweets.data);
      setTweets(resTweets.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchTweets();
  }, []);
  return (
    <Container sx={{ display: "flex" }}>
      <Box
        sx={{
          height: "100vh",
          display: "grid",
          gridTemplateColumns: "auto 1fr",
        }}
      >
        <Sidebar />
        <Outlet />
      </Box>
      <Box
        sx={{ height: "100vh", overflow: "auto" }}
        className="webkit-scrollbar"
      >
        <Grid
          item
          sx={{
            borderBottom: "2px solid var(--border-color)",
            paddingLeft: 2,
            marginTop:"1rem",
            color:"#8c8f8d"
          }}
        >
          <Typography variant="h5" sx={{ color: "var(--primary-color)" }}>
            HOME
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Tweets
          </Typography>
        </Grid>
        <>
          {tweets.map((tweet) => (
            <TweetCard key={`${tweet.id}`} tweet={tweet} />
          ))}
        </>
      </Box>
    </Container>
  );
};
