import React, {useState} from 'react';
import s from "./Login.module.css"
import Button from "../globalComponents/Button/Button";
import {useDispatch} from "react-redux";
import {setAuthUser} from "../../redux/reducers/isAuthReducer";
import {getAuthUser} from "../../firebase/auth/getAuthUser";

function Login(props) {
    const dispatch = useDispatch()
    const [login,setLogin] = useState("")
    const [password,setPassword] = useState("")
    return (
        <div className={s.loginWrapper}>
            <div className={s.loginBlock}>
                <input type="text" autoComplete={true} placeholder={"Login"} value={login} onChange={(e) => setLogin(e.target.value)}/>
                <input type="password" placeholder={"Password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button text={"Login"} color={"myColor"} callback={function(){
                    getAuthUser(login,password).then((data) => {
                        dispatch(setAuthUser(data.user))
                        localStorage.setItem("authUser",JSON.stringify(data.user))
                    }).catch(() => {
                        alert("Wrong email or password")
                    })
                }}/>
            </div>
        </div>
    );
}

export default Login;