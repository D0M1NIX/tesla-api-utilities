import { VehicleSpecs } from "../models/vehicle/vehicle-specs.model";
import { Vehicle } from "../models/vehicle/vehicle.model";
import { HttpService } from "./http.service";

const baseUrl = "https://www.tesla.com/";

const httpService = new HttpService(baseUrl);

export class TeslaService {
    async getNewInventoryV4(vehicleSpecs: VehicleSpecs): Promise<any> {
        const response = await httpService.get<any>('inventory/api/v4/inventory-results', vehicleSpecs);
    
        return response;
    }
}