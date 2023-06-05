import {doc, getFirestore, updateDoc, arrayUnion} from "firebase/firestore";

async function setVotersFirebase(voter){
    const db = getFirestore()
    const voterRef = doc(db, "voters", "voters");

    await updateDoc(voterRef, {
        voters: arrayUnion(voter)
    });
}

export default setVotersFirebase