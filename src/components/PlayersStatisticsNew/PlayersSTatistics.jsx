import React from 'react';
import PlayerStatistic from "./PlayerStatistic";
import s from "./playerStatistic.module.css"
function PlayersSTatistics(props) {
    const filteredPlayers = props.players.filter((player) => {
        return player.uid === props.authUser.uid
    })
    props.players.map((player) => {
        if(player.uid !== props.authUser.uid){
            filteredPlayers.push(player)
        }
    })
    return (
        <div className={s.statisticsBlock}>
            {filteredPlayers.map((player) => {
                return (
                    <PlayerStatistic authUser={props.authUser} player={player} />
                )
            })}
        </div>
    );
}

export default PlayersSTatistics;