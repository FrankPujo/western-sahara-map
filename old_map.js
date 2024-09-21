// main stuff
var map = L.map("map");
map.setView([24.5, -13], 7);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

map.on("contextmenu", function(ev) {
    alert(ev.latlng);
});

var urlParams = new URLSearchParams(window.location.search);

// berm (permanent)
var bermPts = [
	[27.6672, -8.8114],
	[27.6597, -8.8094],
	[27.6598, -8.8092],
	[27.6596, -8.8087],
	[27.6586, -8.8081],
	[27.6575, -8.8079],
	[27.6573, -8.8079],
	[27.6568, -8.8086],
	[27.6558, -8.8083],
	[27.6501, -8.8072],
	[27.6455, -8.8063],
	[27.6406, -8.8054],
	[27.6380, -8.8048],
	[27.6350, -8.8043],
	[27.6332, -8.8040],
	[27.6333, -8.8037],
	[27.6331, -8.8034],
	[27.6324, -8.8031],
	[27.6320, -8.8030],
	[27.6317, -8.8032],
	[27.6316, -8.8034],
	[27.6316, -8.8037],
];
var berm = L.polyline(bermPts, {color: "purple"}).addTo(map);

/* random berm points

26.903318060853167, -10.806082872944
26.91288760188857, -10.871134577372123
26.920588332581154, -10.91893938555416
26.930263200693986, -10.914393095881632
26.962503248411323, -10.907153955348274
27.000333031936233, -10.89570286187837
27.038885826240424, -10.880503171767023
27.085938941553312, -10.827534470315095
*/

// all icons
var truckIcon = L.icon({
	iconUrl: "./icons/truck.png",
	iconSize: [40,40]
});
var bulldIcon = L.icon({
	iconUrl: "./icons/bulld.png",
	iconSize: [40,40]
});
var morVehIcon = L.icon({
	iconUrl: "./icons/morVeh.png",
	iconSize: [40,40]
});
var fireIcon = L.icon({
	iconUrl: "./icons/fire.png",
	iconSize: [22,38]
});
var protIcon = L.icon({
	iconUrl: "./icons/fist.png",
	iconSize: [40,40]
});
var rifleIcon = L.icon({
	iconUrl: "./icons/rifle.png",
	iconSize: [40,40]
});
var blockIcon = L.icon({
	iconUrl: "./icons/stop.png",
	iconSize: [40,40]
});

var trk1 = L.marker([21.35853, -16.95926], {icon: truckIcon}).addTo(map);
var bull1 = L.marker([21.3618, -16.9023], {icon: bulldIcon}).addTo(map);
var trp1 = L.marker([21.4331, -16.8710], {icon: morVehIcon}).addTo(map);
var att1 = L.marker([27.1856, -8.7564], {icon: fireIcon}).addTo(map); // mahbes 23 ? maybe: 27.5219, -8.7790
var att2 = L.marker([26.7765, -10.2035], {icon: fireIcon}).addTo(map); // hauza 4 ?
var att3 = L.marker([23.0066, -13.9996], {icon: fireIcon}).addTo(map); // ausred 17 ? (maybe 16)
var att4 = L.marker([23.0047, -14.0278], {icon: fireIcon}).addTo(map); // ausred 18 ? (maybe 17), maybe: 22.9802, -14.0446
var prot1 = L.marker([21.36186, -16.96062], {icon: protIcon}).addTo(map);
var att5 = L.marker([21.36419, -16.96065], {icon: rifleIcon}).addTo(map);
var blk1 = L.marker([21.3629, -16.9605], {icon: blockIcon}).addTo(map);
// 2020 november 13
var _201113_ = L.layerGroup(trk1, bull1, prot1, trp1, att1, att2, att3, att4, att5, blk1);

// table of ordered days
var daysTable = [_201113_, _201114_];

// buttons to change day WORK IN PROGRESS
var old_day = 0;
try {
	old_day = parseInt(urlParams.get("day"));
} catch {
	old_day = 0;
}

function changeDay(step) {
	var new_day = old_day + step;
	console.log(new_day);/*
	daysTable[old_day].remove();
	daysTable[new_day].addTo(map);
	var half_url = window.location.href.split("=")[0];
	window.location.href = half_url + "=" + toString(new_day);*/
}