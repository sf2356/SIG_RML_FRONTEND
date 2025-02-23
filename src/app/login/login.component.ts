import { FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '../services/Auth-Service/authService.service';
@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username:string='';
  password:string='';

constructor(private authService:AuthServiceService){
}

onLogin(){
  this.authService.login(this.username,this.password);
}



}
