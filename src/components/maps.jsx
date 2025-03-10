import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import '../css/MapStyle.css'

const MapWithShops = () => {
  const shopLocations = [
    { id: 1, name: "Shop A", position: [51.505, -0.09] },
    { id: 2, name: "Shop B", position: [51.51, -0.1] },
    { id: 3, name: "Farmatodo", position: [10.169680018772281, -70.07715225219728], imageUrl: 'https://picsum.photos/seed/picsum/200/300' }
  ];

  const startPoint = [10.0634, -69.3122];  // Barquisimeto
  const endPoint = [10.4806, -66.9036];  // Caracas

  const MapWithSearch = () => {
    const map = useMap();

    useEffect(() => {
      const geocoder = L.Control.Geocoder.nominatim();
      const geocoderControl = L.Control.geocoder({
        geocoder,
        position: 'topleft',
      }).addTo(map);
      
      return () => {
        map.removeControl(geocoderControl);
      };
    }, [map]);

    return null;
  };

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
        
        const routingControl = L.Routing.control({
          lineOptions: {
            styles: [{ color: '#6FA1EC', opacity: 0.7, weight: 5 }] // Adjust the route line style
          },
          waypoints: [
            L.latLng(startPoint),
            L.latLng(endPoint),
          ],
          routeWhileDragging: true,
          position: 'bottomright', // Change position to bottom right
          collapsible: true, // Make the control collapsible
          autoRoute: true, // Automatically route
          show: false, // Initially hide the control
        }).addTo(map);

        // Optional: Add a button to toggle the routing control
        const toggleButton = L.control({ position: 'topright' });
        toggleButton.onAdd = function () {
          const div = L.DomUtil.create('div', 'toggle-button');
          div.innerHTML = '<button>Toggle Route</button>';
          div.onclick = function () {
            routingControl.toggle(); // Toggle the routing control
          };
          return div;
        };
        toggleButton.addTo(map);

        return () => {
          map.removeControl(routingControl);
          map.removeControl(toggleButton);
        };
      }
    }, [map]);

    return null;
  };

  return (
<div style={{ height: "100vh", width: "100%", background: 'linear-gradient(135deg, #f9f9f9 0%, #e8f5e9 100%)', display: "flex", flexDirection: "column", alignItems: "center"}}>

         <h1 style={{ color: "white", marginBottom: "20px" }}>Mapa</h1>
   <MapContainer center={startPoint} zoom={13} style={{ height: "80vh", width: "80%",borderRadius:"10px" }}>
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
    
      <MapWithSearch />
      <MapEventsHandler />
    </MapContainer>
    </div>
 
  );
};

export default MapWithShops;
