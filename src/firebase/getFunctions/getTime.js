import {getFirestore,collection, getDocs} from "firebase/firestore"

export const getTime = async () => {
    let time ={}
    const db = getFirestore()

    await getDocs(collection(db,"time")).then((data) => {

        data.forEach((doc) => {
            time = doc.data()
        })


    }).catch((error) => {
        console.log(error);
    })
    return time
}



