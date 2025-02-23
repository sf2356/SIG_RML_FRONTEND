import { Laboratory } from './../../models/Laboratory';
import { Component } from '@angular/core';
import { LaboratoryServiceService } from '../../services/Laboratory-service/LaboratoryService.service';
import { Route, Router } from '@angular/router';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-laboratory',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-laboratory.component.html',
  styleUrl: './add-laboratory.component.css'
})
export class AddLaboratoryComponent {


  laboratory: Laboratory = {
    name: '',
    location: ''
  };

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
}




