import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import farmakoLogo from '@images/farmako-logo.svg'
import { Carousel } from 'react-responsive-carousel';
import { lab } from '@data/lab'
import Image from 'next/image'

export const Header = () => {
    return (
        <>
            {/* <div className="downwards-shadow-gradient" ></div> */}
            {/* <div className="upwards-shadow-gradient" ></div> */}
            <div className="carousel-container">
                <div className="farmako-logo-container">
                    <Image src={farmakoLogo} alt="farmako logo" />
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
                                <Image blurDataURL={image} placeholder="blur" height={600} width={700} src={image} />
                            </div>
                        )})
                    }
                </Carousel>
            </div>
        </>
    );
}
