### Getting Started Firebase Authentation:

`🕊️ Visit Branches for :`
Goggle Authentication 👉   [1.1-google-authentication](https://github.com/bappasahabapi/firebase-authentation/tree/1.1-google-authentation).

1. visit  [console.firebase.com](https://console.firebase.google.com/u/0/).
 
2. Create a new project example: 

         simple-firebase-authentaion
3. go to the docs 

# Getting Started Firebase Authentation:

`Summary of the whole system:`

 🇧🇩 INITIAL SETUP
-----------------------------
    1. visit: console.firebase.google.com 
    2. create a new firebase project
    3. Visit doc ( go to docs): Build > Authentication > web > Getting started
    4. Register web app > firebase project home > click Web > give name and register
    5. Install firebase for your project: npm install firebase
    6. Get firebase config and put it in firebase.init.js
    7. export app from firebase.init.js 

🇧🇩 SETUP THE PROVIDER
---------------------------
    8. create auth using getAuth from firebase by using app from firebase.init.js
    9. create a google auth provider. do not forget to use  new GoogleAuthProvider(); 
    10. go to firebase > Build > Authentication > Sign In method 
    11. Enable google sign in method 
    12. Create a button for google sign in method with a click handler
    13. inside the event handler, call singInWithPopup with auth, provider
    14. after singInWithPopup .then result , error 

🇧🇩 DISPLAY DATA
-
#### ADD A NEW SIGN IN METHOD
-------
    1. enable the sign in  method
    2. Create github, twitter, fb, etc. app create
    3. get clientId and secret 
-------