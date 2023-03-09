import './App.css';
// import Chat from './components/Chat';
// import SignIn from './components/SignIn';
import Homepage from './components/Homepage';
import { auth } from './firebase-config.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      {/* {user ? <Chat /> : <SignIn />} */}
      <Homepage />
    </>
  );
}

export default App;