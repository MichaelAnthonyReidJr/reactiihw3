import React from 'react';
import { Animals } from './Animals'

function App() {
  const animals = [
    {id:1, typeOfAnimal: "dog"}, 
    {id:2, typeOfAnimal: "cat"},
    {id:3, typeOfAnimal: "chicken"},
    {id:4, typeOfAnimal: "cow"}, 
    {id:5, typeOfAnimal: "sheep"},
    {id:6, typeOfAnimal: "horse"},
  ]

  return (
    <div><Animals data = {animals}></Animals></div>
  );
}

export default App;

 
 
 
 
 
 
 
 
 
 
 
 
 
