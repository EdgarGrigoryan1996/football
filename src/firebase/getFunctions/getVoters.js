import {doc, getDoc, getFirestore} from "firebase/firestore";


async function getVoters(){
    const db = getFirestore()
    const docRef = doc(db, "voters", "voters");
    const docSnap = await getDoc(docRef)
    return docSnap

}

export default getVoters