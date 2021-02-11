import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Question2 = (props) => {
  const [points, setPoints] = useState(Number(props.match.params.points));
  return (
    <div className="Qa_container">
      <Question_container>
        <h1 className="title">funnyTest</h1>
        <h1>당신의 선택은 ?</h1>
      </Question_container>
      <Answer_container>
        <Choice>
          <h1>X</h1>
        </Choice>
        <Choice onClick={() => setPoints(points + 1)}>
          <h1>O</h1>
        </Choice>
        <Choice>
          <h1>X</h1>
        </Choice>
        <Choice onClick={() => setPoints(points + 1)}>
          <h1>O</h1>
        </Choice>
      </Answer_container>
      <NavLink to={`/Result/${points}`} style={{ textDecoration: "none" }}>
        <Button>Next</Button>
      </NavLink>
    </div>
  );
};

const Button = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  padding: 15px;
  background-color: #642efe;
  color: white;
  &:active {
    background: #fafafa;
    color: #58fad0;
  }
  font-size: 1rem;
  position: absolute;
  bottom: 450px;
  right: 150px;
`;

const Choice = styled.div`
  cursor: pointer;
  background: #fafafa;
  color: #642efe;
  text-align: center;
  width: 10%;
  padding: 20px;
  margin: 10px 10px 20px 200px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px;
  float: left;
  &:hover {
    background: #fafafa;
    color: #58fad0;
  }
`;

const Question_container = styled.div`
  font-style: italic;
  margin: 50px 0px 50px 0px;
  text-align: center;
  color: #58fad0;
  .title {
    color: #642efe;
    margin-bottom: 50px;
    text-align: center;
  }
`;

const Answer_container = styled.div`
  font-style: italic;
`;
export default Question2;