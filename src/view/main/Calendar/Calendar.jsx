import React from 'react'
import MonthCalendar from './MonthCalendar'
import Header from './Header'
import * as dayjs from 'dayjs';
import cs from 'classnames'
import LocaleContext from './LocaleContext'
import { useState } from 'react';
import { useControllableValue } from 'ahooks'

export default function (props) {
    const { value, style, className, locale, defaultValue } = props

    const [val, setVal] = useControllableValue(props, {
        defaultValue: dayjs()
    })
    const [curMonth, setCurMonth] = useState(dayjs(val))
 
    const classNames = cs("calendar", className);

    function prevMonthHandler() {
        setCurMonth(curMonth.subtract(1, 'month'));
    }

    function nextMonthHandler() {
        setCurMonth(curMonth.add(1, 'month'));
    }

    const selectHandler = date => {
        setVal(date)
        setCurMonth(date)
        // onChange?.(date)
        
    }
    const todayHandler = () => {
        const date = dayjs()
        selectHandler(date)
    }

    return (
        <LocaleContext.Provider value={{
            locale: locale || navigator.language
        }}>
            <div className={classNames} style={style}>
                <Header value={val} todayHandler={todayHandler} curMonth={curMonth} 
                    prevMonthHandler={prevMonthHandler} nextMonthHandler={nextMonthHandler} />
                <MonthCalendar {...props} value={val} selectHandler={selectHandler} curMonth={curMonth} />
            </div>
        </LocaleContext.Provider>
    )
}
