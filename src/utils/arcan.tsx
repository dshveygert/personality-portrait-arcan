const magicNumber = 22;
const mains = [1, 2, 3, 4, 5, 6, 7, 8, 12, 13, 14, 30];
const karmics = [9, 10, 11, 17, 18];
const shadows = ['A', 'B', 'C', 'D', 'E', 'F', 'G2', 'G1', 'H', 'I', 'J'];

export interface IPosition {
    id: number | string;
    value: number;
    type: EArcaneType | null;
}
export interface IArcane {
    [key: string]: IPosition
}
export interface IArcaneView {
    position: number | string;
    value: string
}
export enum EArcaneType {
    main = 'main',
    karmic = 'karmic',
    shadow = 'shadow'
}
export interface IPreparedDate {
    date: number;
    month: number;
    year: number;
    sdate: string;
    smonth: string;
    syear: string;
}

export function positionsCounter(data: string): IArcane {
    const a: IArcane = {};
    const preparedDate: IPreparedDate | false = settlementDateParser(data);
    console.log('preparedDate', preparedDate, 'for', data );
    if (!!preparedDate) {
        // @ts-ignore
        const {date, month, syear} = preparedDate;
        a['1'] = positionPreparing(date, 1);
        a['2'] = positionPreparing(month, 2);
        a['3'] = positionPreparing(syear.split('').reduce((acc, item) => +item + acc, 0), 3);
        a['4'] = positionPreparing(a['1'].value + a['2'].value, 4);
        a['5'] = positionPreparing(a['2'].value + a['3'].value, 5);
        a['6'] = positionPreparing(a['4'].value + a['5'].value, 6);
        a['7'] = positionPreparing(a['1'].value + a['5'].value, 7);
        a['8'] = positionPreparing(a['2'].value + a['6'].value, 8);
        a['9'] = positionPreparing(a['2'].value - a['1'].value, 9);
        a['10'] = positionPreparing(a['3'].value - a['2'].value, 10);
        a['11'] = positionPreparing(a['9'].value - a['10'].value, 11);
        a['12'] = positionPreparing(a['7'].value + a['8'].value, 12);
        a['13'] = positionPreparing(a['1'].value + a['4'].value + a['6'].value, 13);
        a['14'] = positionPreparing(a['3'].value + a['5'].value + a['6'].value, 14);
        a['17'] = positionPreparing(a['11'].value + a['6'].value, 17);
        a['18'] = positionPreparing(a['11'].value + a['8'].value, 18);
        a['30'] = positionPreparing((a['12'].value * 2), 30);
        a['A'] = positionPreparing(a['1'].value + a['4'].value, 'A');
        a['B'] = positionPreparing(a['2'].value + a['4'].value, 'B');
        a['C'] = positionPreparing(a['2'].value + a['5'].value, 'C');
        a['D'] = positionPreparing(a['3'].value + a['5'].value, 'D');
        a['E'] = positionPreparing(a['4'].value + a['6'].value, 'E');
        a['F'] = positionPreparing(a['5'].value + a['6'].value, 'F');
        a['H'] = positionPreparing(a['A'].value + a['E'].value, 'H');
        a['G1'] = positionPreparing(a['B'].value + a['F'].value, 'G1');
        a['G2'] = positionPreparing(a['C'].value + a['D'].value, 'G2');
        a['I'] = positionPreparing(a['G1'].value + a['G2'].value, 'I');
        a['J'] = positionPreparing(a['2'].value + a['8'].value, 'J');
    }
    return a;
}

export function settlementDateParser(data: string): IPreparedDate | false {
    const [date, month, year] = data?.split('-') ?? [];
    if (!date  || !month || !year || date.length > 2 || month.length > 2 || !+date|| !+month|| !+year) {
        return false;
    }
    let d = date.length < 2 ? date : date[0] === '0' ? date[1] : date;
    let m = month.length < 2 ? month : month[0] === '0' ? month[1] : month;
    if (+d > 31 || +m > 12) {
        return false;
    }
    return {date: +d, month: +m, year: +year, sdate: d, smonth: m, syear: year};
}

function roundingUp(n: number): number {
    return n > magicNumber ? n - magicNumber : n;
}

function positionPreparing(val: number, key: number | string): IPosition {
    const value = roundingUp(Math.abs(val));
    const type = mains.findIndex(n => n === key) >= 0 ? EArcaneType.main : karmics.findIndex(n => n === key) >= 0 ? EArcaneType.karmic : shadows.findIndex(n => n === key) >= 0 ? EArcaneType.shadow : null;
    return {id: key, type, value};
}

const romans = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XII', 'XIV', 'XV', 'XVI', 'XVII', 'XIII', 'XIX', 'XX', 'XXI', 'XXII'];
export function romanNumerals(n: number): string {
    return romans[n - 1];
}
