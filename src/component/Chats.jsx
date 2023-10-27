import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../fireBase';
import { ChatContext } from '../context/ChatContext';

const Chats = () => {
  const [chats, setChat] = useState([])
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChat(doc.data())
      })
      return () => {
        unsub();
      }
    }
    currentUser.uid && getChats()
  }, [currentUser.uid])
  // console.log(Object.entries(chats))

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
    
  }
  return (
    <div className='chats'>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map(([key, chat]) => (
        <div className="userChat" key={key} onClick={()=>handleSelect(chat.userInfo)}>
          <img src={chat.userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat.userInfo.displayName}</span>
            <p>{chat.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>

  )
}

export default Chats