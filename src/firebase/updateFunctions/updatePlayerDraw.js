import {doc, updateDoc, increment, getFirestore} from "firebase/firestore";

function updatePlayerDraw(players){
    const db = getFirestore()

    players.forEach((player) => {
        async function updatePlayer(){
            const playerRef = doc(db, "defaultPlayers", player.id.trim());
            await updateDoc(playerRef, {
                games:increment(1),
                draw:increment(1),
                streak:0
            });
        }
        updatePlayer()


    })


// Atomically increment the population of the city by 50.

}

export default updatePlayerDraw
