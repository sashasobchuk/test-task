import React from 'react';
import clas from './card.module.css'
import {useDispatch} from "react-redux";
import {setCard, togglePopUp} from "../../redux/cards_Reducer";

const Card = ({card,buyVisibility=true,justifing='space-between'}) => {

    const dispatch = useDispatch()
    const buyHandler = () => {
        dispatch(togglePopUp())
        dispatch(setCard(card))
    }
    return (
        <div className={clas.card}  style={{alignItems:justifing}}>
            <div className={clas.upFolder}>
                <div>
                    <div style={{textAlign:justifing}} className={clas.category}>
                        {card.category}
                    </div>
                </div>
                <div>
                <span className={clas.name}>
                    {card.name}
                </span>
                </div>
            </div>

            <div className={clas.buttomFolder}>
                    <span className={clas.price}>
                        <span className={clas.dollar}>$</span>
                        {card.price}
                    </span>
                <button style={{display:buyVisibility ?'block':'none'}} onClick={buyHandler} className={clas.buy}>BUY</button>

            </div>
        </div>
    );
};

export default Card;
