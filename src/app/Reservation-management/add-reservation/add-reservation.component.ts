import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReservationServiceService } from '../../services/Reservation-service/ReservationService.service';
import { EquipmentServiceService } from '../../services/Equipment-Service/EquipmentService.service';
import { Equipment } from '../../models/Equipment';
import { Reservation } from '../../models/Reservation';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from '../../services/Auth-Service/authService.service';

@Component({
  selector: 'app-add-reservation',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-reservation.component.html',
  styleUrl: './add-reservation.component.css'
})
export class AddReservationComponent {


  reservation: Reservation = {
    ufr: '',
    filiere: '',
    startDate: '',
    endDate: '',
    description: '',
    equipmentIds: [],
    userId:undefined
  };
  EquipmentIds: number[] = []; // ✅ Stocke les équipements sélectionnés

  equipments: Equipment[] = [];

  constructor(
    private reservationService: ReservationServiceService,
    private equipmentService: EquipmentServiceService,
    private authService:AuthServiceService,
    private route:Router
  ) {}

  ngOnInit(): void {
    this.loadEquipment();
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
  formatToLocalDateTime(date: string): string {
    return new Date(date).toISOString(); // Convertir la date en format ISO 8601
  }

  addReservation(): void {
    console.log("Données envoyés:",this.reservation)

    const userId=Number(this.authService.getUserId());

    if (!userId) {
      alert("Utilisateur non authentifié !");
      console.error("Erreur : Aucun utilisateur connecté !");
      return;
    }

    this.reservation.userId= userId;



    if (this.reservation.equipmentIds?.length===0) {
      alert("Veuillez selectionné au moins un equipement");

    }

    this.reservation.startDate=this.formatToLocalDateTime(this.reservation.startDate!);
    this.reservation.endDate=this.formatToLocalDateTime(this.reservation.endDate!)

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
  toggleEquipmentSelection(event: any,equipmentId: number): void {
    if (event.target.checked) {
      this.EquipmentIds.push(equipmentId); //Ici je gère le cochage du checkbox
    }

     else {
      this.EquipmentIds = this.EquipmentIds.filter(id => id !== equipmentId); // Retirer si décoché
    }

    // Met à jour l'objet `reservation`
  this.reservation.equipmentIds = [...this.EquipmentIds];

  console.log("Équipements sélectionnés :", this.EquipmentIds);
  console.log("Données actuelles de la réservation :", this.reservation);

  }



}
