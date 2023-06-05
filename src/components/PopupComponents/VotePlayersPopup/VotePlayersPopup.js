import s from "./VotePlayersPopup.module.css"
import {useDispatch, useSelector} from "react-redux";
import {
    closeEnterVoterNamePopup,
    closeVotePlayersPopup, showEnterVoterNamePopup,
    showPlayerVotePopup,
} from "../../../redux/reducers/popupsReducer";
import PlayerInGame from "../../PlayersInGame/PlayerInGame/PlayerInGame";
import {useEffect, useState} from "react";
import Button from "../../globalComponents/Button/Button";
import EnterVoterNamePopup from "./enterVoterNamePopup/EnterVoterNamePopup";
import getVoters from "../../../firebase/getFunctions/getVoters";
import {setVoters} from "../../../redux/reducers/votersReducer";
import updatePlayerRatings from "../../../firebase/updateFunctions/updatePlayerRatings";
import {setVotedStatus} from "../../../redux/reducers/votedStatusReducer";
import setVotersFirebase from "../../../firebase/setFunctions/setVoters";



const VotePlayersPopup = (props) => {
    const isAuth = useSelector((state) => {
        return state.isAuth
    })
    const enterVoterNamePopupStatus = useSelector((state) => {
        return state.popups.enterVoterNamePopup
    })
    useEffect(() => {
        getVoters().then((data) => {
            dispatch(setVoters(data.data().voters))
        })
    },[enterVoterNamePopupStatus])
    const voters = useSelector((state) => {
        return state.voters
    })

const [votePlayer,setVotePlayer] = useState(null)
    const votedPlayers = [...props.players[0].filter((player) => !player.hasOwnProperty("votePlayer")),...props.players[1].filter((player) => !player.hasOwnProperty("votePlayer"))]

    function checkPlayersVote(players){
        let checkResult = players.filter((player) => {
            return player.voted.status === false
        })
        return checkResult.length <= 0;
    }
    function showPlayerPopup(player){
        dispatch(showPlayerVotePopup())
        setVotePlayer(player)
    }
    function showEnterVoterNamePopupCallback(){
        if(voters.length < votedPlayers.length){
            dispatch(showEnterVoterNamePopup())
        } else {
            alert("Maximum Vote")
        }
    }

    function sendRatings(){
            updatePlayerRatings(votedPlayers)
            setVotersFirebase({
                email:isAuth?.email,
                uid:isAuth?.uid
            })
            dispatch(closeVotePlayersPopup())
            dispatch(setVotedStatus())



    }


    const dispatch = useDispatch()

    return (
        <div className={s.readyTeamsWrapper}>

            <div className={s.readyTeamsBlock}>
                 <span className={s.close} onClick={() => {
                     dispatch(closeVotePlayersPopup())
                 }}>x</span>
                <div className={s.readyTeamsBlockBackground}>
                    <div className={s.team1Block}>
                        {props.players[0].map((player) => {
                            return (
                                <PlayerInGame key={player.name + player.surname} showPlayerPopup={showPlayerPopup}  player={player} votePlayer={votePlayer} onlySee={true} voteMode={true}/>
                            )
                        })}
                    </div>
                    <div className={s.team2Block}>
                        {props.players[1].map((player) => {
                            return (
                                <PlayerInGame key={player.name + player.surname} showPlayerPopup={showPlayerPopup}  player={player} votePlayer={votePlayer} onlySee={true} voteMode={true}/>
                            )
                        })}
                    </div>



                </div>

            </div>
        </div>
    )
}

export default VotePlayersPopup