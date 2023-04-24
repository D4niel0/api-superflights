import { IPassenger } from './passenger.interface';

export class IFlight extends Document {
  pilot: string;
  airplane: string;
  destinationCity: string;
  flightDate: Date;
  passengers: IPassenger[];
}
