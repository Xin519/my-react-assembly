import React, { useState } from 'react'
import PageBox from './PageBox'

export default function SetScheduling({ days, personnel, shift, callback, setWidth }) {
    const [top, settop] = useState(0);
    const [left, setleft] = useState(0);
    const [isPageBox, setisPageBox] = useState(false)
    const [personnelInfo, setpersonnelInfo] = useState({})
    const [day, setday] = useState({})
    const [ymd, setymd] = useState('')
    const [pageName, setpageName] = useState('')

    
    const setClick = (personnel, dayInfo) => {
        setisPageBox(true)
        setpersonnelInfo(personnel)
        setday(dayInfo)
        const e = window.event;
        const top = e.pageY;
        const left = dayInfo.date >= 27 ? e.pageX - 180 : e.pageX;
        settop(top)
        setleft(left)
        setymd(dayInfo.ymd)
        setpageName(personnel.i.name)
    }
    const setShift = shift => {
        setisPageBox(false)
        let myPersonnel = [...personnel]
        let obj = myPersonnel[personnelInfo["index"]]["pageDate"];
        if(!obj[day["date"]] || obj[day["date"]]['id'] !== shift['id']){
            obj = obj[day["date"]] = shift;
            obj["ymd"] = ymd;
            console.log(myPersonnel)
            callback(myPersonnel, day["date"])
        }
    }

    const daysMap = () => days.map(i => (
        <div
            className="right"
            style={{ width: setWidth() }}
            key={i.date}
        >
            {i.date}
            <br />
            {i.weekday}
        </div>
    ))

    const personnelMap = () => personnel.map((i, index) => (
        <ul key={i.name}>
            <div className="left">{i.name}</div>
            {
                days.map(e => {
                    return (
                        <li style={{ width: setWidth() }} key={e.date} onClick={() => setClick({ i, index }, e)}>
                            {
                                i['pageDate'][e.date] && i['pageDate'][e.date]['id'] === 1 ? (<div
                                    className="lan"
                                    title={i['pageDate'][e.date]['name']}
                                >
                                    {i["pageDate"][e.date]["name"]}
                                </div>) : ''
                            }
                            {
                                i['pageDate'][e.date] && i['pageDate'][e.date]['id'] === 2 ? (<div
                                    className="hui"
                                    title={i['pageDate'][e.date]['name']}
                                >
                                    {i["pageDate"][e.date]["name"]}
                                </div>) : ''
                            }

                        </li>
                    )
                })
            }

        </ul>
    ))

    const box = isPageBox? <PageBox shift={shift} top={top} left={left} pageName={pageName} ymd={ymd} callback={setShift} />: <></>

    return (
        <>
            <div className="setBox">
                <div className="setTle">
                    <div className="left">姓名</div>
                    {
                        daysMap()
                    }
                </div>

                <div className="setMain">
                    {
                        personnelMap()
                    }
                </div>
            </div>
            {
                box
            }
        </>

    )
}
