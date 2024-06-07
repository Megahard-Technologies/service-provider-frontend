import './opinion.css';
import React from "react";

import Icon from '@mdi/react';
import {mdiStar} from '@mdi/js';
import {mdiStarOutline} from '@mdi/js';


interface Props {
    stars: number;
    description: string;
    date: Date;
}

const Opinion: React.FC<Props> = (props) => {
    return (
        <div className="opinion">
            <h3>{props.date.toString()}</h3>
            <div className="stars">
                {[...Array(props.stars)].map(() => <Icon path={mdiStar} size={1}/>)}
                {[...Array(5 - props.stars)].map(() => <Icon path={mdiStarOutline} size={1}/>
                )}
            </div>
            <p>{props.description}</p>
        </div>
    );
}

export default Opinion;