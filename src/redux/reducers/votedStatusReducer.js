const initialState = false

const votedStatusReducer = (state = initialState,action) => {
    switch (action.type) {
        case "VOTED":
            return true
        default:
            return state
    }
}

export const setVotedStatus = () => {
    return {
        type:"VOTED"
    }
}

export default votedStatusReducer

