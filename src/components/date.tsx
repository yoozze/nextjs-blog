import React from 'react';
import { parseISO, format } from 'date-fns';

export interface DateProps {
    dateString: string;
}

function Date({ dateString }: DateProps): JSX.Element {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

export default Date;
