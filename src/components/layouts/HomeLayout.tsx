import React from 'react'
import HeadInfo from '@components/HeadInfo'
import Doctors from '@components/sections/Doctors'
import Facilities from '@components/sections/Facilities'
import Location from '@components/sections/Location'
import Timings from '@components/sections/Timings'

const HomeLayout = () => {
    return (
        <div>
            <HeadInfo />
            <Timings/>
            <Doctors/>
            <Facilities/>
            <Location/>
        </div>
    )
}

export default HomeLayout