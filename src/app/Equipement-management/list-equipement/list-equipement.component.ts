import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Laboratory } from '../../models/Laboratory';
import { LaboratoryServiceService } from '../../services/Laboratory-service/LaboratoryService.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Equipment } from '../../models/Equipment';
import { EquipmentServiceService } from '../../services/Equipment-Service/EquipmentService.service';


@Component({
  selector: 'app-list-equipement',
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './list-equipement.component.html',
  styleUrl: './list-equipement.component.css'
})
export class ListEquipementComponent {
  equipment: Equipment = {
    name: '',
    quantity: 0,
    type: '',
    laboratoryName: ''
  };

  equipments?:Equipment[];

  laboratories:Laboratory[]=[];

  ngOnInit(): void {
    this.listEquipment();
    this.loadLaboratories();
  }

  constructor(private equipmentService:EquipmentServiceService,  private laboratoryService: LaboratoryServiceService, private router: Router) {}

  loadLaboratories(): void {
    this.laboratoryService.getLaboratories().subscribe({
      next: (data) => {
        this.laboratories = data;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des laboratoires :", err);
      }
    });
  }
    addEquipment(): void {
      if (this.equipment.laboratoryName===null) {
        alert("Veuillez selectionné un laboratoire");

      }

      this.equipmentService.addEquipment(this.equipment).subscribe({
        next: (res) => {
          console.log("Equipement ajouté avec succès", res);
          alert("Equipement ajouté avec succès !");
          this.router.navigate(['/equipments']); // Redirige vers la liste des laboratoires après l'ajout
        },
        error: (e) => {
          console.error("Erreur lors de l'ajout de l'Equipement", e);
          alert("Erreur lors de l'ajout de l'Equipement !");
        }
      });
    }

    listEquipment():void{
      this.equipmentService.getEquipments().subscribe(data=>{
        this.equipments=data;
      })
    }

    updateEquipment(equipment:Equipment):void{

      this.equipmentService.updateEquipment(equipment,equipment.id).subscribe({
        next:(res)=>{
          console.log(res);
          console.log("Equipment update succesfully")
          this.listEquipment();
        },
        error:(e)=>console.error(e)
      });

    }

    deleteEquipment(id:number){
      this.equipmentService.deleteEquipment(id).subscribe({
        next:(res)=>{
          console.log(res);
          this.listEquipment();
        },
        error:(e)=>console.error(e)
      });
    }

}
