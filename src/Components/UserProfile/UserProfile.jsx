import { Row, Col, Card, Container } from "react-bootstrap/";
import React, { Component } from "react";
import "./UserProfile.css";
import IndexRecorder from "../IndexRecorder/IndexRecorder";

const UserProfile = (props) => {
  
  return (
    <div className="audioimage">
      <h1 className="align">{"Welcome To Music Maker"}</h1>
      <h2 className="name">
        {props.user.firstName} {props.user.lastName}
      </h2>
      <h3 className="name">Upload up to 5 files to get started</h3>

      <audio
        controls
        src={`http://localhost:5000/${props.user.audioFiles[0].audio}`}
      ></audio>
      <audio
        controls
        src={`http://localhost:5000/${props.user.audioFiles[1].audio}`}
      ></audio>
      <audio
        controls
        src={`http://localhost:5000/${props.user.audioFiles[2].audio}`}
      ></audio>
      <IndexRecorder/>
    </div>
    
  );
};

export default UserProfile;
