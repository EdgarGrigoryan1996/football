import "./card.css"
import s from "./PlayerInGame.module.css"
import noImg from "../../../assets/playerImages/noImg.png"
import armeniaFlag from "../../../assets/images/armenia.png"
import {useDispatch, useSelector} from "react-redux";
import {removePlayer} from "../../../redux/reducers/readyPlayersReducer";
import {removeChecked} from "../../../redux/reducers/defaultPlayersReducer";
import VotePlayer from "../../PopupComponents/VotePlayersPopup/VotePlayerPopup/VotePlayer";

const PlayerInGame = ({player,badPlayer,onlySee,votePlayer,showPlayerPopup,infoPlayer,voteMode}) =>{
    const isAuth = JSON.parse(localStorage.getItem("authUser"))
    const me = isAuth?.uid === player?.uid
    const rating = Math.round(player.rating)
    const dispatch = useDispatch()
    const playerVotePopupStatus = useSelector((state) => {
        return state.popups.playerVotePopup
    })
    const playerInfoPopupStatus = useSelector((state) => {
        return state.popups.playerInfoPopup
    })
    return (
        <>
            {(playerVotePopupStatus && votePlayer) && <VotePlayer player={votePlayer} mode={"vote"}/>}
            {(playerInfoPopupStatus && infoPlayer) && <VotePlayer player={infoPlayer} mode={"info"}/>}
            <div className={badPlayer ? "wrapper badPlayer" : onlySee ? "wrapper voteMode" : "wrapper"}>
                {voteMode && player.voted.status ? <span className={player.voted.votedRating < 4 ? s.badRating : (player.voted.votedRating > 3 && player.voted.votedRating < 7) ?  s.normalRating : (player.voted.votedRating > 6 && player.voted.votedRating  < 10) ? s.goodRating : s.greatRating}>{player.voted.votedRating }</span> : ""}


                {!onlySee && <span className="close-card" onClick={() => {
                    dispatch(removePlayer(player.id))
                    dispatch(removeChecked(player.id))
                }}>x</span>}
                <div className={me ? "me fut-player-card" : "fut-player-card"} onClick={() => {
                    showPlayerPopup(player)
                }}>
                    <div className="player-card-top">
                        <div className="player-master-info">
                            <div className="player-rating"><span>{rating}</span></div>
                            <div className="player-position"><span>{player.position}</span></div>
                            <div className="player-nation"><img
                                src={armeniaFlag} alt="Argentina"
                                draggable="false"/></div>
                            <div className="player-club"><img
                                src={player.companyImage} alt=""
                                draggable="false"/></div>
                        </div>
                        <div className="player-picture"><img
                            src={player.img ? player.img : noImg} alt="Messi"
                            draggable="false"/>
                        </div>
                    </div>
                    <div className="player-card-bottom">
                        <div className="player-info">
                            <div className="player-name"><span>{player.name + " " + player.surname.slice(0,1) + "."}</span></div>
                            <div className="player-features">
                                <div className="player-features-col"><span>
              <div className="player-feature-value">{player.skills.pace}</div>
              <div className="player-feature-title">PAC</div></span><span>
              <div className="player-feature-value">{player.skills.shooting}</div>
              <div className="player-feature-title">SHO</div></span><span>
              <div className="player-feature-value">{player.skills.passing}</div>
              <div className="player-feature-title">PAS</div></span></div>
                                <div className="player-features-col"><span>
              <div className="player-feature-value">{player.skills.dribbling}</div>
              <div className="player-feature-title">DRI</div></span><span>
              <div className="player-feature-value">{player.skills.defending}</div>
              <div className="player-feature-title">DEF</div></span><span>
              <div className="player-feature-value">{player.skills.physical}</div>
              <div className="player-feature-title">PHY</div></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default PlayerInGame