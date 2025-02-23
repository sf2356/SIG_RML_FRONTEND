import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Laboratory } from '../../models/Laboratory';
import { LaboratoryServiceService } from '../../services/Laboratory-service/LaboratoryService.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-laboratory',
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './list-laboratory.component.html',
  styleUrl: './list-laboratory.component.css'
})

export class ListLaboratoryComponent implements OnInit{

laboratory: Laboratory = {
    name: '',
    location: ''
  };

  laboratories?:Laboratory[];

  ngOnInit(): void {
    this.listLaboratory()
  }

  constructor(private laboratoryService: LaboratoryServiceService, private router: Router) {}

    addLaboratory(): void {
      this.laboratoryService.addLaboratory(this.laboratory).subscribe({
        next: (res) => {
          console.log("Laboratoire ajouté avec succès", res);
          alert("Laboratoire ajouté avec succès !");
          this.router.navigate(['/laboratories']); // Redirige vers la liste des laboratoires après l'ajout
        },
        error: (e) => {
          console.error("Erreur lors de l'ajout du laboratoire", e);
          alert("Erreur lors de l'ajout du laboratoire !");
        }
      });
    }

    listLaboratory():void{
      this.laboratoryService.getLaboratories().subscribe(data=>{
        this.laboratories=data;
      })
    }

    updateLaboratory(laboratory:Laboratory):void{

      this.laboratoryService.updateLaboratory(laboratory,laboratory.id).subscribe({
        next:(res)=>{
          console.log(res);
          console.log("Laboratory update succesfully")
          this.listLaboratory();
        },
        error:(e)=>console.error(e)
      });

    }

    deleteLaboratory(id:number){
      this.laboratoryService.deleteLaboratory(id).subscribe({
        next:(res)=>{
          console.log(res);
          this.listLaboratory();
        },
        error:(e)=>console.error(e)
      });
    }



}
