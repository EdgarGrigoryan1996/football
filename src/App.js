import s from "./Global.module.css"
import AddPlayerToGame from "./components/AddPlayerToGame/AddPlayerToGame";
import SelectPlayingPlayersPopup
    from "./components/PopupComponents/SelectPlayingPlayersPopup/SelectPlayingPlayersPopup";
import {useDispatch, useSelector} from "react-redux";
import PlayersInGame from "./components/PlayersInGame/PlayersInGame";
import ReadyTeams from "./components/PopupComponents/ReadyTeamsPopup/ReadyTeams";
import Button from "./components/globalComponents/Button/Button";
import {
    showAdminPopup,
    showLastTeamsResultPopup,
} from "./redux/reducers/popupsReducer";
import Login from "./components/LoginPage/Login";
import Navbar from "./components/Navbar/Navbar";
import {useEffect, useState} from "react";
import {getDefaultUsers} from "./firebase/getFunctions/getDefaultUsers";
import {setDefaultPlayers} from "./redux/reducers/defaultPlayersReducer";
import {getPlayingUsers} from "./firebase/getFunctions/getPlayingUsers";
import VotePlayersPopup from "./components/PopupComponents/VotePlayersPopup/VotePlayersPopup";
import {setVotePlayers} from "./redux/reducers/votePlayersReducer";
import WaitToEndGame from "./components/WaitToEndGame/WaitToEndGame";
import AdminPopup from "./components/PopupComponents/AdminPopup/AdminPopup";
import ThankYouMessage from "./components/ThankYouMessage/ThankYouMessage";
import getVoters from "./firebase/getFunctions/getVoters";
import {setVoters} from "./redux/reducers/votersReducer";
import {setStatusForVote} from "./redux/reducers/readyForVoteReducer";
import PlayersSTatistics from "./components/PlayersStatisticsNew/PlayersSTatistics";


function App() {
    const [statisticStatus,setStatisticStatus] = useState(false)
    const isAuthTest = useSelector((state) => {
        return state.isAuth
    })


    const votePlayers = useSelector((state) => {
        return state.votePlayers
    })
    const defaultPlayers = useSelector((state) => {
        return state.defaultPlayers
    })
    const players = useSelector((state) => {
        return state.defaultPlayers
    })
    const votePlayersPopupStatus = useSelector((state) => {
        return state.popups.votePlayersPopup
    })
    const selectPlayingPlayersPopupStatus = useSelector((state) => {
        return state.popups.selectPlayingPlayersPopup
    })
    const readyTeamsPopupStatus = useSelector((state) => {
        return state.popups.readyTeamsPopup
    })
    const lastTeamsResultPopup = useSelector((state) => {
        return state.popups.lastTeamsResult
    })
    const readyTeams = useSelector((state) => {
        return state.readyTeams
    })
    const statusToGo = useSelector((state) => {
        return state.readyToGoStatus
    })
    const adminPopupStatus = useSelector((state) => {
        return state.popups.adminPopup
    })
    const votedStatus = useSelector((state) => {
        return state.votedStatus
    })
    const voters = useSelector((state) => {
        return state.voters
    })

    // Local State

        const [isAuthUserInGame,setIsAuthUserInGame] = useState(true)

    // Functions

    const toggleStatistics = () => {
        setStatisticStatus(!statisticStatus)
    }

    const showLastTeamsResultCallback = () => {
        dispatch(showLastTeamsResultPopup())
    }

    function checkIsAuthPlayerInGame(isAuthUserId){

        let status = false
        votePlayers[0].forEach((player) => {
            if(player.uid === isAuthUserId){
                status = true
                return status
            }
        })
        votePlayers[1].forEach((player) => {
            if(player.uid === isAuthUserId){
                status = true
                return status
            }
        })
        return status
    }

    const showAdminPopupCallback = () => {
            dispatch(showAdminPopup())
    }

    const checkVoted = () => {
        return voters?.filter((voter) => {
            return voter?.uid === isAuth?.uid
        }).length

    }
    // ////////////////////////

    const dispatch = useDispatch()
    const isAuth = JSON.parse(localStorage.getItem("authUser"))
    useEffect(() => {
        getVoters().then((data) => {
            dispatch(setVoters(data.data().voters))
        })
        dispatch(setStatusForVote())
        if(defaultPlayers.length === 0){
            getDefaultUsers().then((data) => {
                dispatch(setDefaultPlayers(data))
            })
        }

        getPlayingUsers().then((data) => {
            if(data.length === 0){
                dispatch(setVotePlayers(null))
            }
            else{
                dispatch(setVotePlayers(data[0].players,data[1].players))
            }
        })
        if(votePlayers && isAuth){
            setIsAuthUserInGame(checkIsAuthPlayerInGame(isAuth?.uid))
        }
        console.log(isAuth)
    },[isAuthTest])


    return (
    <div className={s.appWrapper}>


            <div className={s.backgroundBlack}>
                <Navbar isAuth={isAuth}/>
                {isAuth ?
                    <>
                        {isAuth.uid === "FuNSQYoYsIXK0EZTSPI4cfVwW0f2" ?
                            <>
                                {adminPopupStatus && <AdminPopup votePlayers={votePlayers}/>}
                                {statusToGo === false && votePlayers === null ?
                                    <>
                                        {selectPlayingPlayersPopupStatus && <SelectPlayingPlayersPopup players={players} />}
                                        <AddPlayerToGame />
                                        <PlayersInGame />
                                    </>

                                    :
                                    <>
                                        {isAuth.uid === "FuNSQYoYsIXK0EZTSPI4cfVwW0f2" && <div style={{marginTop:"15px"}}><Button text={"Admin"} color={"generateColor"} callback={showAdminPopupCallback}/></div>}

                                        {isAuthUserInGame ? <>{(votedStatus || checkVoted()) ? <ThankYouMessage /> : <WaitToEndGame />}</> : <div className={s.noPlayedUserMessage}><h2>You Dont play in this game</h2>
                                            <p>you have to play to vote</p></div> }

                                    </>
                                }
                                {votePlayersPopupStatus && <VotePlayersPopup players={votePlayers}/>}
                                {readyTeamsPopupStatus && <ReadyTeams team1={readyTeams.team1} team2={readyTeams.team2} onlySee={false}/>}
                                {lastTeamsResultPopup && <ReadyTeams team1={votePlayers[0]} team2={votePlayers[1]} onlySee={true} />}
                            </>
                            :
                            <>
                                {statusToGo === false && votePlayers === null ?
                                    <>

                                    </>
                                    :
                                    <>
                                        <WaitToEndGame />
                                    </>
                                }
                            </>

                        }
                        {votePlayers && <div className={s.showLastResultsBlock}><Button text={"Show Playing Teams"} color={"generateColor"} callback={showLastTeamsResultCallback}/></div>}
                        <div className={s.statisticButtonBlock}>
                            <Button text={statisticStatus ? "Close Players' Statistics" : "Show Players' Statistics"} color={"generateColor"} callback={toggleStatistics}/>
                        </div>
                            {statisticStatus &&
                            <>
                                <PlayersSTatistics authUser={isAuth} players={players}/>
                                <div className={s.statisticButtonBlock}>
                                    <Button text={statisticStatus ? "Close Players' Statistics" : "Show Players' Statistics"} color={"generateColor"} callback={toggleStatistics}/>
                                </div>
                            </>
                            }
                    </>
                    :
                    <Login/>
                }
            </div>
    </div>
  );
}

export default App;


