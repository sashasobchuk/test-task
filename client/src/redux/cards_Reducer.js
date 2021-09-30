export const DOWNLOAD_CARDS = 'DOWNLOAD_CARDS'
export const SET_CARDS = 'SET_CARDS'
export const TOGGLE_POPUP = 'TOGGLE_POPUP'
export const SET_CARD = 'SET_CARD'


let initState = {
    popUpDisplay:false,
    card:{
        name: "orange Juice",
        category: "Drinks",
        price: 14.99
    },
    cards:[{
        name: "orange Juice",
        category: "Drinks",
        price: 14.99
    },]
}

const cardsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CARDS:
            return {...state,cards:action.cards}
        case TOGGLE_POPUP:
            return {...state,popUpDisplay:!state.popUpDisplay}
        case SET_CARD:
            return {...state,card:action.card}
        default :
            return state

    }
}


export const downloadCards = () => ({type: DOWNLOAD_CARDS})
export const setLoadCards = (cards) => ({type: SET_CARDS, cards})

export  const setCard = (card)=> ({type:SET_CARD,card})

export const togglePopUp=()=>({type:TOGGLE_POPUP})



export default cardsReducer




