import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SideBarComponent } from '../side-bar-admin/side-bar.component';
import { SidebarStudentComponent } from "../sidebar-student/sidebar-student.component";

@Component({
  selector: 'app-student-dashboard',
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarStudentComponent],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent implements OnInit {

  sideBarOpen=true; //Initialisation de l'ouverture du sidebar a true

  ngOnInit(): void {

  }
  toggleSidebar(){
    this.sideBarOpen=!this.sideBarOpen; // Changement de l'initialisation
  }

}
