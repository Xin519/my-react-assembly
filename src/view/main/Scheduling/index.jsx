import React, { useState, useEffect } from 'react'
import SetScheduling from './SetScheduling'
import SchedulingStatistics from './SchedulingStatistics'
import {DatePicker} from 'antd'
import moment from 'moment';

const initPersonnel = [
  {
    name: "admin",
    pageDate: {
      1: {
        code: "09:00 - 18:00",
        id: 1,
        name: "正常班",
        ymd: "2022-07-01",
      },
      5: {
        code: "休息",
        id: 2,
        name: "休息",
        ymd: "2022-07-05",
      },
    },
  },
]
const initShift = [
  {
    name: "正常班",
    id: 1,
    code: "09:00 - 18:00",
  },
  {
    name: "休息",
    id: 2,
    code: "休息",
  },
  {
    name: "清空",
    id: 3,
    code: "清空",
  },
]

export default function Scheduling() {

  const [days, setdays] = useState([])
  const [currentGetym, setcurrentGetym] = useState(null)
  const [personnel, setpersonnel] = useState(initPersonnel)
  const [shift , setshift] = useState(initShift)
  const [peopleNum, setpeopleNum] = useState([])

  const setWidth = () => (100 / days.length) + '%'

  const getMonthDayNum = (year, month) => {
    const daysList = []
    let d = new Date(year, month, 0);
    let day = d.getDate()
    const getWeekday = (date) => {
      const now = new Date(date);
      const day = now.getDay();
      const weekdays = new Array("日", "一", "二", "三", "四", "五", "六");
      return weekdays[day];
    };
    const m = (month + "").length === 1 ? `0${month}` : month;
    for (let i = 1; i <= day; i++) {
      const date = i < 10 ? `0${i}` : i;
      const ymd = `${year}-${m}-${date}`;
      const ym = `${year}-${m}`;
      daysList.push({
        year: year,
        month: month,
        date: i,
        ymd,
        ym,
        weekday: getWeekday(ymd),
      });
    }
    peopleNumFn(daysList)
    setdays(daysList)
    
  }

  const peopleNumFn = day => {
    const peopleNumList = []
    for(let i = 0; i < shift.length; i++) {
      peopleNumList[i] = {
        name: shift[i]['name'],
        nums: [],
      }
      const nums = peopleNumList[i]['nums']
      const name = shift[i]['name'];
      for (let e = 1; e <= day.length; e++) {
        let num = 0;
        for (let v of personnel) {
          if (v["pageDate"][e]) {
            if (name === v["pageDate"][e]["name"]) num += 1;
          } else {
            if (name === "清空") num += 1;
          }
        }
        nums.push(num);
      }
    }
    
    setpeopleNum(peopleNumList)
  }


  const initDate = date => {
    let dates = new Date();
    if (date) {
      dates = new Date(date);
    }
    const currentYear = dates.getFullYear(); // 年
    const currentGetMonth = dates.getMonth() + 1; // 月
    const currentGetDate = dates.getDate(); // 日
    const mm = (currentGetMonth + '').lenght === 1? '0' + currentGetMonth: currentGetMonth
    if (!currentGetym) {
      const moments = moment(currentYear + "-" + mm, 'YYYY-MM')
      setcurrentGetym(moments)
    }
// console.log()
    getMonthDayNum(currentYear, currentGetMonth);
    // peopleNumFn();

  }

  const datePeopleNumFn = (myPersonnel, date) => {
    for (let i of peopleNum) {
      const name = i.name;
      let num = 0;
      for (let v of myPersonnel) {
        if (v["pageDate"][date]) {
          if (name === v["pageDate"][date]["name"]) num += 1;
        } else {
          if (name === "清空") num += 1;
        }
      }
      i.nums[date - 1] = num;
    }
    // console.log(myPersonnel)
    setpersonnel(myPersonnel)
  }
  const currentGetymFn = (date, dateString) => {
    const moments = moment(dateString, 'YYYY-MM')
    initDate(dateString);
    setcurrentGetym(moments)
  };

  useEffect(() => {
    initDate()
  }, []);
  
  return (
    <>
      <div className="setBox">
        <DatePicker onChange={currentGetymFn} picker="month" format={'YYYY-MM'} value={currentGetym} />
      </div>
      <SetScheduling days={days} personnel={personnel} shift={shift} callback={datePeopleNumFn} setWidth={setWidth} />
      <SchedulingStatistics peopleNum={peopleNum} days={days} setWidth={setWidth} />
    </>

  )
}
