import React from "react";
import { Link } from "react-router-dom";
import "./Notfound.css";

export const NotFound = () => {
  return (
    <>
      <div className="container">
        <div className="big_text text">
          <h1>
            4<span className="color_blue">0</span>4
          </h1>
          <p>
            Page not found <Link to="/:profileId">Home</Link>
          </p>
        </div>
        <div className="small_texts">
          <p className="text_1">404</p>
          <p className="text_2">404</p>
          <p className="text_3">404</p>
          <p className="text_4">404</p>
          <p className="text_5">404</p>
          <p className="text_6">404</p>
          <p className="text_7">404</p>
          <p className="text_8">404</p>
          <p className="text_9">404</p>
          <p className="text_10">404</p>
          <p className="text_11">404</p>
          <p className="text_12">404</p>
          <p className="text_13">404</p>
        </div>
      </div>
    </>
  );
};
