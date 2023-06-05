import { getFirestore,doc, deleteDoc } from "firebase/firestore";

export const removePlayingTeams = async () => {
    const db = getFirestore()
    await deleteDoc(doc(db, "playingTeams", "team1"));
    await deleteDoc(doc(db, "playingTeams", "team2"));
}