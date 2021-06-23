// const[person,setPerson] = useState([])

// useEffect(()=> {
//   Axios.get('https://official-joke-api.appspot.com/random_ten')
//   .then((res)=> {
     
//       setPerson(res.data);
      
//   });
// },[])

 

//   return (
//     <div className="App">
//      <ul>
//        {
//        person.map(s=> <li key={s.id}>
         
//      {
//       <>
//      <p>ID :
//          {s.id}</p>
      
//        <p>Setup :
//          {s.setup}</p>
//        <p>Punch Line :
//           {s.punchline}</p>
//    </>
//       }
//       </li>
//        )
//        }
//        </ul>
//     </div>
//   );



////////////////////

// import React, {useState} from 'react'
// import './App.css';
// import axios from 'axios'

// function App() {

// const[jokes,setJokes] = useState([])

//   const getApiData = () => {
// axios.get('https://official-joke-api.appspot.com/random_ten')
// .then((res)=> {
//   console.log(res);
//   setJokes(res.data);
// });
//   }
  

//   return (
//     <div className="App">
//     <>
//     <h1>Working with AXIOS APIs</h1>
//     <button onClick={getApiData}>Click here to get API data</button>
//     <ul> 
//       {
//       jokes.map((s) => <li key={s.id}>
//       {
//      <>
//       <p>{s.id}</p>
//       <p>{s.punchline}</p>
//       <p>{s.setup}</p>
//     </>
// }
//       </li>
//       )}
//       </ul>
//     </>
//     </div>
//   );
// }

// export default App;

/////////////////////////////////////////////////////

// import React, {useState} from 'react'
// import './App.css';
// import axios from 'axios'

// function App() {

// const[joke,setJoke] = useState([]);


// const showJokes = () => {
//   axios.get("https://official-joke-api.appspot.com/random_ten")
//   .then((res)=> {
//     setJoke(res.data);
//     console.log(res);
//   })
// }

//   return (
//     <div className="App">
//     <>
//     <h1>Joke API</h1>
//     <button onClick={showJokes}>Click here to fetch jokes from API</button>
   
//     {
//     joke.map((jokes)=> 
//     <>
//     <p> {jokes.setup}</p>
//     <p> {jokes.id}</p>
//     </>
//    )}

//     </>
//     </div>
//   );
// }

// export default App;