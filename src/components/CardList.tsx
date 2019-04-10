import React from 'react';
import Card from './Card';
import { IRobot } from '../containers/App';

const CardList = ({robots}:{robots: Array<IRobot>}) => {
    const cardComponent = robots.map((user, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    });
    
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;