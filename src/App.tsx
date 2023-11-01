import { useState } from "react";
import "./App.css";
import Greet from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { LoggedIn } from "./components/LoggedIn";
import { User } from "./components/User";
import { Counter } from "./components/Counter";

// type Name = {
//   name : string
// }

function App() {
  const personName = {
    first : "muhammad",
    last :"zaky syukur"
  }

  const personList = [personName , personName]
  const personList1 = ["andy" , "budi" , "caca"]
 
  return (
    <div className="">
      <Greet name={"zaky"} messageCount={10} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={personList}  names2={personList1}/>

      <Status status="success"/>
      <Heading>this is oscar heading string</Heading>
      <Oscar><Heading>didalam oscar</Heading></Oscar>

      <Input  value="" handleChange={(event)=>{console.log(event)}}/>
      <Button handleClick={(event , id) =>{console.log("click",event ,id)}}/>

      <LoggedIn/>

      <User/>

      <Counter/>
    </div>
  );
}

export default App;
