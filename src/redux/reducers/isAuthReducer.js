const SET_AUTH_USER = "SET_AUTH_USER"
const SIGN_OUT = "SIGN_OUT"
const initialSTate = ""

const isAuthReducer = (state = initialSTate,action) =>{
    switch (action.type) {
        case SET_AUTH_USER:
            return action.payload.authUser
        case SIGN_OUT:
            return null
        default:
            return state
    }
}

export const setAuthUser = (authUser) => {
    return {
        type:SET_AUTH_USER,
        payload:{
            authUser
        }
    }
}
export const signOutAC = () => {
    return {
        type:SIGN_OUT
    }
}

export default isAuthReducer