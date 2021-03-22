export type LatLng = [number, number];

export interface ITransportationStrategy {
  goto(from: LatLng, to: LatLng): void;
}

export class Transportation {
  constructor(private strategy: ITransportationStrategy) {}

  public setStrategy(strategy: ITransportationStrategy): void {
    this.strategy = strategy;
  }

  public goto(from: LatLng, to: LatLng): void {
    this.strategy.goto(from, to);
  }
}

export class PersonalCar implements ITransportationStrategy {
  public goto(from: LatLng, to: LatLng): void {
    console.log(`PersonalCar: ${from} ${to}`);
  }
}

export class TaxiCab implements ITransportationStrategy {
  public goto(from: LatLng, to: LatLng): void {
    console.log(`TaxiCab: ${from} ${to}`);
  }
}

export class CityBus implements ITransportationStrategy {
  public goto(from: LatLng, to: LatLng): void {
    console.log(`CityBus: ${from} ${to}`);
  }
}
