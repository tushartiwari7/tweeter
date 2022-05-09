import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";

export const Dashboard = () => {
  return (
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
  );
};
