import { getDatabase, ref, set } from "firebase/database";

const post = (link: string, obj: any) => {
  // this function is responsible for posting updated objects to firebase under the correct link
  const db = getDatabase();
  console.log(db);
  set(ref(db, link), obj);
};
export default post;
