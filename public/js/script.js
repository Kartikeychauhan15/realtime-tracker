const socket = io();

if(navigator.geolocation){
    navigator.geolocation.watchPosition((position)=>{
       const {latitude, longitude} = position.coords;
       socket.emit("send-location", {latitude, longitude});
    },(error)=>{
        console.error(error);
    },
    {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    }
); 
}

 const map = L.map("map").setView([0,0], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution : "Shreyians Coding School"
}).addTo(map)

const markers = {};

socket.on("receive-location",(data)=>{
    const {id, latitude, longitude} = data;
    map.setView([latitude, longitude]);
    if(markers[id]){
        // console.log(`Updating marker for user ${id}`);
        markers[id].setLatLng([latitude,longitude]);
    }else{
        // console.log(`Adding new marker for user ${id}`);
        markers[id] = L.marker([latitude,longitude]).addTo(map);
    }
});

socket.on("user-disconnected",(id)=>{
    if(markers[id]){
        map.removeLayer(markers[id]);
        delete markers[id];
    }
})









// //new code




// const socket = io();

// if (navigator.geolocation) {
//     navigator.geolocation.watchPosition(
//         (position) => {
//             const { latitude, longitude } = position.coords;
//             console.log('Emitting location:', latitude, longitude);
//             socket.emit("send-location", { latitude, longitude });
//         },
//         (error) => {
//             console.error(error);
//         },
//         {
//             enableHighAccuracy: true,
//             timeout: 5000,
//             maximumAge: 0,
//         }
//     );
// }

// const map = L.map("map").setView([0, 0], 16);

// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     attribution: "Shreyians Coding School"
// }).addTo(map);

// const markers = {};

// socket.on("receive-location", (data) => {
//     const { id, latitude, longitude } = data;
//     console.log('Received location for user:', id, latitude, longitude);

//     // Manually change the location of one marker for visibility
//     if (id === 'user2') { // Change this id to whatever user you want to move
//         // Manually shift this user's marker to a new location
//         const adjustedLatitude = latitude + 0.01;  // Adjust latitude by +0.01
//         const adjustedLongitude = longitude + 0.01; // Adjust longitude by +0.01
//         if (markers[id]) {
//             markers[id].setLatLng([adjustedLatitude, adjustedLongitude]);
//         } else {
//             markers[id] = L.marker([adjustedLatitude, adjustedLongitude]).addTo(map);
//         }
//     } else {
//         if (markers[id]) {
//             markers[id].setLatLng([latitude, longitude]);
//         } else {
//             markers[id] = L.marker([latitude, longitude]).addTo(map);
//         }
//     }

//     // Do not change the map's view continuously
//     map.setView([latitude, longitude]); // Remove or comment out this line
// });

// socket.on("user-disconnected", (id) => {
//     if (markers[id]) {
//         map.removeLayer(markers[id]);
//         delete markers[id];
//     }
// });
