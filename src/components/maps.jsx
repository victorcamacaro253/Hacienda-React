import { useEffect } from 'react'; // Ensure React is imported
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';

const MapWithShops = () => {
  const shopLocations = [
    { id: 1, name: "Shop A", position: [51.505, -0.09] },
    { id: 2, name: "Shop B", position: [51.51, -0.1] },
    { id: 3, name: "Farmatodo", position: [10.169680018772281, -70.07715225219728], imageUrl: 'https://picsum.photos/seed/picsum/200/300' }
  ];

  // Coordinates for Barquisimeto and Caracas
  const startPoint = [10.0634, -69.3122];  // Barquisimeto
  const endPoint = [10.4806, -66.9036];  // Caracas

  // Geocoding (Search) functionality
  const MapWithSearch = () => {
    const map = useMap();

    useEffect(() => {
      // Initialize the geocoder control and add it to the map
      const geocoder = L.Control.Geocoder.nominatim();
      const geocoderControl = L.Control.geocoder({
        geocoder,
        position: 'topleft',  // Position the search bar in the top-left corner
      }).addTo(map);
      
      return () => {
        map.removeControl(geocoderControl);  // Cleanup when the map is unmounted
      };
    }, [map]);

    return null;
  };

  // Map component for Leaflet Routing Machine
  const MapEventsHandler = () => {
    const map = useMap();

    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        alert(`Clicked at: ${lat}, ${lng}`);
      },
    });

    useEffect(() => {
      if (map) {
        // Initialize the routing machine
        L.Routing.control({
          waypoints: [
            L.latLng(startPoint),
            L.latLng(endPoint),
          ],
          routeWhileDragging: true,
        }).addTo(map);
      }
    }, [map]);

    return null;
  };

  return (
    <MapContainer center={startPoint} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {shopLocations.map(shop => (
        <Marker key={shop.id} position={shop.position}>
          <Popup>
            <div>
              <h3>{shop.name}</h3>
              {shop.imageUrl && <img src={shop.imageUrl} alt={shop.name} style={{ width: '100px', height: 'auto' }} />}
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Add the MapWithSearch component to enable geocoding */}
      <MapWithSearch />

      {/* Handle the route using the MapEventsHandler */}
      <MapEventsHandler />
    </MapContainer>
  );
};

export default MapWithShops;
