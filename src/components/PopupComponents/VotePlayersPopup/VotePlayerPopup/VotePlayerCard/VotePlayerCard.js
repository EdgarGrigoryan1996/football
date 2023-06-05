import "../../../../PlayersInGame/PlayerInGame/card.css"
import s from "./VotePlayerCard.module.css"
import noImg from "../../../../../assets/playerImages/noImg.png"
import armeniaFlag from "../../../../../assets/images/armenia.png"


const VotePlayerCard = ({player}) =>{
    const rating = Math.round(player.rating)
    return (
        <div className= {s.wrapper}>
            <div className={s.myCard + " fut-player-card"}>
                <div className="player-card-top">
                    <div className={s.myRating + " player-master-info"}>
                        <div className={"player-rating"}><span>{rating}</span></div>
                        <div className="player-position"><span>{player.position}</span></div>
                        <div className="player-nation">
                            <img
                            src={armeniaFlag} alt="Argentina"
                            draggable="false"/></div>
                        <div className="player-club"><img
                            src={player.companyImage} alt=""
                            draggable="false"/></div>
                    </div>
                    <div className="player-picture"><img
                        src={player.img ? player.img : noImg} alt={player.name}
                        draggable="false"/>
                    </div>
                </div>
                <div className="player-card-bottom">
                    <div className="player-info">
                        <div className={s.myPlayerName  + " player-name"}><span>{player.name + " " + player.surname}</span></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default VotePlayerCard