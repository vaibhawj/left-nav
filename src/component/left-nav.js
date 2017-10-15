import React from 'react';
import Item from './item';
import './left-nav.css';

const LeftNav = ({ items })=> {
    return (
        <div>
           <ul className="list">
               {
                   items.map((item, index)=>{
                      return <Item key={index} item={item} />
                   })
               }
           </ul>
        </div>
    )
    
};

export default LeftNav;