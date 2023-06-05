import s from "./SelectPlayingPlayersPopup.module.css"
import {useDispatch, useSelector} from "react-redux";
import {closeDefaultPlayersPopup, showAddNewPlayerPopup} from "../../../redux/reducers/popupsReducer";
import Players from "./Players/Players";
import Button from "../../globalComponents/Button/Button";
import {addReadyPlayers} from "../../../redux/reducers/readyPlayersReducer";
import {removeAllChecked, setPlayerToGame} from "../../../redux/reducers/defaultPlayersReducer";
import AddNewPlayer from "../AddNewPlayer/AddNewPlayer";

const SelectPlayingPlayersPopup = (props) => {
    const dispatch = useDispatch()
    const addNewPlayerPopupStatus = useSelector((state) => {
        return state.popups.addNewPlayerPopup
    })


    let readyPlayers = props.players.filter((player) => {
        return player.isChecked === true
    })


    const closePopup = () => {
        dispatch(removeAllChecked())
        dispatch(closeDefaultPlayersPopup())
    }
    const addReadyPlayersToGame = () => {
        dispatch(addReadyPlayers(readyPlayers))
        dispatch(setPlayerToGame(readyPlayers))
        closePopup()
    }
    const showAddPlayerPopup = () => {
        dispatch(showAddNewPlayerPopup())
    }
    return (
        <div className={s.popupWrapper}>
            {addNewPlayerPopupStatus && <AddNewPlayer />}
            <div className={s.popupBlock}>
                <span
                    className={s.closePopup}
                    onClick={() => {closePopup()}}
                >x</span>
                <div className={s.popupTitle}>
                    <h2>Players</h2>
                </div>
                <div className={s.flex}>
                    <Button text={"Add New Player"} color={"myColor"} callback={showAddPlayerPopup}/>
                </div>
                <div className={s.players}>
                    <Players players={props.players}/>
                </div>
                <div className={s.buttons}>
                    <Button text={"ADD"} color={"myColor"} callback={addReadyPlayersToGame}/>
                    <Button text={"CANCEL"} color={"Red"} callback={closePopup}/>
                </div>
            </div>
        </div>
    )
}

export default SelectPlayingPlayersPopup