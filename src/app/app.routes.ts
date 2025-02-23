import { ListReservationComponent } from './Reservation-management/list-reservation/list-reservation.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './admin-dashboard/dashboard.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ListEquipementComponent } from './Equipement-management/list-equipement/list-equipement.component';
import { ListLaboratoryComponent } from './laboratoire-management/list-laboratory/list-laboratory.component';
import { AuthGuardService } from './services/Auth-Service/authGuard.service';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AddReservationComponent } from './Reservation-management/add-reservation/add-reservation.component';
import { AddLaboratoryComponent } from './laboratoire-management/add-laboratory/add-laboratory.component';

export const routes: Routes = [

{

    path:'',
    redirectTo:"/login",
    pathMatch:'full'
},
{
  path:"login",
  component:LoginComponent
}

/*
{ path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},

  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  }
        */
,

  {
    path:"register",
    component:RegisterComponent
  },

  {
    path:"accueil-admin", component:DashboardComponent,canActivate:[AuthGuardService],
    children:[
      {path:'',redirectTo:'home',pathMatch:'full' },
      {path:'home',component:HomeComponent},
      {path:'reservation', component:ReservationComponent},
      {path:'list-equipements',component:ListEquipementComponent},
      {path:'list-laboratory',component:ListLaboratoryComponent},
      {path:'add-laboratory',component:AddLaboratoryComponent}

    ]
  },
  {
    path:"accueil-student",component:StudentDashboardComponent,canActivate:[AuthGuardService],
    children:[
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home',component:HomeComponent},
      {path:'add-reservation' ,component:AddReservationComponent},
      {path:'list-reservation' ,component:ListReservationComponent}

    ]

  }
];
