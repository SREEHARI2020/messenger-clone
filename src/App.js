
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React,{useState} from 'react';
import './App.css';

function App() {
const[input,setInput]=useState('');
const[messages,setMessage]=useState([])

const SendMessage=(event)=>{
  event.preventDefault();
  setMessage([...messages,input])
  setInput('')

}
console.log(messages);

  return (
    <div className="App">
     
      <form>
      <FormControl>
  <InputLabel >Enter message...</InputLabel>
  <Input value={input} onChange={e=>setInput(e.target.value)} id="my-input"  />
  <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={SendMessage}>Send Message</Button>
</FormControl>
    
      
      </form>
   
    {
      messages.map(message=>(<p>{message}</p>))
    }
    </div>
  );
}

export default App;
