import { PageProps } from 'gatsby';
import React from 'react';
import cacheFn from "../../utils/memoization";
import {IArcane, IPreparedDate, positionsCounter, settlementDateParser } from "../../utils/arcan";
import PersonalPortrait from "../../components/personal-portrait/personal-portrait";
import './settlement-date.sass';
import {Helmet} from "react-helmet";

export default function SettlementDate(props: PageProps) {
    const {settlementDate} = props?.params ?? {};
    const firstDate = settlementDate?.split('_')[0];
    const secondDate = settlementDate?.split('_')[1];
    const preparedDate = !!firstDate && cacheFn<IPreparedDate>(settlementDateParser)(firstDate);
    const preparedDateCompare = !!secondDate && cacheFn<IPreparedDate>(settlementDateParser)(secondDate);
    const isDate = !!preparedDate && preparedDate.date && preparedDate.month && !!preparedDate.year;
    const isCompareDate = !!preparedDateCompare && preparedDateCompare.date && preparedDateCompare.month && !!preparedDateCompare.year;
    const date: IArcane = positionsCounter(firstDate);
    const dateCompare: IArcane = positionsCounter(secondDate);
    const WrongDate = <div className='settlement-date'>Wrong date</div>;
    const metaTitle = `Расчет психологического портрета личности на основе арканов ${isDate ? 'для ' + firstDate : ''}`;
    const metaDescription = metaTitle;
    return (<>
        {isDate ?
            <>
                <Helmet>
                    <title>{metaTitle}</title>
                    <meta name="description" content={metaDescription} />
                </Helmet>
                <div className='settlement-date'>
                    <div className='date'>{firstDate}</div>
                    <PersonalPortrait calculation={date} />
                </div>
            </>
             :
            WrongDate
        }
        {isCompareDate ?
            <div className='settlement-date'>
                <div>{secondDate}</div>
                <div>
                    {Object.keys(dateCompare).map((key) => {
                        return <div key={key}><div>{JSON.stringify(dateCompare[key])}</div><br/></div>
                    })
                    }
                </div>
            </div> :
            <></>
        }
        </>
    )
}
