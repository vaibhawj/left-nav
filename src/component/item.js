import React from 'react';
import './item.css';

const Item = ({item}) => {
    return (
        <div className="item">
           <li>{item}</li>
        </div>
    );
}

export default Item;