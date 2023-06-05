import React, {useEffect, useState} from 'react';
import s from "./WaitToEndGame.module.css"
import Countdown from "react-countdown";
import {useDispatch} from "react-redux";
import {setStatusForVote, setStatusForVoteFalse} from "../../redux/reducers/readyForVoteReducer";
import {setToGoStatusFalse} from "../../redux/reducers/readyToGoReducer";
import {getTime} from "../../firebase/getFunctions/getTime";

function WaitToEndGame(props) {
    const [time,setTime] = useState(null)
    useEffect(() => {
        getTime().then((data) => {
            setTime(data)
        })
    },[])

    const dispatch = useDispatch()
const newDate = new Date(Date.now())
    const date = newDate.getFullYear() + "-" + ((newDate.getMonth() + 1) > 9 ? (newDate.getMonth() + 1) : "0" + (newDate.getMonth() + 1)) + "-" + (newDate.getDate() > 9 ? newDate.getDate() : "0" + newDate.getDate())
const rerenderToStart = ({ hours, minutes, seconds, completed }) => {
    dispatch(setStatusForVoteFalse())
    if (completed) {
        return (
            <Countdown date={date +`T${time?.endTime}:00`} daysInHours renderer={rerenderToEnd}></Countdown>
        )
    } else {
        // Render a countdown
        return (
          <div className={s.wrapper}>
              <p>Game Will be Started in</p>
              <span>{hours > 9 ? hours : "0" + hours}:{minutes > 9 ? minutes : "0" + minutes}:{seconds > 9 ? seconds : "0" + seconds}</span>
          </div>
        )
    }
}

const rerenderToEnd = ({ hours, minutes, seconds, completed }) => {
    dispatch(setStatusForVoteFalse())
    if (completed) {
        // Render a completed state
            dispatch(setToGoStatusFalse())
            dispatch(setStatusForVote())
        return (
            <div className={s.wrapper}>
                <p>The Game Is Over please wait to the Next Game</p>
            </div>
        )

    } else {
        return (
            <div className={s.wrapper}>
                <p>The Game Will be Over In</p>
                <span>{hours > 9 ? hours : "0" + hours}:{minutes > 9 ? minutes : "0" + minutes}:{seconds > 9 ? seconds : "0" + seconds}</span>
            </div>
        )
    }
}

    return (
        <div className={s.wrapper}>

            <Countdown date={date +`T${time?.startTime}:00`} daysInHours renderer={rerenderToStart}></Countdown>


        </div>
    );
}

export default WaitToEndGame;
