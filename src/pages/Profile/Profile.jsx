import { Grid, Typography } from "@mui/material";
import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { NotFound } from "../NotFound/NotFound";

export const Profile = () => {
  const { profileId } = useParams();
  const { users } = useAuth();
  const user = users.find((user) => user.userName === profileId);
  return (
    <>
      {user ? (
        <Grid
          container
          direction="column"
          sx={{
            display: "grid",
            gridTemplateRows: "auto auto auto 1fr",
            height: "100vh",
          }}
        >
          <Grid
            item
            sx={{
              borderBottom: "2px solid var(--border-color)",
              paddingLeft: 2,
            }}
          >
            <Typography variant="h5">{`${user?.firstName ?? "John"} ${
              user?.lastName ?? "Doe"
            }`}</Typography>
            <Typography variant="subtitle1" gutterBottom>
              {user.userName}
            </Typography>
          </Grid>
          <Outlet />
        </Grid>
      ) : (
        <NotFound />
      )}
    </>
  );
};
