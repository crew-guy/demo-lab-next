import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import farmakoLogo from '@images/farmako-logo.svg'
import FarmakoLogo from '@images/farmako-logo.svg'
import {useEffect, useState} from 'react'
import { Carousel } from 'react-responsive-carousel';
import { lab } from '@data/lab'
// import Image from 'next/image'

export const CarouselContainer = () => {
    const [width, setWidth] = useState(100)
    const scale = 0.5668
    
    useEffect( () =>
    {
        (async () => {
            await setWidth(window.innerWidth)
        })()
    }, [])

    return (
        <div className="carousel-wrapper">
            <div className="downwards-shadow-gradient" ></div>
            {/* <div className="upwards-shadow-gradient" ></div> */}
            <div className="carousel-container">
                <div className="farmako-logo-container">
                    {/* <Image src={farmakoLogo} alt="farmako logo" /> */}
                    <FarmakoLogo/>
                </div>
                <div className="lab-initials">
                    <div className="lab-name">{lab.labName} </div>
                    <div className="lab-location">{lab.labLocation} </div>
                </div>
                <Carousel
                    showStatus={false}
                    showThumbs={false}
                    swipeable={true}
                    emulateTouch={true}
                    infiniteLoop={true}
                    // TODO : Make these last options only for mobile 
                    showArrows={false}
                    >
                    {
                        lab.labHeroImages.map((image, i) => {
                            return (
                            <div key={i} >
                                {/* <Image blurDataURL={image} placeholder="blur" height={scale*width} width={width} src={image} /> */}
                                <img src={image} />
                            </div>
                        )})
                    }
                </Carousel>
            </div>
        </div>
    );
}
