import './homepage.styles.css'
import Chat from './Chat';
import SignIn from './SignIn';
import { auth } from '../firebase-config.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import logo from '../imageAssests/logo.svg'
import homepage from '../imageAssests/homepage.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Homepage() {
  const [user] = useAuthState(auth)



  return (
    <div className='homepage-container'>

              <div className='homepage-header'>
                <div className='homepage-header-left'>
                    <img className="logo" src= {logo} alt='chat_image' />
                    <h1> Firechat</h1>
                </div>
                <div className='homepage-header-right'>
                 {/* <a href= '#'>About</a> 
                <a href= '#'>Contact</a>
                <a href= '#'>Faq  </a> 
                   */}
                </div>  
              </div>  

              <div className="homepage-content">
                {user ?  <Chat /> : 
                  <div className="content">
                    <div className="content-right">
                    <h1> Welcome to Firechat</h1>
                    <SignIn  className="signIn"/>

                    </div>   
                    <div className="content-left">
                    <img src={homepage} />
                    </div> 
                 </div>
                }
              
              </div>
              
    </div>
  );
}

export default Homepage;