import edgargrigoryanImg from "../../assets/playerImages/edgargrigoryan.png"
import abulImg from "../../assets/playerImages/abul.png"
import arshoImg from "../../assets/playerImages/arsho.png"
import robertImg from "../../assets/playerImages/robert2.png"
import gevorImg from "../../assets/playerImages/gevorg.png"
import edgarkirakosyanImg from "../../assets/playerImages/edgarkirakosyan.png"
import vaheghazaryanImg from "../../assets/playerImages/vaheghazaryan.png"
import vaheyeranosyanImg from "../../assets/playerImages/vaheyeranosyan.png"
import harutImg from "../../assets/playerImages/harut.png"
import levonImg from "../../assets/playerImages/levon.png"
import davitImg from "../../assets/playerImages/davo.png"
import narekImg from "../../assets/playerImages/narek.png"
import vardgesImg from "../../assets/playerImages/vardges.png"
import tigranImg from "../../assets/playerImages/tigran.png"
import miqoImg from "../../assets/playerImages/noImg.png"
import mherImg from "../../assets/playerImages/mher.png"
import aregImg from "../../assets/playerImages/areg.png"
import sargisImg from "../../assets/playerImages/sargis.png"
import noImg from "../../assets/playerImages/noImg.png"

import onexImg from "../../assets/images/onex.png"
import digitainImg from "../../assets/images/digitain.png"
import noCompanyImg from "../../assets/images/noCompany.png"

const images = [
    {
        img:vardgesImg,
        companyImg:onexImg
    },
    {
        img:davitImg,
        companyImg:onexImg
    },
    {
        img:vaheyeranosyanImg,
        companyImg:onexImg
    },
    {
        img:vaheghazaryanImg,
        companyImg:onexImg
    },
    {
        img:sargisImg,
        companyImg:onexImg
    },
    {
        img:arshoImg,
        companyImg:onexImg
    },
    {
        img:robertImg,
        companyImg: onexImg
    },
    {
        img:gevorImg,
        companyImg: onexImg
    },
    {
        img:edgargrigoryanImg,
        companyImg:onexImg
    },
    {
        img:narekImg,
        companyImg:digitainImg
    },
    {
        img:abulImg,
        companyImg:onexImg
    },
    {
        img:tigranImg,
        companyImg:onexImg
    },
    {
        img:levonImg,
        companyImg:onexImg
    },
    {
        img:miqoImg,
        companyImg:onexImg
    },
    {
        img:edgarkirakosyanImg,
        companyImg:onexImg
    },
    {
        img:harutImg,
        companyImg:onexImg
    },
    {
        img:aregImg,
        companyImg:noCompanyImg
    },
    {
        img:mherImg,
        companyImg:noCompanyImg
    },

]




const SET_DEFAULT_PLAYERS = "SET_DEFAULT_PLAYERS"
const ADD_PLAYER = "ADD_PLAYER"
const TOGGLE_ISCHECKED = "TOGGLE_ISCHECKED"
const SET_PLAYER_TO_GAME = "SET_PLAYER_TO_GAME"
const REMOVE_CHECKED ="REMOVE_CHECKED"
const REMOVE_ALL_CHECKED = "REMOVE_ALL_CHECKED"

const initialState = []


const defaultPlayersReducer = (state = initialState,action) => {
    switch (action.type) {
        case SET_DEFAULT_PLAYERS:

            return action.payload.defaultPlayers.map((player,i) => {
                return {
                    ...player,
                    img:images[i].img,
                    companyImage:images[i].companyImg
                }
            }).sort((a,b) => {
                return b.rating - a.rating
            })

        case ADD_PLAYER:
            return [
                ...state,
                action.payload.player
            ]
        case TOGGLE_ISCHECKED:
            return state.map((player) => {
                if(player.id === action.payload.playerId){
                    return {
                        ...player,
                        isChecked:!player.isChecked
                    }
                }
                return player
            })
        case SET_PLAYER_TO_GAME:
            return state.map((player)=> {
                if(action.payload.readyPlayers.includes(player)){
                    return {
                        ...player,
                        inGame:true
                    }
                }
                else{
                    return player
                }
            })
        case REMOVE_CHECKED:
            return state.map((player) => {
                if(player.id === action.payload.playerId){
                    return {
                        ...player,
                        isChecked:false,
                        inGame:false
                    }
                }
                else{
                    return player
                }
            })
        case REMOVE_ALL_CHECKED:
            return state.map((player) => {
                if(!player.inGame){
                    return {
                        ...player,
                        isChecked:false,
                    }
                }
                return player
            })
        default:
            return state
    }
}

export const setDefaultPlayers = (defaultPlayers) => {
    return {
        type:SET_DEFAULT_PLAYERS,
        payload:{
            defaultPlayers
        }
    }
}

export const addPlayer = (player) => {
    return {
        type:ADD_PLAYER,
        payload:{
            player
        }
    }
}

export const toggleIsChecked = (playerId) => {
    return {
        type:TOGGLE_ISCHECKED,
        payload:{
            playerId
        }
    }
}

export const setPlayerToGame = (readyPlayers) => {
    return {
        type:SET_PLAYER_TO_GAME,
        payload:{
            readyPlayers
        }
    }
}

export const removeChecked = (playerId) => {
    return {
        type:REMOVE_CHECKED,
        payload:{
            playerId
        }
    }
}

export const removeAllChecked = () => {
    return {
        type:REMOVE_ALL_CHECKED,
    }
}

export default defaultPlayersReducer







// {
//     id:Symbol(),
//         name:"Edgar",
//     surname:"Grigoryan",
//     rating:9,
//     isChecked:false,
//     inGame:false,
//     inBadPlayer:false,
//     img:edgargrigoryanImg,
//     companyImage:onexImg,
//     position:"CF",
//     skills:{
//     pace:89,
//         shooting:90,
//         passing:92,
//         dribbling:94,
//         defending:62,
//         physical:89,
// }
// },
// {
//     id:Symbol(),
//         name:"Vahe",
//     surname:"Ghazaryan",
//     rating:8,
//     isChecked:false,
//     inGame:false,
//     inBadPlayer:false,
//     img:vaheghazaryanImg,
//     companyImage:onexImg,
//     position:"LW",
//     skills:{
//     pace:86,
//         shooting:89,
//         passing:85,
//         dribbling:90,
//         defending:76,
//         physical:84,
// }
// },
// {
//     id:Symbol(),
//         name:"Areg",
//     surname:"Hakobyan",
//     rating:9,
//     isChecked:false,
//     inGame:false,
//     inBadPlayer:false,
//     img:aregImg,
//     companyImage:cognizeImg,
//     position:"ST",
//     skills:{
//     pace:89,
//         shooting:89,
//         passing:81,
//         dribbling:97,
//         defending:59,
//         physical:86,
// }
// },
// {
//     id:Symbol(),
//         name:"Abul",
//     surname:"Gasparyan",
//     rating:7,
//     isChecked:false,
//     inGame:false,
//     inBadPlayer:false,
//     img:abulImg,
//     companyImage:onexImg,
//     position:"LM",
//     skills:{
//     pace:84,
//         shooting:89,
//         passing:85,
//         dribbling:87,
//         defending:70,
//         physical:79,
// }
// },
//
// {
//     id:Symbol(),
//         name:"Arsho",
//     surname:"Kirakosyan",
//     rating:5,
//     isChecked:false,
//     inGame:false,
//     inBadPlayer:false,
//     img:arshoImg,
//     companyImage:onexImg,
//     position:"LB",
//     skills:{
//     pace:79,
//         shooting:68,
//         passing:64,
//         dribbling:51,
//         defending:81,
//         physical:79,
// }
// },
// {
//     id:Symbol(),
//         name:"Edgar",
//     surname:"Kirakosyan",
//     rating:6,
//     isChecked:false,
//     inGame:false,
//     inBadPlayer:false,
//     img:edgarkirakosyanImg,
//     companyImage:onexImg,
//     position:"CB",
//     skills:{
//     pace:85,
//         shooting:98,
//         passing:63,
//         dribbling:44,
//         defending:93,
//         physical:95,
// }
// },
// {
//     id:Symbol(),
//         name:"Levon",
//     surname:"Baghdasaryan",
//     rating:8,
//     isChecked:false,
//     inGame:false,
//     inBadPlayer:false,
//     img:levonImg,
//     companyImage:onexImg,
//     position:"CAM",
//     skills:{
//     pace:85,
//         shooting:88,
//         passing:94,
//         dribbling:89,
//         defending:79,
//         physical:84,
// }
// },
// {
//     id:Symbol(),
//         name:"Harut",
//     surname:"Abrahamyan",
//     rating:9,
//     isChecked:false,
//     inGame:false,
//     inBadPlayer:false,
//     img:harutImg,
//     companyImage:onexImg,
//     position:"CM",
//     skills:{
//     pace:86,
//         shooting:95,
//         passing:89,
//         dribbling:88,
//         defending:60,
//         physical:70,
// }
// },
// {
//     id:Symbol(),
//         name:"Mher",
//     surname:"Paronyan",
//     rating:7,
//     isChecked:false,
//     inGame:false,
//     inBadPlayer:false,
//     img:mherImg,
//     companyImage:noCompanyImg,
//     position:"CB",
//     skills:{
//     pace:80,
//         shooting:72,
//         passing:81,
//         dribbling:62,
//         defending:96,
//         physical:94,
// }
// },
//
// {
//     id:Symbol(),
//         name:"Tigran",
//     surname:"Safaryan",
//     rating:4,
//     isChecked:false,
//     inGame:false,
//     inBadPlayer:false,
//     img:tigranImg,
//     companyImage:onexImg,
//     position:"RB",
//     skills:{
//     pace:49,
//         shooting:45,
//         passing:42,
//         dribbling:36,
//         defending:62,
//         physical:51,
// }
// },
// {
//     id:Symbol(),
//         name:"Davit",
//     surname:"Maqoyan",
//     rating:7,
//     isChecked:false,
//     inGame:false,
//     inBadPlayer:false,
//     img:davitImg,
//     companyImage:onexImg,
//     position:"CM",
//     skills:{
//     pace:74,
//         shooting:75,
//         passing:78,
//         dribbling:68,
//         defending:63,
//         physical:67,
// }
// },
// {
//     id:Symbol(),
//         name:"Narek",
//     surname:"Meloyan",
//     rating:4,
//     isChecked:false,
//     inGame:false,
//     inBadPlayer:false,
//     img:narekImg,
//     companyImage:digitainImg,
//     position:"RB",
//     skills:{
//     pace:45,
//         shooting:38,
//         passing:40,
//         dribbling:34,
//         defending:50,
//         physical:47,
// }
// },
// {
//     id:Symbol(),
//         name:"Vardges",
//     surname:"Avetisyan",
//     rating:7,
//     isChecked:false,
//     inGame:false,
//     inBadPlayer:false,
//     img:vardgesImg,
//     companyImage:onexImg,
//     position:"RM",
//     skills:{
//     pace:79,
//         shooting:91,
//         passing:84,
//         dribbling:72,
//         defending:77,
//         physical:79,
// }
// },
// {
//     id:Symbol(),
//         name:"Vahe",
//     surname:"Yeranosyan",
//     rating:4,
//     isChecked:false,
//     inGame:false,
//     inBadPlayer:false,
//     img:vaheyeranosyanImg,
//     companyImage:onexImg,
//     position:"GK",
//     skills:{
//     pace:49,
//         shooting:44,
//         passing:43,
//         dribbling:47,
//         defending:50,
//         physical:40,
// }
// },
// {
//     id:Symbol(),
//         name:"Miqo",
//     surname:"Sirunyan",
//     rating:6,
//     isChecked:false,
//     inGame:false,
//     inBadPlayer:false,
//     img:noImg,
//     companyImage:noCompanyImg,
//     position:"LM",
//     skills:{
//     pace:66,
//         shooting:57,
//         passing:74,
//         dribbling:70,
//         defending:68,
//         physical:76,
// }
// },
