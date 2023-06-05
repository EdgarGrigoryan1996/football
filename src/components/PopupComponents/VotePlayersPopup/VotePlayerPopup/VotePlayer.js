import React, {useState} from 'react';
import s from "./VotePlayer.module.css";
import {
    closePlayerInfoPopup,
    closePlayerVotePopup,
} from "../../../../redux/reducers/popupsReducer";
import {useDispatch, useSelector} from "react-redux";

import VotePlayerCard from "./VotePlayerCard/VotePlayerCard";
import goldStar from "../../../../assets/images/goldStar.png";
import emptyStar from "../../../../assets/images/star.png"
import {setVoteRating} from "../../../../redux/reducers/votePlayersReducer";

function VotePlayer(props) {
    let testVotePlayer = useSelector((state) => {
        return state.votePlayers
    })
    if(testVotePlayer){
        testVotePlayer.forEach((players) => {
            players.forEach((player) => {
                if(player.id === props.player.id){
                    testVotePlayer = players
                }
            })
        })

        testVotePlayer = testVotePlayer.filter((player) => {
            return player.id === props.player.id
        })[0]
    }

    const [inStarPosition,setInStarPosition] = useState(-1)
    const rating = Math.round(props.player.rating)
    const dispatch = useDispatch()
    const stars = [1,2,3,4,5,6,7,8,9,10]
    return (
        <div className={s.readyTeamsWrapper}>
            <div className={s.readyTeamsBlock}>
                 <span className={s.close} onClick={() => {
                     if(props.mode === "vote"){
                         dispatch(closePlayerVotePopup())
                     }
                     else if(props.mode === "info"){
                        dispatch(closePlayerInfoPopup())
                     }

                 }}>x</span>
                <div className={s.readyTeamsBlockBackground}>
                   <div className={s.playerInfo}>
                    <div className={s.playerCard}>
                        <VotePlayerCard player={props.player}/>
                    </div>
                       <div className={s.info}>
                           <div>
                               <div className={s.infoLine}><b className={s.infoCaption + " " + s.boldColor}>INFO</b></div>
                               <div className={s.infoLine}><b className={s.infoCaption}>Rating</b><span>{rating}</span></div>
                               <div className={s.infoLine}><b className={s.infoCaption}>Games</b><span>{props.player.games}</span></div>
                               <div className={s.infoLine}><b className={s.infoCaption}>Win</b><span>{props.player.win}</span></div>
                               <div className={s.infoLine}><b className={s.infoCaption}>Lose</b><span>{props.player.lose}</span></div>
                               <div className={s.infoLine}><b className={s.infoCaption}>Draw</b><span>{props.player.draw}</span></div>
                           </div>
                       </div>

                           <div className={s.skills}>
                               <div className={s.infoLine}><b className={s.infoCaption + " " + s.boldColor}>SKILLS</b></div>
                               <div className={s.infoLine}><b className={s.infoCaption}>Pace</b><span>{props.player.skills.pace}</span></div>
                               <div className={s.infoLine}><b className={s.infoCaption}>Shooting</b><span>{props.player.skills.shooting}</span></div>
                               <div className={s.infoLine}><b className={s.infoCaption}>Passing</b><span>{props.player.skills.passing}</span></div>
                               <div className={s.infoLine}><b className={s.infoCaption}>Dribbling</b><span>{props.player.skills.dribbling}</span></div>
                               <div className={s.infoLine}><b className={s.infoCaption}>Defending</b><span>{props.player.skills.defending}</span></div>
                               <div className={s.infoLine}><b className={s.infoCaption}>Physical</b><span>{props.player.skills.physical}</span></div>
                           </div>
                       </div>
                    {props.mode === "vote" && <div className={s.playerVoteStars}>
                        {stars.map((star,i) => {
                            if(testVotePlayer.voted.status === false){
                                if(i <= inStarPosition){
                                    return <img
                                        key={Math.random()}
                                        className={s.star}
                                        title={star.toString()}
                                        src={goldStar}
                                        alt={star.toString()}
                                        onMouseEnter={() => {
                                            setInStarPosition(i)
                                        }
                                        }
                                        onMouseLeave={() => {
                                            setInStarPosition(-1)
                                        }
                                        }
                                        onClick={() => {
                                            dispatch(setVoteRating(props.player,i+1))
                                            dispatch(closePlayerVotePopup())
                                        }
                                        }
                                    />
                                }
                                else{
                                    return <img
                                        key={Math.random()}
                                        className={s.star}
                                        title={star.toString()}
                                        src={emptyStar}
                                        alt={star.toString()}
                                        onMouseEnter={() => {
                                            setInStarPosition(i)
                                        }
                                        }
                                        onMouseLeave={() => {
                                            setInStarPosition(-1)
                                        }
                                        }
                                    />
                                }
                            }
                            else{
                                if(i < testVotePlayer.voted.votedRating){
                                    return <img
                                        key={Math.random()}
                                        className={s.star}
                                        title={star.toString()}
                                        src={goldStar}
                                        alt={star.toString()}
                                    />
                                }
                                else{
                                    return <img
                                        key={Math.random()}
                                        className={s.star}
                                        title={star.toString()}
                                        src={emptyStar}
                                        alt={star.toString()}
                                    />
                                }
                            }
                        })}
                    </div>}
                   </div>

                </div>

            </div>

    );
}

export default VotePlayer;