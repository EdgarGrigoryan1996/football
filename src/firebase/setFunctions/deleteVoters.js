import {doc, getFirestore, setDoc} from "firebase/firestore";


async function deleteVoters(){
    const db = getFirestore()
    await setDoc(doc(db, "voters", "voters"), {
        voters:[]
    });
}

export default deleteVoters