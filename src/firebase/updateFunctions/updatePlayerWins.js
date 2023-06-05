import {doc, updateDoc, increment, getFirestore} from "firebase/firestore";

function updatePlayerWins(players){
    const db = getFirestore()

    players.forEach((player) => {
        if(player.rating < 9.9) {
            console.log("Updated")
            async function updatePlayer(){
                const playerRef = doc(db, "defaultPlayers", player.id.trim());
                await updateDoc(playerRef, {
                    games: increment(1),
                    win:increment(1),
                    rating:increment(0.2),
                    streak:increment(1)
                });
            }
            updatePlayer()
        } else {
            console.log("Not Updated")
            async function updatePlayer(){
                const playerRef = doc(db, "defaultPlayers", player.id.trim());
                await updateDoc(playerRef, {
                    games: increment(1),
                    win:increment(1),
                });
            }
            updatePlayer()
        }




    })


// Atomically increment the population of the city by 50.

}

export default updatePlayerWins
