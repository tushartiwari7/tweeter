import { Grid, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";

export const Profile = () => {
  const profile = true;
  return (
    <>
      {profile ? (
        <Grid
          container
          gridTemplateRows="auto auto auto 1fr"
          direction="column"
        >
          <Grid
            item
            sx={{
              borderBottom: "2px solid var(--border-color)",
              paddingLeft: 2,
            }}
          >
            <Typography variant="h5">Tushar Tiwari</Typography>
            <Typography variant="subtitle1" gutterBottom>
              tushartiwari7
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
