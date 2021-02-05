import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom"; // <a href>

const Question1 = () => {
  const [answer, setAnswer] = useState(0);
  return (
    <div className="Qa_container">
      <Question_container>
        <h1 className="title">funnyTest</h1>
        <h1>당신의 선택은 ?</h1>
      </Question_container>
      <Answer_container>
        <Choice onClick={() => setAnswer(answer + 1)}>
          <h1>O</h1>
        </Choice>
        <Choice onClick={() => setAnswer(answer + 1)}>
          <h1>O</h1>
        </Choice>
        <Choice>
          <h1>X</h1>
        </Choice>
        <Choice>
          <h1>X</h1>
        </Choice>
      </Answer_container>
      <NavLink to={`/Question2/${answer}`} style={{ textDecoration: "none" }}>
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
  &:hover {
    background-color: #58fad0;
    color: white;
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
  &:active {
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
export default Question1;