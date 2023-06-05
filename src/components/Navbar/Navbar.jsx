import React from 'react';
import s from "./Navbar.module.css"
import { getAuth, signOut } from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {signOutAC} from "../../redux/reducers/isAuthReducer";
import logo from "../../assets/images/logo.png"

function Navbar({isAuth}) {

    const players = useSelector((state) => {
        return state.defaultPlayers
    })
    const authUserImg = players?.filter((player) => {
        return player?.uid === isAuth?.uid
    })[0]?.img
    const dispatch = useDispatch()

    function signOutCallback(){
        const auth = getAuth();
        signOut(auth).then(() => {
            dispatch(signOutAC())
            localStorage.removeItem("authUser")
        }).catch((error) => {
        });
    }
    return (
        <div className={s.navbar}>
            <div><img className={s.logo} src={logo} alt=""/></div>
            {isAuth ?
                (
                    <div className={s.authUser}>
                        <div className={s.avatar}><img src={authUserImg} alt=""/></div>
                        <div className={s.email}>{isAuth.email}</div>
                        <button className={s.signOut} onClick={signOutCallback}>Sign Out</button>
                    </div>
                )
                :
                (
                    <div>Please Log In</div>
                )}
        </div>
    );
}

export default Navbar;