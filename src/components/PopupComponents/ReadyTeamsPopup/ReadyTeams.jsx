import s from "./ReadyTeams.module.css"
import {useDispatch, useSelector} from "react-redux";
import {closeLastTeamsResultPopup, closeReadyTeamsPopup, showTimePopup} from "../../../redux/reducers/popupsReducer";
import PlayerInGame from "../../PlayersInGame/PlayerInGame/PlayerInGame";
import {calculateTeamRating, generateTeams} from "../../PlayersInGame/PlayersInGame";
import Button from "../../globalComponents/Button/Button";
import {changeBadPlayerTeam} from "../../../redux/reducers/readyTeamsReducer";

//Firebase imports

import {doc, getFirestore, setDoc} from "firebase/firestore";
import {setVotePlayers} from "../../../redux/reducers/votePlayersReducer";
import {getPlayingUsers} from "../../../firebase/getFunctions/getPlayingUsers";
import {setToGoStatus} from "../../../redux/reducers/readyToGoReducer";
import EnterPlayingTime from "../EnterPlayingTime/EnterPlayingTime";





function checkBadPlayer(team1,team2,equalMode){
    if(team1.length === team2.length || !equalMode){
        return false
    }
    else{
        let maxLength = Math.max(team1.length,team2.length)
        let badPlayerTeam = [team1,team2].filter((team) => team.length === maxLength)
        badPlayerTeam = [...badPlayerTeam[0]]
        let badPlayer = badPlayerTeam[badPlayerTeam.length - 1]

        return badPlayer
    }
}
function teamSort(team){
    return team.sort((a,b) => b.rating - a.rating)

}



const ReadyTeams = ({team1,team2,onlySee}) => {
    async function setPlayingTeams(){
        const db = getFirestore()
        await setDoc(doc(db, "playingTeams", "team1"), {
            players:team1.filter((player) => {
                return !player.hasOwnProperty("votePlayer")
            })
        });
        await setDoc(doc(db, "playingTeams", "team2"), {
            players:team2.filter((player) => {
                return !player.hasOwnProperty("votePlayer")
            })
        });
    }

    function setPlayingTeamsSuccess(){
        setPlayingTeams().then(() => {
            getPlayingUsers().then((data) => {
                if(data.length === 0){
                    dispatch(setVotePlayers(null))
                }
                else{
                    dispatch(setVotePlayers(team1,team2))
                }
        })

        })
        dispatch(closeReadyTeamsPopup())
        dispatch(closeLastTeamsResultPopup())
        dispatch(setToGoStatus())
    }
    const isSortTeam1 = teamSort(team1)
    const isSortTeam2 = teamSort(team2)
    const equalMode = useSelector((state) => {
        return state.readyTeams.equalMode
    })
    const timePopupStatus = useSelector((state) => {
        return state.popups.timePopup
    })
    let badPlayer = checkBadPlayer(team1,team2,equalMode)
    const changeBadPlayerTeamCallback = () => {
        dispatch(changeBadPlayerTeam(badPlayer))
    }
    const showTimePopupCallback = () => {
        dispatch(showTimePopup())
    }

    const team1Rating = calculateTeamRating(team1)
    const team2Rating = calculateTeamRating(team2)
    const dispatch = useDispatch()

    const generateTeamsCallback = () => {
        generateTeams([...team1,...team2],dispatch,equalMode)
    }
    return (
        <div className={s.readyTeamsWrapper}>
            <div className={s.readyTeamsBlock}>
                {timePopupStatus && <EnterPlayingTime setPlayingTeamsSuccess={setPlayingTeamsSuccess}/>}
                 <span className={s.close} onClick={() => {
                     if(onlySee){
                         dispatch(closeLastTeamsResultPopup())
                     }
                     else{
                         dispatch(closeReadyTeamsPopup())
                     }

                 }}>x</span>
                <div className={s.readyTeamsBlockBackground}>

                    <div className={s.team1Block}>
                        {isSortTeam1.map((player) => {
                            return (
                                <PlayerInGame key={player.name + player.surname}  player={player} badPlayer={badPlayer.id === player.id} onlySee={true}/>
                            )
                        })}
                        <div className={s.teamRating}>{team1Rating}</div>
                    </div>
                    <div className={s.team2Block}>
                        {isSortTeam2.map((player) => {
                            return (
                                <PlayerInGame key={player.name + player.surname} player={player} badPlayer={badPlayer.id === player.id} onlySee={true}/>
                            )
                        })}
                        <div className={s.teamRating}>{team2Rating}</div>
                    </div>
                    <div className={s.flex}>
                        {!onlySee && <div><Button text={"Generate Now"} color="generateColor" callback={generateTeamsCallback}/></div>}
                        {(!onlySee && badPlayer) && <div><Button text={"Move " + badPlayer.name + (team1.includes(badPlayer) ? " To Down Team" : " To Top Team")} color={"generateColor"} callback={changeBadPlayerTeamCallback}/></div>}
                        {onlySee !== true && <div><Button text={"Play with these teams"} color={"generateColor"} callback={showTimePopupCallback}/></div>}

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ReadyTeams