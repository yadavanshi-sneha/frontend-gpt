import './App.css';
import Sidebar from "./Sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";
import { MyContext } from "./MyContext.jsx";
import {useState} from 'react';
import {v1 as uuidv1} from "uuid";

function App() {
   const [prompt, setPrompt] = useState("");
   const [reply , setReply] = useState(null);
   const [currThreadId, setCurrThreadId] = useState(uuidv1());
   const [prevChats, setPrevChats] = useState([]); //array of objects {threadId, lastMessage} , stores all chats of curr threads
   const [newChat, setNewChat] = useState(true); //to create new chat when clicked on new chat button in sidebar
   const [allThreads, setAllThreads] = useState([]); //array of objects {threadId, lastMessage} , stores all chats of all threads
   
   const providerValues = {
      prompt,setPrompt,
      reply, setReply,
      currThreadId,setCurrThreadId,
      newChat,setNewChat,
      prevChats,setPrevChats,
      allThreads,setAllThreads

   }; //passing values

  return (
     <div className='app'>
         <img public="/logo.png"/>
         <MyContext.Provider value={providerValues}>
          <Sidebar></Sidebar>
          <ChatWindow></ChatWindow>
          </MyContext.Provider>
     </div>
  )
}
export default App;
