import React from "react";
import styled from "styled-components";

const Result = (props) => {
  const answer = props.match.params.answer;
  return (
    <Answer>
      <h1>Your developing level is {answer}</h1>
    </Answer>
  );
};

const Answer = styled.div`
  text-align: center;
  margin-top: 300px;
  color: #642efe;
`;

export default Result;