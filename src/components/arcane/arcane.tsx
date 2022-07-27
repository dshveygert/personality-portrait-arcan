import React from 'react';
import {IArcaneView} from "../../utils/arcan";
import './arcane.sass';

export default function Arcane({data}: {data : IArcaneView}) {
    return (
        <div className='arcane'>
            <div className='arcane-position'>{data.position}</div>
            <div className='arcane-value'>{data.value}</div>
        </div>
    );
}
