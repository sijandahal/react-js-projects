import React from "react";
import { Joke } from "./Joke";

export const Jokes = () => {
  let cars = ["ford", "honda", "hyundai"];
  const numbers = [5,6,7,8,9];
  const names = ['hello', 'world', 'amazing'];
  const pokemon = ['monster', 'pikaachu']



    return (

    <>
      <Joke punchline="Awesome" />

      <Joke
        title="This is an amazing joke"
        punchline="Awesome"
        upvotes={5}
        cars={cars.map((car) => {
          return car.length + ' ';
        })}
        isPun = {true} 
        numbers = {numbers.map((num, index) => {
           return num*num + ' '
        })}
        />

      <Joke title="This is a next joke" punchline="Awesomer" isPun= {false} names = {names.map((name)=> {
          let upperCase =  name.slice(0,1).toUpperCase();
          return upperCase + name.slice(1) + '  ';
      })}/>

      <Joke title="This is an another joke" punchline="Awesomest" isPun={true}/>
    </>
  );
};
