import React, { useContext, useEffect, useState } from 'react';
import Massage from '../component/Massage'; // Corrected component name
import { ChatContext } from '../context/ChatContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../fireBase';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log("first messages", messages);

  return (
    <div className='messages'>
      {messages.map((m) => (
        <Massage message={m} key={m.id} />
      ))}
    </div>
  );
}

export default Messages;
