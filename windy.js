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
    zoom: 7,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    
    L.popup()
        .setLatLng([34.718, 137.562])
        .setContent('')
        .openOn(map);
    
});