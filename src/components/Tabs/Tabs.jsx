import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";

function LinkTab(props) {
  const navigate = useNavigate();

  return (
    <Tab
      onClick={(event) => {
        event.preventDefault();
        navigate(props.to);
      }}
      sx={{
        color: "var(--primary-color)",
      }}
      {...props}
    />
  );
}

export const NavTabs = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (_, newValue) => setValue(newValue);
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        aria-label="nav tabs"
      >
        <LinkTab label="Followers" to="../followers" />
        <LinkTab label="Followings" to="../followings" />
      </Tabs>
    </Box>
  );
};
