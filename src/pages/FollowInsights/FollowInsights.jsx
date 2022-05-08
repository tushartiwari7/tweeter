import React from "react";
import { useLocation } from "react-router-dom";
import { NavTabs } from "../../components";

export const FollowInsights = () => {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);
  return <NavTabs />;
};
