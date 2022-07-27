import React, {useState} from 'react';
import {navigate} from "gatsby";
import './date-form.sass';

export default function DateForm({date}: {date? : string}) {
    console.log('FORM props', date);
    const [dateState, setDateState] = useState('');
    const [disabledState, setDisabledState] = useState(true);

    const handleChange = (e: any) => {
        const val = e.target.value;
        const reg1 = /^\d+$/;
        const reg2 = /^(\d{1,2})-(\d{1,2})$/;
        const reg3 = /^(\d{1,2})-(\d{1,2})-(\d{1,4})$/;
        const shouldFilter = !reg1.test(val) && !reg2.test(val) && !reg3.test(val);
        let filteredValue = shouldFilter ? val.slice(0, -1) : val;
        const length = filteredValue.length;
        if (length === 2 || length === 5) {
            filteredValue += '-';
        }
        setDisabledState(length !== 10);
        setDateState(filteredValue);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        goToLink(dateState);
    }

    const goToLink = (path: string) => {
        navigate(`/pp/${path}`);
    }
    return (
        <div className='date-form'>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" value={dateState} onChange={handleChange} placeholder='дд-мм-гггг' />
                </label>
                <button type="submit" disabled={disabledState}>Рассчитать</button>
            </form>
        </div>
    );
}
