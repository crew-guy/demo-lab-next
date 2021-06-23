import React from 'react'
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';
import Link from 'next/link'

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 28.6184,
  lng: 77.3738
};

function Location() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBfpx4ARryAr9g2L9_kVvD-xmURtdJeZ5E",
    mapIds: ["6eb5782d68434f23"],
    region: "IN"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

    return isLoaded ? (
    <div className="map-container">
      <Link href="http://maps.google.com/maps?q=28.6184,77.3738">
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
            // mapId:"8e0a97af9386fef",
            onLoad={onLoad}
            onUnmount={onUnmount}
            >
            <Marker position={ center } />
        </GoogleMap>
    </Link>
    </div>
  ) : <></>
}

export default Location