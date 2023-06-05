const ADD_PLAYERS_TO_TEAMS ="ADD_PLAYERS_TO_TEAMS"
const CHANGE_BAD_PLAYER_TEAM = "CHANGE_BAD_PLAYER_TEAM"
const SET_EQUAL_MODE = "SET_EQUAL_MODE"
const initialState = {
    team1:[],
    team2:[],
    equalMode:false,
}

const readTeamsReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_PLAYERS_TO_TEAMS:
            return {
                ...state,
                team1:[...action.payload.team1Players],
                team2:[...action.payload.team2Players]
            }
        case CHANGE_BAD_PLAYER_TEAM:
            if(state.team1.includes(action.payload.badPlayer)){
                return {
                    ...state,
                    team1:[...state.team1.filter((player) => player.id !== action.payload.badPlayer.id)],
                    team2:[...state.team2,action.payload.badPlayer]
                }
            }
            else{
                return {
                    ...state,
                    team1:[...state.team1,action.payload.badPlayer],
                    team2:[...state.team2.filter((player) => player.id !== action.payload.badPlayer.id)],
                }
            }
        case SET_EQUAL_MODE:
            return {
                ...state,
                equalMode: !state.equalMode
            }
        default:
            return state
    }
}

export const addPlayersToTeams = (team1Players,team2Players) => {
    return {
        type:ADD_PLAYERS_TO_TEAMS,
        payload:{
            team1Players,
            team2Players
        }
    }
}

export const changeBadPlayerTeam = (badPlayer) => {
    return {
        type:CHANGE_BAD_PLAYER_TEAM,
        payload:{
            badPlayer
        }
    }
}

export const setEqualMode = () => {
    return {
        type:SET_EQUAL_MODE
    }
}

export default readTeamsReducer