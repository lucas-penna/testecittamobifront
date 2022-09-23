import { Component, OnInit } from '@angular/core';
import { VehicleData } from './model/vehicleData';
import { VehicleService } from './service/vehicle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'cittamobi-front';
  vehicleData? : VehicleData[];

  ngOnInit(): void {
    this.getVehicle();
    setInterval(() => {
      this.getVehicle();
    }, 30000)       
  }

  constructor(private service : VehicleService) {

  }

  getVehicle() {
    this.service.getVehicleData().subscribe({
      next: (success) => {
        this.vehicleData = success;
      }
    })
  }

  translate(predictionType : string | undefined) {
    return predictionType == 'DEPARTURE' ? 'Partida' : 'Chegada';
  }
    
}



