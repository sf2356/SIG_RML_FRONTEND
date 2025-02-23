import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-student',
  imports: [CommonModule,RouterModule],
  templateUrl: './sidebar-student.component.html',
  styleUrl: './sidebar-student.component.css'
})
export class SidebarStudentComponent {
  @Input() isOpen=true;
}
