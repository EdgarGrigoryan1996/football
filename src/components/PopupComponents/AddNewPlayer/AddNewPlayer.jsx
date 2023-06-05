import s from "./AddNewPlayer.module.css"
import Button from "../../globalComponents/Button/Button";
import {useDispatch} from "react-redux";
import {closeAddNewPlayerPopup} from "../../../redux/reducers/popupsReducer";
import {useState} from "react";
import noImg from "../../../assets/playerImages/noImg.png"
import noCompany from "../../../assets/images/noCompany.png"
import {addPlayer} from "../../../redux/reducers/defaultPlayersReducer";

const AddNewPlayer = () => {
    const dispatch = useDispatch()
    const closePopup = () => {
        dispatch(closeAddNewPlayerPopup())
    }

    const addPlayerToAllPlayer = () => {
        if(surName.trim() !== "" && name.trim() !== ""){
            const player = {
                votePlayer:false,
                id:Symbol(),
                name:name.trim(),
                surname:surName.trim(),
                rating:[rating],
                games:0,
                win:0,
                lose:0,
                draw:0,
                isChecked:true,
                inGame:true,
                inBadPlayer:false,
                img:noImg,
                companyImage:noCompany,
                position:"?",
                skills:{
                    pace:0,
                    shooting:0,
                    passing:0,
                    dribbling:0,
                    defending:0,
                    physical:0,
                }
            }

            dispatch(addPlayer(player))
            closePopup()
        }
        else{
            alert("Incorrect Data")
        }

    }
    const [name,setName] = useState("")
    const [surName,setSurName] = useState("")
    const [rating,setRating] = useState(1)
    return (
        <div className={s.addNewPlayerWrapper}>
            <div className={s.addNewPlayerBlock}>
                <span
                    className={s.close}
                    onClick={() => {closePopup()}}
                >x</span>
                <div className={s.title}>
                    <h2>Add New Player</h2>
                </div>
                <div className={s.playerInfo}>
                    <div>
                        <input type="text" value={name} placeholder={"Enter Name"} onChange={(e) => {
                            setName(e.target.value)
                        }}/>
                    </div>
                    <div>
                        <input type="text" value={surName} placeholder={"Enter Surname"} onChange={(e) => {
                            setSurName(e.target.value)
                        }}/>
                    </div>
                    <div>
                        <input type="number" value={rating} min={1} max={10} placeholder={"Enter Rating (1-10)"} onChange={(e) => {
                            setRating(+e.target.value)
                        }}/>
                    </div>
                    <div className={s.buttons}>
                        <Button text={"Add Player"} color={"myColor"} callback={addPlayerToAllPlayer}/>
                        <Button text={"Cancel"} color={"myColor2"} callback={closePopup}/>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default AddNewPlayer