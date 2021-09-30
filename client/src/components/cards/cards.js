import React, {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Card from "../card/card";
import clas from './cards.module.css'
import {downloadCards, setCard, togglePopUp} from "../../redux/cards_Reducer";
import BuyPopUp from "../buyPopUp/buyPopUp";

const Cards = () => {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.cardsPage.cards)
    const card = useSelector(state => state.cardsPage.card)


    function searchLesser(){
        let searchIndex  = 0;
        let smallestCard = 1;
        cards.forEach((card,index)=>{
            if(smallestCard > card.price) {
                smallestCard = card.price
                searchIndex = index
            }else return undefined
        })
        return searchIndex
    }
    let searchIndex  =useMemo(()=>searchLesser(),[cards])

    const buyHandler = () => {
        dispatch(togglePopUp())
        dispatch(setCard(cards[searchIndex]))

    }
    useEffect(()=>{
        dispatch( downloadCards())
    },[dispatch])

    return (
        <>
            <BuyPopUp card={card} />
            <div   className={clas.cardsFolder}>
                {cards.map(card=>(
                    <div  key={card.name} className={clas.cardFolder}>
                        <Card id={card.name} card={card}/>
                    </div>))
                    }
                <div className={clas.buyShipestFolder}>
                    <button className={clas.buyShipest} onClick={buyHandler}> Buy Cheapest</button>
                </div>
            </div>


        </>
    );
};

export default Cards;
