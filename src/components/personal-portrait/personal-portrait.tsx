import React from 'react';
import {IArcane, IArcaneView, romanNumerals} from "../../utils/arcan";
import Arcane from '../arcane/arcane';
import './personal-portrait.sass';

export default function PersonalPortrait({calculation}: {calculation:IArcane}) {
    const getValue = (id: number | string): string => {
        return romanNumerals(calculation[id].value);
    }
    const getData = (id: number | string): IArcaneView => {
        return {position: id, value: getValue(id)};
    }

    return (
        <div className='portrait-wrapper'>
            <div className="block head">
                <div className="item ear ear__left"><Arcane data={getData(18)} /></div>
                <div className="item face"><Arcane data={getData(9)} /></div>
                <div className="item face face__top"><Arcane data={getData(11)} /></div>
                <div className="item face"><Arcane data={getData(10)} /></div>
                <div className="item ear ear__right"><Arcane data={getData(17)} /></div>
            </div>
            <div className="block body">
                <div className="item hand hand__left">
                    <div className="item-wrapper">
                        <Arcane data={getData(12)} />
                        <Arcane data={getData(14)} />
                        <Arcane data={getData(30)} />
                    </div>
                </div>
                {/*<div className="item hand hand__left"><Arcane data={getData(14)} /></div>*/}
                <div className="item abdomen"><Arcane data={getData(1)} /></div>
                <div className="item abdomen abdomen__bottom"><Arcane data={getData(4)} /></div>
                <div className="item abdomen"><Arcane data={getData(2)} /></div>
                <div className="item abdomen abdomen__bottom"><Arcane data={getData(5)} /></div>
                <div className="item hand hand__right"><Arcane data={getData(3)} /></div>
                <div className="item hand hand__right">
                    <div className="item-wrapper">
                        <Arcane data={getData(7)} />
                        <Arcane data={getData(13)} />
                    </div>
                </div>
            </div>
            <div className="block body body__bottom">
                <div className="item abdomen"><Arcane data={getData(6)} /></div>
            </div>
            <div className="block body body__bottom">
                <div className="item abdomen"><Arcane data={getData(8)} /></div>
            </div>
            <div className="block legs">
                <div className="item-wrapper"><Arcane data={getData('A')} /></div>
                <div className="item-wrapper">
                    <Arcane data={getData('B')} />
                    <Arcane data={getData('C')} />
                </div>
                <div className="item-wrapper">
                    <Arcane data={getData('D')} />
                    <Arcane data={getData('E')} />
                    <Arcane data={getData('F')} />
                </div>
                <div className="item-wrapper">
                    <Arcane data={getData('I')} />
                    <Arcane data={getData('G1')} />
                </div>
                <div className="item-wrapper">
                    <Arcane data={getData('H')} />
                    <Arcane data={getData('G2')} />
                    <Arcane data={getData('J')} />
                </div>
            </div>
        </div>
    );
}
