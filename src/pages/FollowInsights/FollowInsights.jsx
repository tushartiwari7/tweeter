import { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavTabs, ProfileCard } from "../../components";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Box, Input, List, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import "./FollowInsights.css";
export const FollowInsights = () => {
  const location = useLocation();
  const [username, path] = location.pathname.split("/").filter((x) => x);
  const { users } = useAuth();
  const user = users.find((x) => x.userName === username);
  const list = path === "followings" ? user.following : user.follower;
  const [filteredList, setFilteredList] = useState(list);

  const getList = (searchQuery) => {
    setFilteredList(list.filter((x) => x.userName.includes(searchQuery.toLowerCase())));
  };

  const debounce = (fn, ms) => {
    let timer = null;
    return (query) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(query), ms);
    };
  };

  const debounced = debounce(getList, 500);

  return (
    <>
      <NavTabs />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          color: "var(--primary-color)",
          mt: 2,
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
          onChange={(e) => debounced(e.target.value)}
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
      <List
        className="webkit-scrollbar"
        sx={{ width: "100%", bgcolor: "background.dark", overflow: "auto" }}
      >
        {filteredList.map((profile) => (
          <ProfileCard key={profile.userId} {...profile} />
        ))}
        {!filteredList.length && (
          <Typography variant="subtitle1" gutterBottom>
            No User found
          </Typography>
        )}
      </List>
    </>
  );
};
