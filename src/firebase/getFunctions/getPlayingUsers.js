import {getFirestore,collection, getDocs} from "firebase/firestore"

export const getPlayingUsers = async () => {
    let playingUsers =[]
    const db = getFirestore()

    await getDocs(collection(db,"playingTeams")).then((data) => {
        let test = []
        data.forEach((doc) => {
            test.push(doc.data())
        })
        playingUsers = [...test]

        test = []

    }).catch((error) => {
        console.log(error);
    })
    return playingUsers
}



