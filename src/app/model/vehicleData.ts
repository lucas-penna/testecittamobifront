import { Message } from "./message";
import { Vehicle } from "./vehicle";

    export class VehicleData {
    public routeCode? : string;
    public routeMnemonic? : string;
    public companyId? : number;
    public stopId? : number;
    public serviceId? : number;
    public serviceMnemonic? : string;
    public predictionType? : string;
    public activeVehicles? : number;
    public scheduledVehicles? : string;
    public messages? : Message[];
    public vehicles? : Vehicle[];
    public hasRealTime? : boolean;
    }