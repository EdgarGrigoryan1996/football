import React, {useState} from 'react';
import s from "./EnterPlayingTime.module.css"
import {useDispatch} from "react-redux";
import {closeTimePopup} from "../../../redux/reducers/popupsReducer";
import Button from "../../globalComponents/Button/Button";
import {getTime} from "../../../firebase/getFunctions/getTime";
import updateTime from "../../../firebase/updateFunctions/updateTime";

function EnterPlayingTime(props) {
    const dispatch = useDispatch()
    const [selectedTime,setSelectedTime] = useState({
        startTime:"18:30",
        endTime:"20:00"
    })
    const [error,setError] = useState(false)

    const setPlayingTeamsSuccess = () => {
        if(selectedTime.startTime === null || selectedTime.endTime === null){
            setError(true)
        } else {
            updateTime(selectedTime)
            props.setPlayingTeamsSuccess()
            dispatch(closeTimePopup())
        }


    }
    return (
        <div className={s.wrapper}>

            <div className={s.block}>
                 <span className={s.close} onClick={() => {
                     dispatch(closeTimePopup())
                 } }>x</span>
                <h1>Playing Time</h1>
                <div>
                    <p>Let's play today at</p>
                    <div>
                        <label htmlFor="startTime">
                            <input type="time" value={selectedTime.startTime} id={"startTime"} onChange={(e) => {
                            if(selectedTime.startTime !== null && selectedTime.endTime !== null){
                                setError(false)
                            }
                            setSelectedTime({
                                ...selectedTime,
                                startTime: e.target.value,
                            })
                        }} /> Start Time</label>
                    </div>
                    <div><p>to</p></div>
                    <div>
                        <label htmlFor="endTime">
                            <input type="time" value={selectedTime.endTime} id={"endTime"} onChange={(e) => {
                            if(selectedTime.startTime !== null && selectedTime.endTime !== null){
                                setError(false)
                            }
                            setSelectedTime({
                                ...selectedTime,
                                endTime: e.target.value,
                            })
                        }} /> End Time</label>
                    </div>
                    {error && <div className={s.error}>PLease enter all times</div>}
                </div>

                <div> <Button text={"Play With These Themes"} color={"generateColor"} callback={setPlayingTeamsSuccess}/></div>

            </div>
        </div>
    );
}

export default EnterPlayingTime;