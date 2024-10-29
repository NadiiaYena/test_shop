import React, { useRef} from 'react'
import { GoogleMap } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
  };

const defaultOptions = {
    panControl: true,
    zoomControl: true,
    maptypeControl: false,

}
  

export default  function MapApp({center}){
   const mapRef =  useRef(undefined)
  const  onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const  bounds =  new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    
        mapRef.current = map
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined
      }, [])

return (

            <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
       
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>

)

}
