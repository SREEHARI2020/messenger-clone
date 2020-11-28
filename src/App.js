import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import './App.css';
import db from './Firebase';
import { Message } from './Message';
import './Message.css';
import firebase from 'firebase';

function App() {
const[input,setInput]=useState('');
const[messages,setMessage]=useState([]);
const[username,setUsername]=useState('')
useEffect(()=>{
db.collection('messages').onSnapshot(snapshot=>
  {
    setMessage(snapshot.docs.map(doc=>doc.data()))
  }
  )
},[]);



useEffect(() => {
 setUsername(prompt("username"))
  
}, [])

const SendMessage=(event)=>{
  event.preventDefault();
 db.collection('messages').add({username:username,
  message:input,
timestamp:firebase.firestore.FieldValue.serverTimestamp()
})
  
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
