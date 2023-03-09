import React, { useState, useEffect } from 'react'
import { db, auth, app } from '../firebase-config'
import { collection,addDoc,query,limit, serverTimestamp, orderBy} from "firebase/firestore";
import '../App.css'

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')
    const messagesRef = collection(db, "messages");
    const [sentiment, setSentiment] = useState("");

   



    const API_KEY = process.env.REACT_APP_OPEN_AI_API_KEY;


  const APIBODY ={
    'model': "text-davinci-003",
    'prompt': "What is the sentiment of this message?" + msg,
    'max_tokens': 60,
    'top_p': 1.0,
    'frequency_penalty': 0.0,
    'presence_penalty': 0.0,
  };

    

       const sendMsg = async (e) => {
        const { uid, photoURL } = auth.currentUser

        
        await addDoc(messagesRef, {
            text: msg,
            createdAt: serverTimestamp(),
            uid: uid,
            photoURL: photoURL
        })
        setMsg('');
        scroll.current.scrollIntoView({ behavior: 'smooth' })


       await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify(APIBODY)

      }).then(response => 
       {return response.json()}
       ).then((data) => {
      console.log(data);
      setSentiment(data.choices[0].text.trim());
      console.log(sentiment);
       }).catch((error) => {
      console.error(error);
       });

     
      };



    return (
        <div>
            {sentiment !== "" && sentiment !== "Positive"  ? alert( "This message is", sentiment) : null}
            <div className="sendMsg">
                    <input style={{ width: '74%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' 
                    type="text" value={msg} 
                    onChange={(e) => setMsg(e.target.value)} />

                    <button style={{ width: '18%', border: 'none', cursor: 'pointer', fontSize: '15px', fontWeight: '550', margin: '4px 0 -13px 5%', maxWidth: '200px', borderRadius: '12px', background: '#8EC1D6'}} type="submit"
                    onClick={sendMsg}
                    >Send</button>
                </div>
       
        </div>
    )
}

export default SendMessage