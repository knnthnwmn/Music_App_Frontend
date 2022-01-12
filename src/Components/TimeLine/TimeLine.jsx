import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap/";
import "./TimeLine.css";
import UserProfile from "../UserProfile/UserProfile";
// import NavigationBar from "../NavigationBar/NavigationBar";


const TimeLine = (props) => {
  return (
    <Container>
      <Row>
    {/* <NavigationBar/> */}
    </Row>
    {/* <Routes>
      <Route path="/" exact component={UserProfile} />
    </Routes> */}
    <Row>
    <UserProfile user={props.user}/>
    </Row>
    </Container>
  );
};

export default TimeLine;