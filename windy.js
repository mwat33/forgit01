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
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    /*
    L.popup()
        .setLatLng([34.718, 137.562])
        .setContent('')
        .openOn(map);
    */

   const { picker, utils, broadcast } = windyAPI;

   picker.on('pickerOpened', latLon => {
       // picker has been opened at latLon coords
       console.log(latLon);

       const { lat, lon, values, overlay } = picker.getParams();
       // -> 48.4, 14.3, [ U,V, ], 'wind'
       console.log(lat, lon, values, overlay);

       const windObject = utils.wind2obj(values);
       console.log(windObject);
   });

   picker.on('pickerMoved', latLon => {
       // picker was dragged by user to latLon coords
       console.log(latLon);
   });

   picker.on('pickerClosed', () => {
       // picker was closed
   });

   // Wait since wather is rendered
   broadcast.once('redrawFinished', () => {
       picker.open({ lat: 34.718, lon: 137.562 });
       // Opening of a picker (async)
   });


});