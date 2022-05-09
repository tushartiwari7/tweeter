import { Container } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, TweetCard } from "../../components";
import { Box } from "@mui/system";
import axios from "axios";

export const Dashboard = () => {
  return (
    // <Container sx={{ display: "flex" }}>
    <Container
      sx={{
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "auto 1fr",
      }}
    >
      <Sidebar />
      <Outlet />
    </Container>
    // </Container>
  );
};
