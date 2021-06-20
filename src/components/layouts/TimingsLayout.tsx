import React from 'react'
import floatBack from '../../assets/images/float-back.svg'
import { timings } from '../../data/timings';
import Backbutton from '../Backbutton';
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
                    console.log(timing)
                    return (
                        <li className="day-of-week" >
                        {timing.name}
                        <p className="operational-hours" >{`${formatTime(timing.timings[0])}`} - {`${formatTime(timing.timings[1])}`}</p>
                    </li>
                )})}
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