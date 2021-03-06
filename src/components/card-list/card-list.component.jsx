import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component.jsx';

export const CardList = (props) => {
    // console.log(props);
    return (
        <div className='card-list'>{ props.sellItems.map(item => (
            <Card key={item.id} sellItem={item} />))}
        </div>)
};