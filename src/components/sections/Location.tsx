import imgSrc from '@assets/images/location-icon.svg'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import mapStyle from "@components/GoogleMapsStyle";
import Section from '@components/Section'

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
        <Map
            google={props.google}
            zoom={13}
            containerStyle={containerStyle}
            styles={props.mapStyle}
            initialCenter={{ lat: 28.6184,lng: 77.3738 }}
          >
            <Marker position={{ lat: 28.6184,lng: 77.3738 }} />
        </Map>
        </div>
      </div>
    );
}

Location.defaultProps = mapStyle;

export default GoogleApiWrapper({
  apiKey: "AIzaSyBfpx4ARryAr9g2L9_kVvD-xmURtdJeZ5E",
})(Location);