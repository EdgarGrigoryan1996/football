import s from "./AdminPopup.module.css"

import React, {useEffect, useState} from 'react';
import Button from "../../globalComponents/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {closeAdminPopup} from "../../../redux/reducers/popupsReducer";
import {removePlayingTeams} from "../../../firebase/setFunctions/removePlayingTeams";
import {removeVotePlayers} from "../../../redux/reducers/votePlayersReducer";
import {setToGoStatusFalse} from "../../../redux/reducers/readyToGoReducer";
import updatePlayerWins from "../../../firebase/updateFunctions/updatePlayerWins";
import updatePlayerLose from "../../../firebase/updateFunctions/updatePlayerLose";
import updatePlayerDraw from "../../../firebase/updateFunctions/updatePlayerDraw";
import getVoters from "../../../firebase/getFunctions/getVoters";
import {setVoters} from "../../../redux/reducers/votersReducer";
import deleteVoters from "../../../firebase/setFunctions/deleteVoters";
import {setStatusForVoteFalse} from "../../../redux/reducers/readyForVoteReducer";
import updateTime from "../../../firebase/updateFunctions/updateTime";

function AdminPopup(props) {
    console.log(props)
    useEffect(() => {
        getVoters().then((data) => {
            dispatch(setVoters(data.data().voters))
        })
    },[])

    const voters = useSelector((state) => {
        return state.voters
    })

    let team1VotePlayers
    let team2VotePlayers
    if(props.votePlayers){
         team1VotePlayers = props.votePlayers[0].filter((player) => {
            return !player.hasOwnProperty("votePlayer")
        })
         team2VotePlayers =props.votePlayers[1].filter((player) => {
            return !player.hasOwnProperty("votePlayer")
        })
    }
    const readyForVote = useSelector((state) => {
        return state.readyForVote
    })
    function sendResults(){
        if(winnerTeam === null){
            updatePlayerDraw([...team1VotePlayers,...team2VotePlayers])
        }
        else{
            updatePlayerWins(winnerTeam)
            updatePlayerLose(loseTeam)
        }
        alert("Players Updated")
        removePlayingTeams().then(() => {
            dispatch(removeVotePlayers())
            dispatch(setToGoStatusFalse())
        })
        deleteVoters().then(() => {
            dispatch(setVoters(null))
        })
        updateTime({
            startTime:"18:30",
            endTime:"20:00"
        })
        dispatch(setStatusForVoteFalse())
        dispatch(closeAdminPopup())

    }
    const deleteThisGame = () => {
        removePlayingTeams().then(() => {
            dispatch(removeVotePlayers())
            dispatch(setToGoStatusFalse())
        })
        deleteVoters().then(() => {
            dispatch(setVoters(null))
        })
        updateTime({
            startTime:"18:30",
            endTime:"20:00"
        })
        dispatch(setStatusForVoteFalse())
    }


    const dispatch = useDispatch()
    const [winnerTeam,setWinnerTeam] = useState(undefined)
    const [loseTeam,setLoseTeam] = useState(undefined)

    const closePopup = () => {
        dispatch(closeAdminPopup())
    }
    return (
        <div className={s.wrapper}>
            <div className={s.block}>
                <span
                    className={s.close}
                    onClick={() => {closePopup()}}
                >x</span>
                <h2>Admin</h2>
                <div>
                    {readyForVote && <div className={s.setWinnerTeamBlock}>
                        <label className={s.formControl}>
                            <input type="radio" name="radio" onChange={(e) => {
                                setWinnerTeam(team1VotePlayers)
                                setLoseTeam(team2VotePlayers)
                            }}/>
                            Team 1 Win
                        </label>
                        <label className={s.formControl}>
                            <input type="radio" name="radio"  onChange={(e) => {
                                setWinnerTeam(team2VotePlayers)
                                setLoseTeam(team1VotePlayers)
                            }}/>
                            Team 2 Win
                        </label>
                        <label className={s.formControl}>
                            <input type="radio" name="radio" onChange={(e) => {
                                setWinnerTeam(null)
                            }}/>
                            Draw
                        </label>
                    </div>}
                    <div>
                        {readyForVote && <div className={s.buttonBlock}>
                            <Button text={"Send Results"} color={"generateColor"} callback={sendResults}/>
                        </div>}
                        <div>
                            <Button text={"Delete This Game"} color={"generateColor"} callback={deleteThisGame}/>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default AdminPopup;

