// src/components/Home.js
import React from 'react';
import Avatar from "../images/avatar.png";


const Home = () => {
  return (
    <>
    <div className="home">
     <div className="title">
<h4>Hello I'm</h4> 
<h1> Nikita Sawakare</h1>      
 <h2>Reactjs developer </h2>
        </div>
        <div className="flex">
           <img className="Avatar" src={Avatar} alt="" />
        </div>
        
     </div>
 

		 
  </>
  );
};

export default Home;