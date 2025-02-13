import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggleSidebarForMe = new EventEmitter<void>(); // ✅ Création de l'événement

  onMenuClick() {
    this.toggleSidebarForMe.emit(); // ✅ Envoie l’événement au `AppComponent`
  }
}
