import {getFirestore,collection, getDocs} from "firebase/firestore"

  export const getDefaultUsers = async () => {
      let defaultPlayers =[]
    const db = getFirestore()

      await getDocs(collection(db,"defaultPlayers")).then((data) => {
          let test = []
        data.forEach((doc) => {
            test.push(doc.data())
        })
          defaultPlayers = [...test]

          test = []

     }).catch((error) => {
          console.log(error);
      })
      return defaultPlayers
}



