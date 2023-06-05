import React, {useEffect, useState} from 'react';
import s from "./EnterVoterNamePopup.module.css"
import {closeEnterVoterNamePopup, closeVotePlayersPopup} from "../../../../redux/reducers/popupsReducer";
import Button from "../../../globalComponents/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import updatePlayerRatings from "../../../../firebase/updateFunctions/updatePlayerRatings";
import setVoters from "../../../../firebase/setFunctions/setVoters";
import {setVotedStatus} from "../../../../redux/reducers/votedStatusReducer";

function EnterVoterNamePopup(props) {
    const isAuth = useSelector((state) => {
        return state.isAuth
    })
    const dispatch = useDispatch()
    function sendRatings(){
        if(name.trim() !== "" && surName.trim() !== ""){
            updatePlayerRatings(props.votedPlayers)
            setVoters({
                email:isAuth?.email,
                uid:isAuth?.uid
            })
            setName("")
            setSurName("")
            dispatch(closeEnterVoterNamePopup())
            dispatch(closeVotePlayersPopup())
            dispatch(setVotedStatus())
        } else {
            alert("Incorrect Name")
        }


    }

    const [name,setName] = useState("")
    const [surName,setSurName] = useState("")
    return (
        <div className={s.wrapper}>
            <div className={s.block}>
                <span className={s.close} onClick={() => {
                    dispatch(closeEnterVoterNamePopup())
                }}>x</span>
                <div className={s.content}>
                    <div><h2>Enter Name</h2></div>
                    <div><input type="text" placeholder="Enter Name" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }}/></div>
                    <div><input type="text" placeholder="Enter Surname" value={surName} onChange={(e) => {
                        setSurName(e.target.value)
                    }}/></div>
                    <div><Button text="Send" color="generateColor" callback={sendRatings}/></div>
                </div>

            </div>
        </div>
    );
}

export default EnterVoterNamePopup;