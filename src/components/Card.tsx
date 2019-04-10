import React from 'react';
import { IRobot } from '../containers/App';

const Card: React.SFC<IRobot> = ({name, email, id}) => {
    return (
        <div className="bg-light-green dib br3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;