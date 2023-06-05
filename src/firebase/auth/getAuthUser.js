import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const getAuthUser = async (email,password) => {
    const auth = getAuth();
    return await signInWithEmailAndPassword(auth, email, password)

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
        });
}


