
import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import app from './firebase/firebase.init';

const auth =getAuth(app);

function App() {

  const provider = new GoogleAuthProvider()

  const handleGoogleSingIn =()=>{
    signInWithPopup(auth,provider)
      .then(result =>{
        const user =result.user;
        console.log(user)
      })
      .catch(error =>{
        console.error('Error is: ',error);
      })

  };

 
  return (
    <div className="App">
     <button style={{fontSize:'30px',height:'100px', width:'300px',marginTop:'500px'}} onClick={handleGoogleSingIn}>🟢Google Sign In </button>
    </div>
  );
}

export default App;
