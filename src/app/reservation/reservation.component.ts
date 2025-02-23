import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/Reservation';
import { Equipment } from '../models/Equipment';
import { ReservationServiceService } from '../services/Reservation-service/ReservationService.service';
import { EquipmentServiceService } from '../services/Equipment-Service/EquipmentService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  imports: [],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent  implements OnInit{
    reservation:Reservation={
      ufr:'',
      filiere:'',
      startDate:'',
      endDate:'',
      description:'',

    }
    reservations?:Reservation[];
    equipments?:Equipment[]=[];

    constructor(private reservationService:ReservationServiceService,private equipmentService:EquipmentServiceService,private route:Router){}

    ngOnInit(): void {

    }
    loadEquipment(): void {
      this.equipmentService.getEquipments().subscribe({
        next: (data) => {
          this.equipments = data;
        },
        error: (err) => {
          console.error("Erreur lors de la récupération des equipements :", err);
        }
      });
    }

    addReservation(): void {
      if (this.reservation.equipmentIds?.length===0) {
        alert("Veuillez selectionné au moins un equipement");

      }

      this.reservationService.addReservation(this.reservation).subscribe({
        next: (res) => {
          console.log("Reservation effectué avec succès", res);
          alert("Equipement ajouté avec succès !");
          this.route.navigate(['/equipments']); // Redirige vers la liste des laboratoires après l'ajout
        },
        error: (e) => {
          console.error("Erreur lors de la reservation", e);
          alert("Erreur lors de l'ajout de la reservation !");
        }
      });
    }
}
