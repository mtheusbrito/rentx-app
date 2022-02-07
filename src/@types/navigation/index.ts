import { CarDTO } from "../../dtos/CarDTO";

export type RootStackParamList = {
  Home:undefined,
  CarDetails: {
    option: string;
    car: CarDTO;
  };
  Scheduling: {
    option: string;
  };
  SchedulingDetails: {
    option: string;
  };
  SchedulingComplete: {
    option: string;
  };
};
