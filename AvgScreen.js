import React, { useState } from "react";
import "./AvgScreen.css";

function AvgScreen({ data }) {
  const [avgAge, setAvg] = useState(0);

  const calcAvgAge = (data) => {
    const arraySize = data.length;

    let result = data.reduce(function (prev, curr) {
      return prev + curr.age;
    }, 0);

    setAvg(result / arraySize);
  };

  return (
    <div className="AvgScreen">
      <div className="AvgScreen__container">
        <h1>Avg: {avgAge}</h1>
        <button onClick={() => calcAvgAge(data)}>Avg Age</button>
      </div>
    </div>
  );
}

export default AvgScreen;
