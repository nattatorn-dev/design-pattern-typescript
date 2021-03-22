import { CityBus, LatLng, TaxiCab, Transportation } from "./transportation";

const from: LatLng =  [13.00, 100.00]
const to: LatLng = [13.10, 100.400]

const taxiCab = new TaxiCab()
const transportation = new Transportation(taxiCab);
transportation.goto(from, to)

const cityBus = new CityBus()
transportation.setStrategy(cityBus)
transportation.goto(from, to)
