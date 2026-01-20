window.HOME_CONFIG = {
  accessToken: 'pk.eyJ1IjoibHJqYWNvYnMiLCJhIjoiY21rM3BoanV0MHBhYjNlcXk0OTZ1bXR5eiJ9.c9gJtz4_0bhKpi50XaKODg',
  style: 'mapbox://styles/mapbox/standard',
  projection: 'mercator',
  inset: true,
  insetOptions: {
    markerColor: 'orange'
  },
  insetPosition: 'bottom-right',
  initialView: {
    center: [15, 36],
    zoom: 4.2,
    bearing: 0,
    pitch: 0
  },
  sarZonesUrl: 'data/sar-zones-data.geojson',
  cases: [
    { title: 'Pylos (Adriana)', url: '/Migrants-at-sea-mapbox/cases/pylos/pylos.html', coordinates: [21.2340, 36.4125] },
    { title: 'Farmakonisi', url: '/Migrants-at-sea-mapbox/cases/farmakonisi/farmakonisi.html', coordinates: [14.612838, 37.347632] },
    { title: 'Pserimos', url: '/Migrants-at-sea-mapbox/cases/pserimos/pserimos.html', coordinates: [12.612838, 34.347632] }
  ]
};


