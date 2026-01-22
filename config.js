window.HOME_CONFIG = {
  accessToken: 'pk.eyJ1IjoibHJqYWNvYnMiLCJhIjoiY21rM3BoanV0MHBhYjNlcXk0OTZ1bXR5eiJ9.c9gJtz4_0bhKpi50XaKODg',
  style: 'mapbox://styles/lrjacobs/cmke18zhh00g701sc3nm7fyi1',
  projection: 'mercator',
  inset: false,
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
  greeceSrrUrl: 'data/greece_srr_combined.geojson',
  italySrrUrl: 'data/italy_srr_combined.geojson',
  maltaSrrUrl: 'data/malta_srr.geojson',
  tunisiaSrrUrl: 'data/tunisia_srr.geojson',
  libyaSrrUrl: 'data/libya_srr.geojson',
  egyptSrrUrl: 'data/egypt_srr.geojson',
  cases: [
    { title: 'Pylos (Adriana)', url: '/cases/pylos/pylos.html', coordinates: [21.2340, 36.4125] },
    { title: 'Farmakonisi', url: '/cases/farmakonisi/farmakonisi.html', coordinates: [14.612838, 37.347632] },
    { title: 'Pserimos', url: '/cases/pserimos/pserimos.html', coordinates: [12.612838, 34.347632] }
  ]
};


