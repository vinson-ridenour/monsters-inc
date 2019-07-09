import React from 'react';

import { Card } from '../card/card.component'

import './card-list.styles.css';

// props are the parameter we get from our functional component
// children are what you pass in between the <CardList /> tags

export const CardList = (props) => (
    <div className='card-list'>
        {props.monsters.map(monster => (
          <Card key={monster.id} monster={monster}/>
        ))}
    </div>
)