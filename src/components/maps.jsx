import { MapContainer, TileLayer, Marker, Popup,useMapEvents } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

const MapWithShops = () => {
  const shopLocations = [
    { id: 1, name: "Shop A", position: [51.505, -0.09] },
    { id: 2, name: "Shop B", position: [51.51, -0.1] },
    { id: 3, name: "Farmatodo", position: [10.169680018772281, -70.07715225219728],imageUrl: 'https://picsum.photos/seed/picsum/200/300' }
  ];

  
const MapEventsHandler = () => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        alert(`Clicked at: ${lat}, ${lng}`);
      },
    });
    return null;
  };

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {shopLocations.map(shop => (
        <Marker key={shop.id} position={shop.position}>
          <Popup>{shop.name}</Popup>
          <div>
              <h3>{shop.name}</h3>
              <img src={shop.imageUrl} alt={shop.name} style={{ width: '100px', height: 'auto' }} />
            </div>

        </Marker>
      ))}
            <MapEventsHandler />

    </MapContainer>
  );
};

export default MapWithShops;