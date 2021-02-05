import React from "react";
import styled from "styled-components";

<<<<<<< HEAD
<<<<<<< HEAD
const Result = (props) => {
  const answer = props.match.params.answer;
  return (
    <Answer>
      <h1>Your developing level is `${LEVEL}`</h1>
=======
const Result = () => {
  return (
    <Answer>
      <h1>Right!</h1>
>>>>>>> ee323a3... [Test1] frontend
=======
const Result = (props) => {
  const answer = props.match.params.answer;
  return (
    <Answer>
      <h1>Your developing level is {answer}</h1>
>>>>>>> 6a0bd33... [setting] test1
    </Answer>
  );
};

const Answer = styled.div`
  text-align: center;
  margin-top: 300px;
<<<<<<< HEAD
<<<<<<< HEAD
  color: #642efe;
`;

=======
`;
>>>>>>> ee323a3... [Test1] frontend
=======
  color: #642efe;
`;

>>>>>>> 6a0bd33... [setting] test1
export default Result;
