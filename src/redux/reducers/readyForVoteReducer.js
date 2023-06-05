const SET_STATUS_FOR_VOTE = "SET_STATUS_FOR_VOTE"
const SET_STATUS_FOR_VOTE_FALSE = "SET_STATUS_FOR_VOTE_FALSE"

const initialState = false

const readyForVoteReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_STATUS_FOR_VOTE:
            return true
        case SET_STATUS_FOR_VOTE_FALSE:
            return false

        default:
            return state
    }
}

export const setStatusForVote = () => {
    return {
        type:SET_STATUS_FOR_VOTE
    }
}

export const setStatusForVoteFalse = () => {
    return {
        type:SET_STATUS_FOR_VOTE_FALSE
    }
}

export default readyForVoteReducer