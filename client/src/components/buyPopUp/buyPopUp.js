import React from 'react';
import clas from './buyPopUp.module.css'
import Card from "../card/card";
import WithCard from "../../HOC/withCard";
import {useSelector} from "react-redux";

const BuyPopUp = ({card}) => {

    const popUpDisplay = useSelector(state => state.cardsPage.popUpDisplay)

    return (
        <div className={clas.folder} style={{display:popUpDisplay ?'flex':'none'}}>
            <div className={clas.popUp}>
                {WithCard(Card,card)}
                </div>
        </div>
    );
};

export default BuyPopUp;
