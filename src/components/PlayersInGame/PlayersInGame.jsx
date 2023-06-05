import s from "./PlayersInGame.module.css"
import {useDispatch, useSelector} from "react-redux";
import PlayerInGame from "./PlayerInGame/PlayerInGame";
import Button from "../globalComponents/Button/Button";
import {addPlayersToTeams, setEqualMode} from "../../redux/reducers/readyTeamsReducer";
import {showPlayerInfoPopup, showPlayerVotePopup, showReadyTeamsPopup} from "../../redux/reducers/popupsReducer";
import {useState} from "react";

export const generateTeams = (players,dispatch,equalMode) => {
    let badPlayers
    let badPlayer

    if(players.length % 2 !== 0 && equalMode){
        badPlayers = getBadPlayer(players)
        badPlayer = badPlayers[Math.floor(Math.random() * badPlayers.length)]
    }

    for(let a = 0;a<=9;a++){
        for(let i = 0;i<50;i++){
            let team1 = []
            let team2 = []
            let copyPlayers = !badPlayer ? [...players]:[...players.filter((player) => player !== badPlayer)]
            let length = copyPlayers.length

            for(let j=0;j<length;j++){
                let randomNumber = Math.floor(Math.random() * copyPlayers.length)

                if(j % 2 === 0){
                    team1.push(copyPlayers[randomNumber])
                    copyPlayers.splice(randomNumber,1)
                } else {
                    team2.push(copyPlayers[randomNumber])
                    copyPlayers.splice(randomNumber,1)
                }
            }

            let team1Rating = calculateTeamRating(team1)
            let team2Rating = calculateTeamRating(team2)

            if((team1Rating - team2Rating <= a && team1Rating - team2Rating >= 0) || (team2Rating - team1Rating <= a && team2Rating - team1Rating >= 0)){
                if(badPlayer){
                    let randomNumber = Math.floor(Math.random() * 11)

                    if(randomNumber % 2 === 0){
                        team1.push(badPlayer)
                    }
                    else{
                        team2.push(badPlayer)
                    }
                }

                dispatch(addPlayersToTeams(team1,team2))
                dispatch(showReadyTeamsPopup())

                return badPlayer
            }
        }
    }
}

export const calculateTeamRating = (team) => {
        return team.reduce((aggr,val) => {
            return aggr + Math.round(val.rating)
        },0)
}

const getBadPlayer = (players) => {
    let min = Math.round(players[0].rating)

    players.forEach((player) => {
        let rating = Math.round(player.rating)
        if(rating < min){
            min = rating
        }
    })

    const test = players.filter((player) => {
        let rating = Math.round(player.rating)
        return rating === min
    })
    return test
}

const PlayersInGame = () =>{
    const [infoPlayer,setInfoPlayer] = useState(null)

    function showPlayerPopup(player){
        dispatch(showPlayerInfoPopup())
        setInfoPlayer(player)
    }

    const dispatch = useDispatch()

    const players = useSelector((state) => {
        return state.readyPlayers
    })

    const equalMode = useSelector((state) => {
        return state.readyTeams.equalMode
    })

    const generateTeamsCallback = () => {
        generateTeams(players,dispatch,equalMode)
    }


    return (
        <>
            <div className={s.InGamePlayers}>
                {players.map((player) => <PlayerInGame key={Math.random()} player={player} infoPlayer={infoPlayer} showPlayerPopup={showPlayerPopup}/>)}
            </div>
            {(players.length > 2 && players.length % 2 !== 0 ) && <div className={s.equalModeBlock}>
                <label htmlFor="equalMode" className={s.container}>
                    Equal Mode
                    <input id={"equalMode"} type="checkbox" checked={equalMode} onChange={() => {
                        dispatch(setEqualMode())
                    }}/>
                    <span className={s.checkmark}></span>
                </label>
            </div>}
            <div className={s.generateButtonBlock}>


                {players.length > 1 && <Button text="GENERATE TEAMS" color="generateColor" callback={generateTeamsCallback} />}
            </div>
        </>

    )
}

export default PlayersInGame