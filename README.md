# Getting Started Firebase Authentation:
![Output is](/image/ba.png)

just update the  **App.js** file for now .

```js

import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup,signOut} from "firebase/auth";
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth =getAuth(app);

function App() {

  const [user, setUser]=useState({});
  const provider = new GoogleAuthProvider()

  const handleGoogleSingIn =()=>{
    signInWithPopup(auth,provider)
      .then(result =>{
        const user =result.user;
        console.log(user)
        setUser(user)
      })
      .catch(error =>{
        console.error('Error is: ',error);
      })

  };

  const handleSignOut =()=>{
    signOut(auth).then(() => {
      setUser({});
      // Sign-out successful.
    }).catch((error) => {
      setUser({});
      // An error happened.
    });
  }

 
  return (
    <div className="App">
     <button style={{fontSize:'30px',height:'100px', width:'300px',marginTop:'500px'}} onClick={handleGoogleSingIn}>🟢Google Sign In </button>
     <button onClick={handleSignOut} style={{marginTop:'50px',width:'200px', padding:'10px',fontSize:'20px'}} >Sign Out ❌</button>
     <div>
      
     <p>🧝User Name:👉 <b>{user.displayName}</b></p>
     <span>Email 👉 <b>{user.email}</b></span>
     <p>uid 👉 <b>{user.uid}</b></p>
     
     <img style={{height:'100px'}} src={user?.photoURL} alt="image"/>
     
     </div>
    </div>
  );
}

export default App;


```



