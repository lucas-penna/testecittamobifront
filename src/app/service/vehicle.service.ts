import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VehicleData } from '../model/vehicleData';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  readonly url : string = `${environment.API}cittamobi`

  constructor(private http : HttpClient) { }

  getVehicleData() : Observable<VehicleData[]> {
    return this.http.get<VehicleData[]>(this.url);
  }
}
