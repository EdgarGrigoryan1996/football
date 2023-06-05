import {combineReducers, createStore} from "redux";
import defaultPlayersReducer from "./reducers/defaultPlayersReducer";
import popupsReducer from "./reducers/popupsReducer";
import readyPlayersReducer from "./reducers/readyPlayersReducer";
import readyTeamsReducer from "./reducers/readyTeamsReducer";
import isAuthReducer from "./reducers/isAuthReducer";
import votePlayersReducer from "./reducers/votePlayersReducer";
import readyForVoteReducer from "./reducers/readyForVoteReducer";
import readyToGoReducer from "./reducers/readyToGoReducer";
import votersReducer from "./reducers/votersReducer";
import votedStatusReducer from "./reducers/votedStatusReducer";

const reducers = combineReducers({
    defaultPlayers:defaultPlayersReducer,
    readyPlayers:readyPlayersReducer,
    popups:popupsReducer,
    readyTeams:readyTeamsReducer,
    isAuth:isAuthReducer,
    votePlayers:votePlayersReducer,
    readyForVote:readyForVoteReducer,
    readyToGoStatus:readyToGoReducer,
    voters:votersReducer,
    votedStatus:votedStatusReducer

})

const store = createStore(reducers)
window.store = store
export default store