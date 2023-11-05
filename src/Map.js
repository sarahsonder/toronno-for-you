let map;
async function initMap() {
  // The location of Bahen
  const position = { lat: 43.65979686422437, lng: -79.39693152135929};
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Bahen
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Bahen
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Bahen",
  });

  const transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);
}
const Map = () => {
  return (initMap())
}

export default Map;

// Initialize and add the map
  