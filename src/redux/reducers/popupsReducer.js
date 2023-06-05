const SHOW_DEFAULT_PLAYERS_POPUP = "SHOW_DEFAULT_PLAYERS_POPUP"
const CLOSE_DEFAULT_PLAYERS_POPUP = "CLOSE_DEFAULT_PLAYERS_POPUP"
const SHOW_ADD_NEW_PLAYER_POPUP = "SHOW_ADD_NEW_PLAYER_POPUP"
const CLOSE_ADD_NEW_PLAYER_POPUP = "CLOSE_ADD_NEW_PLAYER_POPUP"
const SHOW_READY_TEAMS_POPUP = "SHOW_READY_TEAMS_POPUP"
const CLOSE_READY_TEAMS_POPUP = "CLOSE_READY_TEAMS_POPUP"
const SHOW_VOTE_PLAYERS_POPUP = "SHOW_VOTE_PLAYERS_POPUP"
const CLOSE_VOTE_PLAYERS_POPUP = "CLOSE_VOTE_PLAYERS_POPUP"
const SHOW_PLAYER_VOTE_POPUP = "SHOW_PLAYER_VOTE_POPUP"
const CLOSE_PLAYER_VOTE_POPUP = "CLOSE_PLAYER_VOTE_POPUP"
const SHOW_LAST_TEAMS_RESULT_POPUP = "SHOW_LAST_TEAMS_RESULT_POPUP"
const CLOSE_LAST_TEAMS_RESULT_POPUP = "CLOSE_LAST_TEAMS_RESULT_POPUP"
const SHOW_PLAYER_INFO_POPUP = "SHOW_PLAYER_INFO_POPUP"
const CLOSE_PLAYER_INFO_POPUP = "CLOSE_PLAYER_INFO_POPUP"
const SHOW_ADMIN_LOGIN_POPUP = "SHOW_ADMIN_LOGIN_POPUP"
const CLOSE_ADMIN_LOGIN_POPUP = "CLOSE_ADMIN_LOGIN_POPUP"
const SHOW_ADMIN_POPUP = "SHOW_ADMIN_POPUP"
const CLOSE_ADMIN_POPUP = "CLOSE_ADMIN_POPUP"
const SHOW_ENTER_VOTER_NAME_POPUP = "SHOW_ENTER_VOTER_NAME_POPUP"
const CLOSE_ENTER_VOTER_NAME_POPUP = "CLOSE_ENTER_VOTER_NAME_POPUP"
const SHOW_TIME_POPUP = "SHOW_TIME_POPUP"
const CLOSE_TIME_POPUP = "CLOSE_TIME_POPUP"

const initialSTate = {
    selectPlayingPlayersPopup:false,
    addNewPlayerPopup:false,
    readyTeamsPopup:false,
    votePlayersPopup:false,
    playerVotePopup:false,
    lastTeamsResult:false,
    playerInfoPopup:false,
    adminLoginPopup:false,
    adminPopup:false,
    enterVoterNamePopup:false,
    timePopup:false,
}

const popupsReducer = (state = initialSTate,action) =>{
    switch (action.type) {
        case SHOW_DEFAULT_PLAYERS_POPUP:
            return {
                ...state,
                selectPlayingPlayersPopup:action.payload.selectPlayingPlayersPopup
            }
        case CLOSE_DEFAULT_PLAYERS_POPUP:
            return {
                ...state,
                selectPlayingPlayersPopup:action.payload.selectPlayingPlayersPopup
            }

        case SHOW_ADD_NEW_PLAYER_POPUP:
            return {
                ...state,
                addNewPlayerPopup:action.payload.selectPlayingPlayersPopup
            }
        case CLOSE_ADD_NEW_PLAYER_POPUP:
            return {
                ...state,
                addNewPlayerPopup:action.payload.selectPlayingPlayersPopup
            }

        case SHOW_READY_TEAMS_POPUP:
            return {
                ...state,
                readyTeamsPopup:action.payload.readyTeamsStatus
            }
        case CLOSE_READY_TEAMS_POPUP:
            return {
                ...state,
                readyTeamsPopup:action.payload.readyTeamsStatus
            }
        case SHOW_VOTE_PLAYERS_POPUP:
            return {
                ...state,
                votePlayersPopup:action.payload.votePlayersPopupStatus
            }
        case CLOSE_VOTE_PLAYERS_POPUP:
            return {
                ...state,
                votePlayersPopup:action.payload.votePlayersPopupStatus
            }
        case SHOW_PLAYER_VOTE_POPUP:
            return {
                ...state,
                playerVotePopup:action.payload.votePlayerPopupStatus
            }
        case CLOSE_PLAYER_VOTE_POPUP:
            return {
                ...state,
                playerVotePopup:action.payload.votePlayerPopupStatus
            }

        case SHOW_LAST_TEAMS_RESULT_POPUP:
            return {
                ...state,
                lastTeamsResult:action.payload.lastTeamsResult
            }
        case CLOSE_LAST_TEAMS_RESULT_POPUP:
            return {
                ...state,
                lastTeamsResult:action.payload.lastTeamsResult
            }

        case SHOW_PLAYER_INFO_POPUP:
            return {
                ...state,
                playerInfoPopup:action.payload.playerInfoPopup
            }
        case CLOSE_PLAYER_INFO_POPUP:
            return {
                ...state,
                playerInfoPopup:action.payload.playerInfoPopup
            }
        case SHOW_ADMIN_LOGIN_POPUP:
            return {
                ...state,
                adminLoginPopup: true
            }
        case CLOSE_ADMIN_LOGIN_POPUP:
            return {
                ...state,
                adminLoginPopup: false
            }

        case SHOW_ADMIN_POPUP:
            return {
                ...state,
                adminPopup: true
            }
        case CLOSE_ADMIN_POPUP:
            return {
                ...state,
                adminPopup: false
            }

        case SHOW_ENTER_VOTER_NAME_POPUP:
            return {
                ...state,
                enterVoterNamePopup: true
            }
        case CLOSE_ENTER_VOTER_NAME_POPUP:
            return {
                ...state,
                enterVoterNamePopup: false
            }
        case SHOW_TIME_POPUP:
            return {
                ...state,
                timePopup: true
            }
        case CLOSE_TIME_POPUP:
            return {
                ...state,
                timePopup: false
            }
        default:
            return state
    }
}

export const showDefaultPlayersPopup = () => {
    return {
        type:SHOW_DEFAULT_PLAYERS_POPUP,
        payload:{
            selectPlayingPlayersPopup:true
        }
    }
}
export const closeDefaultPlayersPopup = () => {
    return {
        type:CLOSE_DEFAULT_PLAYERS_POPUP,
        payload:{
            selectPlayingPlayersPopup:false
        }
    }
}


export const showAddNewPlayerPopup = () => {
    return {
        type:SHOW_ADD_NEW_PLAYER_POPUP,
        payload:{
            selectPlayingPlayersPopup:true
        }
    }
}

export const closeAddNewPlayerPopup = () => {
    return {
        type:CLOSE_ADD_NEW_PLAYER_POPUP,
        payload:{
            selectPlayingPlayersPopup:false
        }
    }
}

export const showReadyTeamsPopup = () => {
    return {
        type:SHOW_READY_TEAMS_POPUP,
        payload:{
            readyTeamsStatus:true
        }
    }
}

export const closeReadyTeamsPopup = () => {
    return {
        type:CLOSE_READY_TEAMS_POPUP,
        payload:{
            readyTeamsStatus:false
        }
    }
}

export const showVotePlayersPopup = () => {
    return {
        type:SHOW_VOTE_PLAYERS_POPUP,
        payload:{
            votePlayersPopupStatus:true
        }
    }
}

export const closeVotePlayersPopup = () => {
    return {
        type:CLOSE_VOTE_PLAYERS_POPUP,
        payload:{
            votePlayersPopupStatus:false
        }
    }
}

export const showPlayerVotePopup = () => {
    return {
        type:SHOW_PLAYER_VOTE_POPUP,
        payload:{
            votePlayerPopupStatus:true
        }
    }
}

export const closePlayerVotePopup = () => {
    return {
        type:CLOSE_PLAYER_VOTE_POPUP,
        payload:{
            votePlayerPopupStatus:false
        }
    }
}

export const showLastTeamsResultPopup = () => {
    return {
        type:SHOW_LAST_TEAMS_RESULT_POPUP,
        payload:{
            lastTeamsResult:true
        }
    }
}

export const closeLastTeamsResultPopup = () => {
    return {
        type:CLOSE_LAST_TEAMS_RESULT_POPUP,
        payload:{
            lastTeamsResult:false
        }
    }
}

export const showPlayerInfoPopup = () => {
    return {
        type:SHOW_PLAYER_INFO_POPUP,
        payload:{
            playerInfoPopup:true
        }
    }
}

export const closePlayerInfoPopup = () => {
    return {
        type:CLOSE_PLAYER_INFO_POPUP,
        payload:{
            playerInfoPopup:false
        }
    }
}

export const showAdminLoginPopup = () => {
    return {
        type:SHOW_ADMIN_LOGIN_POPUP,
    }
}

export const closeAdminLoginPopup = () => {
    return {
        type:CLOSE_ADMIN_LOGIN_POPUP,
    }
}

export const showAdminPopup = () => {
    return {
        type:SHOW_ADMIN_POPUP,
    }
}

export const closeAdminPopup = () => {
    return {
        type:CLOSE_ADMIN_POPUP,
    }
}

export const showEnterVoterNamePopup = () => {
    return {
        type:SHOW_ENTER_VOTER_NAME_POPUP,
    }
}

export const closeEnterVoterNamePopup = () => {
    return {
        type:CLOSE_ENTER_VOTER_NAME_POPUP,
    }
}

export const showTimePopup = () => {
    return {
        type:SHOW_TIME_POPUP,
    }
}

export const closeTimePopup = () => {
    return {
        type:CLOSE_TIME_POPUP,
    }
}


export default popupsReducer