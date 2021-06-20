import React, {Component} from 'react'
import Section from '@components/Section'
import imgSrc from '@assets/images/clock-icon.svg'
import CallToAction from '@components/CallToAction'
import {timings } from '@data/timings'
import moment from 'moment'


const Timings = () => (
    <div>
        <Section
            imgSrc={imgSrc}
            // linkText={"All Timings"}
            title={"Timings (Open Today)"}
        >
        </Section>
        <div className="section-body">
            <div className="section-row">
                {timings.map((timing, i) => {
                    if (i > 0) {
                        return
                    }
                    return (
                    <div>
                        <p className="operational-hours" >{`${formatTime(timing.timings[0])}`} - {`${formatTime(timing.timings[1])}`}</p>
                        <p className="operational-hours" >{`${formatTime(timing.slotTwoTimings[0])}`} - {`${formatTime(timing.slotTwoTimings[1])}`}</p>
                    </div>
                )})}
                <span className="section-cta">
                    <CallToAction destPath={'/timings'} linkText={'All timings'}/>
                </span>
            </div>
        </div>
    </div>
)

export default Timings


const formatTime = (date) => {
    return moment(date).format('LT')
}