<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Question2 = (props) => {
  const [answer, setAnswer] = useState(Number(props.match.params.answer));
=======
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Question2 = () => {
>>>>>>> ee323a3... [Test1] frontend
=======
import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Question2 = (props) => {
  const [answer, setAnswer] = useState(Number(props.match.params.answer));
>>>>>>> 6a0bd33... [setting] test1
  return (
    <div className="Qa_container">
      <Question_container>
        <h1 className="title">funnyTest</h1>
        <h1>당신의 선택은 ?</h1>
      </Question_container>
      <Answer_container>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6a0bd33... [setting] test1
        <Choice>
          <h1>X</h1>
        </Choice>
        <Choice onClick={() => setAnswer(answer + 1)}>
          <h1>O</h1>
        </Choice>
        <Choice>
          <h1>X</h1>
        </Choice>
        <Choice onClick={() => setAnswer(answer + 1)}>
          <h1>O</h1>
        </Choice>
        <NavLink to={`/Result/${answer}`} style={{ textDecoration: "none" }}>
          <Button>Next</Button>
<<<<<<< HEAD
=======
        <NavLink to="/Result" style={{ textDecoration: "none" }}>
          <Choice>
            <h1>0</h1>
          </Choice>
          <Choice>
            <h1>1</h1>
          </Choice>
          <Choice>
            <h1>2</h1>
          </Choice>
          <Choice>
            <h1>3</h1>
          </Choice>
>>>>>>> ee323a3... [Test1] frontend
=======
>>>>>>> 6a0bd33... [setting] test1
        </NavLink>
      </Answer_container>
    </div>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6a0bd33... [setting] test1
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
<<<<<<< HEAD
=======
const Choice = styled.div`
>>>>>>> ee323a3... [Test1] frontend
=======
>>>>>>> 6a0bd33... [setting] test1
  background: #fafafa;
  color: #642efe;
  text-align: center;
  width: 10%;
  padding: 20px;
  margin: 10px 10px 20px 200px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px;
  float: left;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6a0bd33... [setting] test1
  &:hover {
    background: #fafafa;
    color: #58fad0;
  }
<<<<<<< HEAD
=======
>>>>>>> ee323a3... [Test1] frontend
=======
>>>>>>> 6a0bd33... [setting] test1
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
