import imgSrc from '@assets/images/location-icon.svg'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import mapStyle from "@components/GoogleMapsStyle";
import Section from '@components/Section'
import {lab} from '@data/lab'

const containerStyle = {
  width: '85%',
  height: '50%'
}

const Location = (props) => {
  return (
    <div className="location">
      <Section
                imgSrc={imgSrc}
                // linkText={"All Timings"}
                title={"Location"}
                >
            </Section>
        <div className="map-container">
          {/* <GoogleMapView google={props.google}/> */}
          <LocationImageView/>
        </div>
      </div>
    );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBfpx4ARryAr9g2L9_kVvD-xmURtdJeZ5E",
})(Location);

const GoogleMapView = (props) => {
  return (
    <Map
    google={props.google}
    zoom={13}
    containerStyle={containerStyle}
    styles={props.mapStyle}
    initialCenter={{ lat: lab.labLat,lng:lab.labLong }}
    >
      <Marker position={{ lat: lab.labLat,lng:lab.labLong }} />
    </Map>
  )
}

GoogleMapView.defaultProps = mapStyle;

const LocationImageView = () => {
    const lat = 28.5482 
    const lng = 77.2380
    const mTitle = "Lab Location"
    const locationString = "http://maps.google.com/maps?q=loc:" + lat + "," + lng + " (" + mTitle + ")"

    return (
        <>
            <div className="map-img">
                <a href={locationString}>
                    <img src={lab.labMapImage} alt="" />
                </a>
            </div>
        </>
    )
}