import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";

export const Dashboard = () => {
  return (
    <Container
      sx={{
        height: "100vh",
      }}
    >
      <Sidebar />
      <Outlet />
    </Container>
  );
};
