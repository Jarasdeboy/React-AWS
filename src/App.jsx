import React from 'react';
import './Mimagen.css'; 

const Mimagen = (props) => {
  return (
    <img alt={props.alt} src={props.path} className="imagenPersonalizada"></img>
  );
};

function App() {
  return (
    <>
      <Mimagen alt="hey" path="https://images.unsplash.com/photo-1599597098541-4a851d567ce5?auto=format&fit=crop&q=80&w=1917&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <h1>Tu los Lunes 😭</h1>
    </>
  );
}

export default App;
