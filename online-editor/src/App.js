import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [code, setCode] = useState('');

  const handleSubmit = async () => {
    const payload = {
      input: "",
      language: "java",
      code
    };

    const options = {
      method: "POST",
      mode: "no-cors"
    };

    const url = "http://localhost:8080/api/v1/run";

    const output = await axios({
      url: url,
      method: 'POST',
      mode: 'no-cors',
      data: payload
    });
    console.log(output);

  }

  return (
    <div className="App">
      <h1>Online Code Compiler</h1>
      <textarea 
        cols="75" 
        rows="20" 
        value={code} 
        onChange={(e) => {setCode(e.target.value)}}
      ></textarea>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
