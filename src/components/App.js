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
  let inputVal = "";
  let [searchedArr, setSearchedArr] = useState([]);

  const valueOfInput = (event) => {
    setSearchedArr([]);
   inputVal = event.target.value;
    setTimeout(() => {
      if(inputVal !== ""){
        displayResult(inputVal);
      }
    }, 500);
    
  };

  const displayResult = (inputVal) => {
    
    let arr = [];
    searchArray.map((str) => {
      str = str.toLowerCase();
      let substr = inputVal.toLowerCase();
      console.log(substr,"line34")
      if (str.indexOf(substr) !== -1) {
        console.log(str);
        arr.push(str);
      }
    });
    setSearchedArr(arr);
    // let ans = searchedArr.map((item) => {
    //   return <list value={item} />;
    // });
  };

  return (
    <div id="main">
      <h1>Search</h1>
      <input type={"text"} onChange={valueOfInput} />
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
