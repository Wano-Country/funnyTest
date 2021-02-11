import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Result = (props) => {
  const points = props.match.params.points;
  const[level, setLevel] = useState("");

    useEffect(async ()=> {
        const response = await axios.get('/Result/{points}/level');
        setLevel(response.data);
    });
    // axios.get 사용하여 데이터 백엔드에서 받아오기.
       const handleSend = async () => {
            const response2 = await axios.post('/Result/{points}/level', points);
        }
        // axios.post 사용하여 데이터 백엔드로 보내기.

  return (
    <Answer>
       <h1>Your developing level is {points}</h1>
       <h1>Your level is {level}</h1>
    </Answer>
  );
};

const Answer = styled.div`
  text-align: center;
  margin-top: 300px;
  color: #642efe;
`;

export default Result;