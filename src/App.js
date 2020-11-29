import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import './App.css';
import db from './Firebase';
import { Message } from './Message';
import './Message.css';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
const[input,setInput]=useState('');
const[messages,setMessage]=useState([]);
const[username,setUsername]=useState('')
useEffect(()=>{
db.collection('messages')
.orderBy('timestamp','desc')
.onSnapshot(snapshot=>
  {
    setMessage(snapshot.docs.map(doc=>({id:doc.id,message:doc.data()})))
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
      
     <h1>Welcome { username }</h1>
      <form className="app-form">
      <FormControl>
  <InputLabel >Enter message...</InputLabel>
  <Input value={input} onChange={e=>setInput(e.target.value)} id="my-input"  />
  <IconButton disabled={!input} variant="contained" color="primary" type='submit' onClick={SendMessage}>
  <SendIcon/>
  </IconButton>
</FormControl>
    
      
      </form>
   <FlipMove>
    {
      messages.map(message=>(<Message key={message.id} username={username} text={message.message} /> 
    ))
    }
    </FlipMove>
    </div>
  );
}

export default App;
