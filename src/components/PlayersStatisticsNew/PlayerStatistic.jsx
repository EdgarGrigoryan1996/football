import React from 'react';
import s from "./playerStatistic.module.css"
import "./test.css"
import streak from "../../assets/images/streak.png"

function PlayerStatistic(props) {

   console.log(props)
    const checkAuthUser = props.authUser?.uid === props.player?.uid
    props.player.rating = Math.round(props.player.rating)
    return (
        <div  className="wrap wrap-1">
            <div className={props.player.rating> 9 && "goldPlayer"}>
                <div  className={"container container-1 item1"}>
                    <div className={checkAuthUser && "authUser"}></div>
                    {props.player.streak > 2 &&
                        <div className={s.streak}>
                            <img src={streak} alt="Streak"/>
                            <h2>X{props.player.streak}</h2>
                        </div>
                    }


                    <div  style={{backgroundImage:`url(${props.player.img})`}} className="avatar-block">
                        <div className={s.rating}>{props.player.rating}</div>
                    </div>


                    <div className={s.gamesInfo}>
                        <div className={s.info}>
                            <div className={s.infoTitle}>Games</div>
                            <div className={s.infoGames}>{props.player.games}</div>
                        </div>
                        <div className={s.info}>
                            <div className={s.infoTitle}>Win</div>
                            <div className={s.infoWin}>{props.player.win}</div>
                        </div>
                        <div className={s.info}>
                            <div className={s.infoTitle}>Lose</div>
                            <div className={s.infoLose}>{props.player.lose}</div>
                        </div>
                        <div className={s.info}>
                            <div className={s.infoTitle}>Draw</div>
                            <div className={s.infoDraw}>{props.player.draw}</div>
                        </div>
                    </div>
                    <p>{props.player.name + " " + props.player.surname}</p>
                </div>
            </div>

        </div>

    );
}

export default PlayerStatistic;