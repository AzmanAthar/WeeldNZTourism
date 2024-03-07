import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js'

const firebaseConfig = {
    
}

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)

const googleAuthProvider = new GoogleAuthProvider()

const loginButton = document.getElementById('google-login-button')

googleAuthProvider.setCustomParameters({ 
    prompt: 'select_account',
})

loginButton.addEventListener('click', () => {
    // Sign in with Google using a pop-up window
    signInWithPopup(auth, googleAuthProvider)
        .then((result) => {
            // This will contain user information
            const user = result.user;
            console.log(`Logged in as ${user.displayName}`);

            const otp = Math.floor(100000 + Math.random() * 900000)
            redirectToVerification(otp, user.displayName)
        })
        .catch((error) => {
            console.error(error);
        });
})

const redirectToVerification = (otp, username) => {
    const url = `verification.html?otp=${otp}&username=${encodeURIComponent(username)}`;
    window.location.href = url;
}
