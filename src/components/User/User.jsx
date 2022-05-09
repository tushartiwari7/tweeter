import React from "react";
import "./User.css";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
export const User = () => {
  const { users } = useAuth();
  const params = useParams();
  const user = users.find((user) => user.userName === params.profileId);
  return (
    <div>
      <img src="https://picsum.photos/400/100" width="100%" alt="user" />
      <Container
        className="avatar-container"
        sx={{
          display: "flex",
        }}
      >
        <img src={user?.userImage} className="avatar" alt="user" />
      </Container>
      <div className="user-info">
        <Typography variant="h5" sx={{ color: "var(--primary-color)" }}>
          {user?.firstName} {user?.lastName}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {user?.userBio || "No bio available"}
        </Typography>
        <div className="follow-info">
          <Link to="followers">{user?.noOfFollower} followers</Link>
          <Link to="followings">{user?.noOfFollowing} following</Link>
        </div>
      </div>
    </div>
  );
};
