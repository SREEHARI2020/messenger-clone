
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import './App.css';
import { Message } from './Message';
import './Message.css';

function App() {
const[input,setInput]=useState('');
const[messages,setMessage]=useState([{username:'sree',text:'hey'},{username:'hari',text:'hello'}]);
const[username,setUsername]=useState('')

useEffect(() => {
 setUsername(prompt("username"))
  
}, [])

const SendMessage=(event)=>{
  event.preventDefault();
  setMessage([...messages,{username:username,text:input}])
  setInput('')

}
console.log(messages);

  return (
    <div className="App">
     <h1>hey { username }</h1>
      <form>
      <FormControl>
  <InputLabel >Enter message...</InputLabel>
  <Input value={input} onChange={e=>setInput(e.target.value)} id="my-input"  />
  <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={SendMessage}>Send Message</Button>
</FormControl>
    
      
      </form>
   
    {
      messages.map(message=>(<Message username={username} text={message} /> 
    ))
    }
    </div>
  );
}

export default App;
