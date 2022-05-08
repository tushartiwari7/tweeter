import React from "react";
import { useLocation } from "react-router-dom";
import { NavTabs } from "../../components";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Box, Input, TextField } from "@mui/material";
export const FollowInsights = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[2];
  console.log(pathname);
  return (
    <>
      <NavTabs />
      {/* searchbar */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          color: "var(--primary-color)",
          my: 2,
        }}
        variant="fullWidth"
      >
        <AccountCircle sx={{ mr: 1, my: 0.5 }} />
        <Input
          id="input-with-sx"
          label="With sx"
          variant="standard"
          color="primary"
          placeholder="Search"
          sx={{
            flexGrow: 1,
            color: "var(--primary-color)",
            border: "none",
            fontSize: "1.2rem",
            pl: 2,
          }}
        />
      </Box>
      {/* list of users: followings, followers */}
    </>
  );
};
