import { getDatabase, ref, set, get, child} from "firebase/database";

const read = async(link) => {
    //this function is responsible for reading db
    const dbRef = ref(getDatabase());
    const result = await get(child(dbRef, `${link}`)).then((snapshot) => {
      console.log(`link is: ${link}`)
      if (snapshot.exists()) {
          return snapshot.val()
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    return result
}

export default read