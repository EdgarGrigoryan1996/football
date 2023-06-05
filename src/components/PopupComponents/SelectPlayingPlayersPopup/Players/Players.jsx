import Player from "./Player/Player";
import s from "./Player/Player.module.css";

const Players = ({players}) => {
    return (
        <>
            <div className={s.caption}>
                <div className={s.playerId}>{"ID"}</div>
                <div className={s.playerImg}>IMG</div>
                <div className={s.playerName}>{"NAME"}</div>
                <div className={s.playerSurname}>{"SURNAME"}</div>
                <div className={s.playerRating}>{"RATING"}</div>
            </div>
                <div className={s.playersBlock}>
                    {players.map((player,i) => <Player key={Math.random()} player={player} index={i}/>)}
                </div>

        </>
    )
}

export default Players