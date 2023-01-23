# Getting Started Firebase Authentation:


 `Full Process is here:`
-------

`🔥 Steps: 1`

1. visit  [console.firebase.com](https://console.firebase.google.com/u/0/).
2. Create a new project example: 

         simple-firebase-authentaion
3. Click --> **Go to docs**
4. Click --> **Build**-->**Authentication**
5. Click --> **Web**--> **Get Started**

`🔥🔥 Steps: 02`
### This is only the first time 
1. If you haven't already, install the Firebase JS SDK and initialize Firebase.

####  Step 1: Create a Firebase project and register your app
 **This part is already done**
        https://firebase.google.com/docs/web/setup?authuser=0#create-firebase-project-and-app

 ➕ Create a Firebase Project

 ➕ Register your app:
    https://firebase.google.com/docs/web/setup?authuser=0#register-app

Register web app -->firebase project home --> Click Web -->give name and register
       
####    Step 2: Install the SDK and initialize Firebase

    npm install firebase
And we find the firebase version in **package.json** file under the dependency section

    ```json
    "dependencies": {
        ...
        "firebase": "^9.16.0",
        ...
        },

```
## Then, initialize Firebase and begin using the SDKs for the products you'd like to use.

```js

    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyAVpxUgSErILZPX6NHCx6MOk_crJnz89FQ",
    authDomain: "simple-firebase-authenta-1099f.firebaseapp.com",
    projectId: "simple-firebase-authenta-1099f",
    storageBucket: "simple-firebase-authenta-1099f.appspot.com",
    messagingSenderId: "231717497457",
    appId: "1:231717497457:web:ac41abbf092cd9958a49d0"
    };

    // Initialize Firebase
const app = initializeApp(firebaseConfig);

```


`🔥🔥🔥 Steps:03`
1. Now making a folder name **src/firebase/firebase.init.js**

now paste the config SDKs into the **firebase.init.js** this firebase config is different to yours

```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVpxUgSErILZPX6NHCx6MOk_crJnz89FQ",
  authDomain: "simple-firebase-authenta-1099f.firebaseapp.com",
  projectId: "simple-firebase-authenta-1099f",
  storageBucket: "simple-firebase-authenta-1099f.appspot.com",
  messagingSenderId: "231717497457",
  appId: "1:231717497457:web:ac41abbf092cd9958a49d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

```

🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥  For Google Sign in 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥


Click --> **Build**-->**Authentication-->Get Started** 
Click --> **Build**-->**Authentication-->Google** 

Enable google sign-in method by doing 👇
Click --> **Build**-->**Authentication-->User-->Set up sign-in method-->Google** and Click the *enable-icon*  enable it and give the  email to project support email *bappa@saha.com* and save it.

👉 Follow steps 1 and 5 for the documentaion of firebase after click **Web-->Google**
1.Create an instance of the Google provider object

```js

    import { GoogleAuthProvider } from "firebase/auth";
    const provider = new GoogleAuthProvider();
```
5.To sign in with a pop-up window, call signInWithPopup
```js
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

```
Now we need a google auth provider so now make this auth provider . We do this 
task to **App.js** file for now .

```js
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


```



