import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from "./side-bar/side-bar.component";
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SIG_RML';
  sideBarOpen = true; // ✅ Par défaut, le sidebar est visible

  toggleSidebar() {
    this.sideBarOpen = !this.sideBarOpen; // ✅ Inverse l'état du Sidebar
  }
}
