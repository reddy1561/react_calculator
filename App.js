import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [input,setInput]=useState("");
  const [result,setResult]=useState(0);
  const handler= e =>{
   setInput( e.target.value );
  }
  return (
    <div className="card ">
     <center>
      <h1>My Calculator</h1>
         <input type="text" value={input} name="input" onChange={handler}/><br></br>
         <button onClick={()=>{ setResult(eval(input))}}>Result</button>
          : {result}<br></br>
          <button  onClick={()=>setInput(input+'1')}>1</button>
          <button onClick={()=>setInput(input+'2')}>2</button>
          <button onClick={()=>setInput(input+'3')}>3</button>
          <button onClick={()=>setInput(input+'4')}>4</button><br></br>
          <button onClick={()=>setInput(input+'5')}>5</button>
          <button onClick={()=>setInput(input+'6')}>6</button>
          <button onClick={()=>setInput(input+'7')}>7</button>
          <button onClick={()=>setInput(input+'8')}>8</button><br></br>
          <button onClick={()=>setInput(input+'9')}>9</button>
          <button onClick={()=>setInput(input+'0')}>0</button>
          <button onClick={()=>setInput(input+'+')}>+</button>
          <button onClick={()=>setInput(input+'-')}>-</button><br></br>
          <button onClick={()=>setInput(input+'*')}>*</button>
          <button onClick={()=>setInput(input+'/')}>/</button>
          <button onClick={()=>setInput(input+'%')}>%</button>
          <button onClick={()=>setInput('')}>clr</button><br></br>
     </center>
    </div>
  );
}

export default App;
