"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}
window.initMap = initMap;
//# sourceMappingURL=index.js.map