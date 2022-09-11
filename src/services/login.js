import app from "../firebase.js"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"


const login = async (email, password) => {
    //login to firebase - authorizes login
    const auth = getAuth(app);
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            return user
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
            return null;
        })
    
}

export default login