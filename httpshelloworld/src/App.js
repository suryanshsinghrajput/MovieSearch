import './App.css';
import Phase4NASAComponent from './components/phase4NASAcomponent.js';
import ShowReturningMoviesComponent from './components/ShowReturningMoviesComponent';
import SearchandShowComponent from './components/SearchandShowComponent';


function App() {

  return (
    <div className="App">
      <div className="text-center hero my-5">
        <SearchandShowComponent/>
        <ShowReturningMoviesComponent/>
        <Phase4NASAComponent />
      </div>
    </div>
  );
}

export default App;

// import './App.css';
// import axios from "axios";
// import { useState, useEffect } from 'react';

// //enguerrand-blanchy-3oADW0Ptj8c-unsplash
// import localAntEaterImage from "./images/enguerrand-blanchy-3oADW0Ptj8c-unsplash.jpg";
// let string1 = `hope you are seeing https in your browser address bar`;

// let apikeyfromnasa = `JjP84CKefxzmg2fyAvN4zWsRyAAqg1nzrXvHdtc6`;
// let loadApodURI = `https://api.nasa.gov/planetary/apod?api_key=${apikeyfromnasa}`;
// let stringclickButton = `click the button to load data`
// let stringloading = `loading........`;
// let stringloaded = `NASA DATA IS HERE FROM AXIOS`;

// //const APODWithAPI = ({ todobaz, isLoading, startLoadingApod }) => {
// //export default connect(mapStateToProps, mapDispatchToProps)(APODWithAPI);

// // const phase4NASAcomponent = () => {
// //   const output = (
// //     <div>
// //       <h5>new phase 4 component - begining</h5>
// //       <h4>new phase 4 component - ending</h4>
// //     </div>
// //   )
// //   return output;
// // }


// function App() {

//   const [post, setPost] = useState(null);
//   const [loadmessage,setloadmessage] = useState(stringclickButton);




//   function callNASAAPI() {
//     //call NASA API the moment page loads. 
//     //setloadmessage(stringloading);
//     axios.get(loadApodURI).then(
//         (response) => {
//             console.log(response.data);
//             setPost(response.data);
//             setloadmessage(stringloaded);
//         }
//     );
// }

// function resetAPI() {
//   setPost(null);
//   setloadmessage(stringclickButton);
// }


// useEffect ( () => {
//   console.log(`data has been updated`);
// },[]);

// const outputWhenNull = 
// (
  
//   <div className="text-center hero my-5">
//   {/* <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" /> */}
//   <h1 className="mb-4">{string1}</h1> 
//   <h1 className="mb-4">{loadmessage}</h1>   
//   <button className="btn btn-primary" onClick={callNASAAPI}>call API</button>
//   <img src={localAntEaterImage} className="img-fluid" alt="..."></img>
  
//   </div>
// );

// if(post==null) 
//     {
//         return outputWhenNull;
//     }

//     const outputnotnull = (
//       <div className="text-center hero my-5">
//       {/* <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" /> */}
//       <h1 className="mb-4">{string1}</h1> 
//       <h1 className="mb-4">{stringloaded}</h1>   
//       {/* <button className="btn btn-primary" onClick={callNASAAPI}>call API</button> */}
//       <button className="btn btn-primary" onClick={resetAPI}>resetAPI</button>
      
//       <p>{post.date}</p>
//       <img src={post.hdur1} className="img-fluid" alt="..."></img>
//       <hr></hr>
//       <img src={localAntEaterImage} className="img-fluid" alt="..."></img>
      
      
//       </div>
//     );

//     if(post!=null) 
//     {
//      return outputnotnull;
//     }



//   return (
//     <div className="App">
//       <div className="text-center hero my-5">
//         {/* <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" /> */}
//         <h1 className="mb-4">{string1}</h1>   
//         <hr></hr>
//         <button className="btn btn-primary" onClick={callNASAAPI}>call API</button>
//         <hr></hr>
//         {/*<div className='container-fluid'>
//           <img src={localImageDiamondMoon} className="img-fluid" alt="..."></img>  
//   </div>*/}
     
//       </div>       
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;
