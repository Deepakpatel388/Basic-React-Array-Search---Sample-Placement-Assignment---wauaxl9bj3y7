import React from 'react'
import { useState } from 'react'

import '../styles/App.css';


const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const App = () => {
   const [text, setText] = useState('');
   const handleInput =(e)=>{
      const input = e.target.value;
      setText(input);
   }
  
  return (
    <div id="main">
      <input type = "text" id = "search-input" placeholder = "search..." onChange = {handleInput}/>
        {searchArray.filter(val=>val.toLowerCase().includes(text))                      
            .map((val)=>(             
                <div className = "user">
                    <li>{val}</li>
                </div>           
        ))}
    </div>
  )
}


export default App;
