'use client';
import Container from '@/components/ui/core/Container';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import WandWithText from '@/components/ui/Wand';
import { useFadeUp } from '@/hooks/FadeUp';
// import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import btMarker from '@/assets/markers.png';
import L from 'leaflet';

interface IMapInner {
  coords: [number, number];
  zoom?: number;
}

const defaultIcon = L.icon({
  iconUrl: btMarker.src,
  shadowUrl: iconShadowUrl.src,
  iconSize: [30, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

function MapInner({ coords, zoom = 13 }: IMapInner) {
  const fadeRef = useFadeUp({ y: 20, stagger: 0.2 });

  return (
    <div className="py-16 md:py-20 lg:py-24">
      <Container className="mb-20">
        <div
          ref={fadeRef}
          className="max-w-lg mx-auto mb-5 text-center flex flex-col justify-center items-center"
        >
          <WandWithText text="Our Location" />

          <SecondaryHeading>Where to Find Us</SecondaryHeading>
          <Para className="mt-5">
            We are located in the heart of the city, easily accessible by all
            ways.
          </Para>
        </div>
      </Container>
      <MapContainer
        center={coords}
        zoom={zoom}
        style={{
          height: '500px',
          width: '100%',
          zIndex: 10,
          position: 'relative',
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={coords}>
          <Popup>
            <div className="flex flex-col items-center">
              {/* <img src="/office.png" className="w-16 h-16 mb-2" /> */}
              <span>Our HQ in Dhaka!</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default MapInner;
