import React, { useState } from "react";
import Value from "./Value"
import "../styles/App.css";

const searchArray = [
  "Newton",
  "School",
  "Newton School",
  "React",
  "Preact",
  "Node",
  "Mongoose",
  "Angular",
  "Vue",
  "Apple",
  "Microsoft",
  "Netflix",
  "Meta",
];
const App = () => {
  let [inputVal, setinputVal] = useState("");
  let [searchedArr, setearchedArr] = useState([]);
  const valueOfInput = (event) => {
    setinputVal(event.target.value);
    displayResult();
  };

  const displayResult = () => {
    let arr = [];
    searchArray.map((str) => {
      str = str.toLowerCase();
      let substr = inputVal.toLowerCase();
      if (str.indexOf(substr) != -1) {
        console.log(str);
        arr.push(str);
      }
    });
    setearchedArr(arr);
    // let ans = searchedArr.map((item) => {
    //   return <list value={item} />;
    // });
  };

  return (
    <div id="main">
      <h1>Search</h1>
      <input value={inputVal} onChange={valueOfInput} />
      <h3>Results</h3>
      <ol id="ul">
        {                  
          searchedArr.map((item,index) => {
          return <Value key={index} value={item} />;
        })}
      </ol>
    </div>
  );
};

export default App;
