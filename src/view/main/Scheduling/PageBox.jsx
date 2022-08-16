import React from 'react'
import { Button } from 'antd'

export default function PageBox({ shift, top, left, pageName, ymd, callback }) {
    const setShift = (shift) => {
        const obj = {...shift}
        callback(obj)
    }

    return (
        <div
            className="pageBox"
            style={{ top: `${top}px`, left: `${left}px` }}
        >
            <h5 style={{ fontSize: '13px' }}>{pageName} - {ymd}</h5>
            <div className="pageBoxMain">
                {
                    shift.map(i => (
                        <div style={{ width: '80%', margin: '0 auto' }} key={i.id}>
                            {
                                i.id == 1 ? 
                                    <Button type="primary" style={{ width: '100%', marginBottom: '15px' }} onClick={()=>setShift(i)}>{ i.name }</Button>: 
                                    <Button style={{ width: '100%', marginBottom: '15px' }} onClick={()=>setShift(i)}>{ i.name }</Button>
                            }
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

