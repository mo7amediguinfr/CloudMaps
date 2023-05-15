import "./App.css";
import Map from "react-map-gl";
import maplibregl from "maplibre-gl";

function App() {
  return (

    <div className="main">

      <ul className="inline-flex flex-row   flex justify-start bg-gray-200 my-9" id="myLoca">
         {/* the title */}
        <h2 class="border-gray-900 border-4 p-4">My location</h2>
      </ul>
      {/* Google Map integration */}

      <Map
          mapLib={maplibregl}
          initialViewState={{
            longitude: -6.836825,
            latitude: 33.971588,
            zoom: 12,
          }}
          renderChildren={false}
          style={{ width: "70%", height: "50rem" ,marginLeft:"200px"}}
          mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${process.env.REACT_APP_API_KEY}`}
        />
    </div>
  );
}

export default App;
