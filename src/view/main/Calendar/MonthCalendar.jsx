import allLocales from './locale'
import { useContext } from 'react';
import LocaleContext from './LocaleContext'
import cs from 'classnames'

const getAllDays = date => {
    const startDate = date.startOf('month');
    const day = startDate.day()

    const daysInfo = new Array(6 * 7);

    for (let i = 0; i < day; i++) {
        daysInfo[i] = {
            date: startDate.subtract(day - i, 'day'),
            currentMonth: false
        }
    }

    for (let i = day; i < daysInfo.length; i++) {
        const calcDate = startDate.add(i - day, 'day');

        daysInfo[i] = {
            date: calcDate,
            currentMonth: calcDate.month() === date.month()
        }
    }

    return daysInfo;
}

const renderDays = (days = [], dateRender, dateInnerContent, value, selectHandler) => {
    const rows = [];
    for (let i = 0; i < 6; i++) {
        const row = []
        let isPush = true
        for (let j = 0; j < 7; j++) {
            const item = days[i * 7 + j]
            row[j] = <div key={'' + i + j} onClick={() => selectHandler?.(item.date)}
                className={"calendar-month-body-cell " + (item.currentMonth ? "calendar-month-body-cell-current" : "")}>
                {
                    dateRender ? dateRender(item.date) : (
                        <div className="calendar-month-body-cell-date">
                            <div style={{ padding: '10px' }} className={
                                cs("calendar-month-body-cell-date-value",
                                    value.format('YYYY-MM-DD') === item.date.format('YYYY-MM-DD')
                                        ? "calendar-month-body-cell-date-selected"
                                        : ""
                                )
                            }>{item.date.date()}</div>
                            <div className="calendar-month-body-cell-date-content">{dateInnerContent?.(item.date)}</div>
                        </div>
                    )
                }
            </div>
            isPush = item.currentMonth ? true : isPush
        }
        if (isPush) {
            rows.push(row)
        }
    }
    return rows.map((row, index) => <div key={index} className="calendar-month-body-row">{row}</div>)
}

export default function ({ value, dateInnerContent, dateRender, selectHandler, curMonth }) {
    const localeContext = useContext(LocaleContext);
    const weekList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    const allDays = getAllDays(curMonth)
    const CalendarLocale = allLocales[localeContext.locale];

    return (
        <div className="calendar-month">
            <div className="calendar-month-week-list">
                {
                    weekList.map(week => (
                        <div className="calendar-month-week-list-item" key={week}>
                            {
                                CalendarLocale.week[week]
                            }
                        </div>
                    ))
                }
            </div>
            <div className="calendar-month-body">
                {
                    renderDays(allDays, dateRender, dateInnerContent, value, selectHandler)
                }
            </div>
        </div>
    )
}