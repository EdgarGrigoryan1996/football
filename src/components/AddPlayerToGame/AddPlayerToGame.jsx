import s from "./AddPlayerToGame.module.css"
import Button from "../globalComponents/Button/Button";
import {useDispatch} from "react-redux";
import {showDefaultPlayersPopup} from "../../redux/reducers/popupsReducer";


const AddPlayerToGame = () => {
    const dispatch = useDispatch()
    const showPlayersPopup = () => {
        dispatch(showDefaultPlayersPopup())
    }
    return (
        <div className={s.AddPlayerBlock}>
            <Button  text={"Add Player to Game"} color={"generateColor"} callback={showPlayersPopup}/>
        </div>
    )
}

export default  AddPlayerToGame