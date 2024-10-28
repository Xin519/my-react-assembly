import { useContext } from 'react';
import LocaleContext from './LocaleContext'
import allLocales from './locale'

export default function ({value, todayHandler, nextMonthHandler, prevMonthHandler, curMonth}) {
    const localeContext = useContext(LocaleContext);
    const CalendarContext = allLocales[localeContext.locale];

    return <div className="calendar-header">
        <div className="calendar-header-left">
            <div className="calendar-header-icon" onClick={prevMonthHandler}>&lt;</div>
            <div className="calendar-header-value">{curMonth.format(CalendarContext.formatMonth)}</div>
            <div className="calendar-header-icon" onClick={nextMonthHandler}>&gt;</div>
            <button className="calendar-header-btn" onClick={() => todayHandler()}>{CalendarContext.today}</button>
        </div>
    </div>
}