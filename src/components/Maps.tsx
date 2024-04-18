import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from '../assets/icon-location.svg';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
interface Props{
  coordinates: { lat: number, lng: number };
}
const Maps: React.FC<Props> = ({coordinates}) => {
  const customMarker = new L.Icon<L.IconOptions>({ iconUrl: markerIcon });
  let state = {
    keyMAP: Math.random(),
  };
  
  return (
    <>
    <MapContainer
    key={state.keyMAP}
    center={[coordinates.lat, coordinates.lng]}
    zoom={18}
    className='w-full h-3/5 z-0'>
      <TileLayer
       attribution="Google Maps"
       url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}" />

        <Marker
         position={[coordinates.lat, coordinates.lng]}
        icon={customMarker} />
    
    </MapContainer>
    </>
  )
}

export default Maps