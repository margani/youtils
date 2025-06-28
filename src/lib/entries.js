import moment from 'moment';

export function generateDateEntries() {
    const START_DATE = moment('1970-01-01', 'YYYY-MM-DD');
    const END_DATE = moment().add(100, 'years');

    const entries = [];
    let currentDate = START_DATE.clone();

    while (currentDate.isSameOrBefore(END_DATE)) {
        const gregorianDate = currentDate.format('YYYY-MM-DD');
        entries.push(`/date/${gregorianDate}.json`);
        currentDate.add(1, 'day');
    }

    return entries;
}
