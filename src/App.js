
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

      <input value={input} onChange={e=>setInput(e.target.value)}/>
      <button  type='submit' onClick={SendMessage}>Send Message</button>
      </form>
   
    {
      messages.map(message=>(<p>{message}</p>))
    }
    </div>
  );
}

export default App;
