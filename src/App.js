import React, {useState} from 'react'
import './App.css';
import axios from 'axios'

function App() {

const[joke,setJoke] = useState([]);


  const showData = () => {
    axios.get("https://official-joke-api.appspot.com/random_ten")
    .then((res)=> {
      console.log(res);
      setJoke(res.data)
    })
  }



  return (
    <div className="App">
    <h1>Fetching Data from API</h1>
    <button onClick={showData}>Click here to get API Data</button>
    {joke.map((jokes)=> (
      <p>{jokes.setup}</p>
    ))}
    </div>
  );
}

export default App;
