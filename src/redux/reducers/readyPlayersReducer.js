const ADD_READY_PLAYERS = "ADD_READY_PLAYERS"
const REMOVE_PLAYER = "REMOVE_PLAYER"

const initialSTate = []

const readyPlayersReducer = (state = initialSTate,action) =>{
    switch (action.type) {
        case ADD_READY_PLAYERS:
            return [
                ...action.payload.readyPlayers
            ]
        case REMOVE_PLAYER:
            return state.filter((player) => {
                return player.id !== action.payload.playerId
            })


        default:
            return state
    }
}

export const addReadyPlayers = (readyPlayers) => {
    return {
        type: ADD_READY_PLAYERS,
        payload:{
            readyPlayers
        }
    }
}

export const removePlayer = (playerId) => {
    return {
        type:REMOVE_PLAYER,
        payload:{
            playerId
        }
    }
}

export default readyPlayersReducer