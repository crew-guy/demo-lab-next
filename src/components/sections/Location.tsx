import imgSrc from '@assets/images/location-icon.svg'
import Section from '@components/Section'
import {bucketID} from "@data/lab"

const mapImage = `https://cdn.farmako.in/labs/${bucketID}/map-image.svg` 

const Location = () => {
    return (
        <>
            <Section
                imgSrc={imgSrc}
                // linkText={"All Timings"}
                title={"Location"}
            >
            </Section>
            <div className="map-img">
                <a href="https://www.justdial.com/Delhi/Dr-Yogita-Sagar-Dental-Care-Greater-Kailash/011PXX11-XX11-150727214138-O2E2_BZDET">
                    <img src={mapImage} alt="" />
                </a>
            </div>
        </>
    )
}

export default Location
