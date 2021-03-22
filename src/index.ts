import { CityBus, LatLng, TaxiCab, Transportation } from "./transportation";

const from: LatLng = [13.0, 100.0];
const to: LatLng = [13.1, 100.4];

const taxiCab = new TaxiCab();
const transportation = new Transportation(taxiCab);
transportation.goto(from, to);

const cityBus = new CityBus();
transportation.setStrategy(cityBus);
transportation.goto(from, to);
