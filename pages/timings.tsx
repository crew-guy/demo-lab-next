import React from 'react'
import { timings } from '@data/timings';
import Backbutton from '@components/Backbutton';
import moment from 'moment'

const TimingsLayout = () => {
    console.log(timings)
    return (
        <>
            <div className="layout-container">
            <div className="layout-heading">
                Timings
            </div>
            <ul className="timings-list">
                {timings.map(timing => {
                    if (timing.slotTwoTimings) {
                    return (
                        <li className="day-of-week" >
                            {timing.name}
                            <p className="operational-hours" >{`${formatTime(timing.timings[0])}`} - {`${formatTime(timing.timings[1])}`}</p>
                        </li> )
                    } else {
                        return (
                            <li className="day-of-week" >
                                {timing.name}
                                <p className="operational-hours" >{`${formatTime(timing.timings[0])}`} - {`${formatTime(timing.timings[1])}`}</p>
                                <p className="operational-hours" >{`${formatTime(timing.slotTwoTimings[0])}`} - {`${formatTime(timing.slotTwoTimings[1])}`}</p>
                            </li> )
                    }
                })}
            </ul>
            </div>
            <Backbutton/>
        </>
    )
}

export default TimingsLayout

const formatTime = (date) => {
    return moment(date).format('LT')
}