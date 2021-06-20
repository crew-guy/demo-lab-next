import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import farmakoLogo from '@assets/images/farmako-logo.svg'
import { Carousel } from 'react-responsive-carousel';
import { lab } from '@data/lab'
import Image from 'next/image'

export const Header = () => {
    return (
        <>
            <div className="downwards-shadow-gradient" ></div>
            {/* <div className="upwards-shadow-gradient" ></div> */}
            <div className="carousel-container">
                <div className="farmako-logo-container">
                    <Image src={farmakoLogo} alt="farmako logo" />
                </div>
                <p className="lab-initials">
                    <p className="lab-name">{lab.labName} </p>
                    <p className="lab-location">{lab.labLocation} </p>
                </p>
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
                        lab.labHeroImages.map(image => (
                            <div>
                                <img src={image} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </>
    );
}
