import {doc, getFirestore, updateDoc} from "firebase/firestore";

 function updateTime(time){
    const db = getFirestore()
    async function update(){
        const timeRef = doc(db, "time", "MyO0dBmdFA5wSgNUBVd6");
        await updateDoc(timeRef, {
            startTime: time.startTime,
            endTime:time.endTime
        });
    }
    update()
}

export default updateTime