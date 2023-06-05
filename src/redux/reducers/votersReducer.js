const SET_VOTERS = "SET_VOTERS"

const initialState = []
const votersReducer = (state = initialState,action) => {
    switch (action.type) {
        case SET_VOTERS:
            return action.payload.voters
        default:
            return state
    }
}

export const setVoters = (voters) => {
    return {
        type:SET_VOTERS,
        payload:{
            voters
        }
    }
}

export default votersReducer