import React from 'react'

function SchedulingStatistics({ peopleNum, days, setWidth }) {
    return (
        <div className="setBox">
            <div className="setTle">
                <div className="left">班次人数</div>
                {
                    days.map(i => (
                        <div
                            className="right"
                            style={{ width: setWidth(), lineHeight: '62px' }}
                            key={i.date}
                        >
                            {i.date}
                        </div>
                    ))
                }
            </div>

            <div className="setMain">
                {
                    peopleNum.map(i => (
                        <ul key={i.name}>
                            <div className="left">{i.name}</div>
                            {
                                i.nums.map((e, index) => (
                                    <li style={{ width: setWidth() }} key={index}>
                                        {e}
                                    </li>
                                ))
                            }
                        </ul>
                    ))
                }

            </div>


        </div>
    )
}
export default React.memo(SchedulingStatistics)
