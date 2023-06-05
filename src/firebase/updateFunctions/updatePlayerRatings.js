import {doc, getFirestore,getDoc, updateDoc,arrayUnion} from "firebase/firestore";


 function updatePlayersRating(players){
    const db = getFirestore()
    players.forEach((player) => {
        const playerRef = doc(db, "defaultPlayers", player.id);
        let playerRating
        async function getPlayerRating(){
             playerRating = await getDoc(playerRef)
        }

        async function updatePlayer(){
            await updateDoc(playerRef, {
                rating:[...playerRating.data().rating,player.voted.votedRating]
            });
        }
        getPlayerRating().then((data) => {
            updatePlayer()
        })


    })
}

export default updatePlayersRating


// Set the "capital" field of the city 'DC'
