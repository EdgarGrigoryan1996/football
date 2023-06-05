const SET_VOTE_PLAYERS = "SET_VOTE_PLAYERS"
const SET_VOTE_RATING = "SET_VOTE_RATING"
const REMOVE_VOTE_PLAYERS = "REMOVE_VOTE_PLAYERS"
const initialState = null

const votePlayersReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_VOTE_PLAYERS:
            return [
                action.payload.team1Players.map((player) => {
                    return {
                        ...player,
                        voted:{
                            status:false,
                            votedRating:null
                        }
                    }
                }),
                action.payload.team2Players.map((player) => {
                    return {
                        ...player,
                        voted:{
                            status:false,
                            votedRating:null
                        }
                    }
                })
            ]
        case SET_VOTE_RATING:
            const test = state.map((players) => {
                if(players.includes(action.payload.player)){
                    return players.map((player) => {
                        if(player.id === action.payload.player.id){
                            return {
                                ...player,
                                voted:{
                                    status:true,
                                    votedRating:action.payload.votedRating
                                }
                            }
                        }
                        else{
                            return player
                        }
                    })
                }
                else{
                    return players
                }
            })
            return test
        case REMOVE_VOTE_PLAYERS:
            return null
        default:
            return state
    }
}

export const setVotePlayers = (team1Players,team2Players) => {
    return {
        type:SET_VOTE_PLAYERS,
        payload:{
            team1Players,
            team2Players
        }
    }
}

export const setVoteRating = (player,votedRating) => {
    return {
        type:SET_VOTE_RATING,
        payload:{
            player,
            votedRating
        }
    }
}
export const removeVotePlayers = () => {
    return {
        type:REMOVE_VOTE_PLAYERS
    }
}
export default votePlayersReducer