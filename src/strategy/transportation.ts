export type Coordinates = { latitude: number; longitude: number };

export interface ITransportationStrategy {
  goto(from: Coordinates, to: Coordinates): void;
}

export class Transportation {
  constructor(private strategy: ITransportationStrategy) {}

  public setStrategy(strategy: ITransportationStrategy): void {
    this.strategy = strategy;
  }

  public goto(from: Coordinates, to: Coordinates): void {
    this.strategy.goto(from, to);
  }
}

export class PersonalCar implements ITransportationStrategy {
  public goto(from: Coordinates, to: Coordinates): void {
    console.log(`PersonalCar: ${from} ${to}`);
  }
}

export class TaxiCab implements ITransportationStrategy {
  public goto(from: Coordinates, to: Coordinates): void {
    console.log(`TaxiCab: ${from} ${to}`);
  }
}

export class CityBus implements ITransportationStrategy {
  public goto(from: Coordinates, to: Coordinates): void {
    console.log(`CityBus: ${from} ${to}`);
  }
}
