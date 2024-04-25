import './opinion.css';
import React from "react";

import Icon from '@mdi/react';
import {mdiStar} from '@mdi/js';
import {mdiStarOutline} from '@mdi/js';


interface Props {
    name: string;
    stars: number;
    description: string;
}

const Opinion: React.FC<Props> = (props) => {
    // Use your props here

    return (
        <div className="opinion">
            <h3>{props.name}</h3>
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