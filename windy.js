//2019.12.11更新
//L.popupなし
const options = {
    // Required: API key
    key: 'na7wJwLpK0SjabfsCTBbfL6YLi4a8O35', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: 34.718,
    lon: 137.562,
    zoom: 8,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    const { map } = windyAPI;
    // .map is instance of Leaflet map
    const { overlays,broadcast } = windyAPI;
    const windMetric = overlays.wind.metric;
    overlays.wind.listMetrics();
    overlays.wind.setMetric('m/s');

});