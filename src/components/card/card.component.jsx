import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="Item" src={`images/sellItem_${props.sellItem.id}.jpg`}/>
        <h2> {props.sellItem.name} </h2>
        <h3> {props.sellItem.price} </h3>
        <p> {props.sellItem.description} </p>
    </div>
)