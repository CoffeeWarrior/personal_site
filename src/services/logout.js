import {getAuth, signOut} from "firebase/auth"
const logout = () => {
    //logout of firebase auth
    const auth = getAuth();
    signOut(auth).then(() => {
        console.log("Signed out")
    }).catch((err) => {
        console.log(err)
    })
}

export default logout