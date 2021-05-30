import {
  CityBus,
  Coordinates,
  TaxiCab,
  Transportation,
} from "./transportation";

const from: Coordinates = {
  latitude: 13.1,
  longitude: 100.4,
};

const to: Coordinates = {
  latitude: 13.123,
  longitude: 100.4,
};

const taxiCab = new TaxiCab();
const transportation = new Transportation(taxiCab);
transportation.goto(from, to);

const cityBus = new CityBus();
transportation.setStrategy(cityBus);
transportation.goto(from, to);
