import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SideBarComponent } from '../side-bar-admin/side-bar.component';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,RouterOutlet,HeaderComponent,SideBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  sideBarOpen=true; //Initialisation de l'ouverture du sidebar a true

  ngOnInit(): void {

  }
  toggleSidebar(){
    this.sideBarOpen=!this.sideBarOpen; // Changement de l'initialisation
  }

}
