const SET_TO_GO_STATUS = "SET_TO_GO_STATUS"
const SET_TO_GO_STATUS_FALSE = "SET_TO_GO_STATUS_FALSE"

const initialState = false



const readyToGoReducer = (state = initialState,action) => {
    switch (action.type) {
        case SET_TO_GO_STATUS:
            return true
        case SET_TO_GO_STATUS_FALSE:
            return false
        default:
            return state
    }
}

export const setToGoStatus = () => {
    return {
        type:SET_TO_GO_STATUS
    }
}

export const setToGoStatusFalse = () => {
    return {
        type:SET_TO_GO_STATUS_FALSE
    }
}

export default readyToGoReducer