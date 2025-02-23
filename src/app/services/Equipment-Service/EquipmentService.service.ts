import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipment } from '../../models/Equipment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentServiceService {

  private apiURL = "http://localhost:8082/api/equipments";

constructor(private http:HttpClient) { }

private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem("token"); // Récupérer le token
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`); // Ajouter le token
    }

    return headers;
  }


  //  Récupérer tous les laboratoires
    getEquipments(): Observable<Equipment[]> {
      return this.http.get<Equipment[]>(`${this.apiURL}`, { headers: this.getAuthHeaders() });
    }

    // Récupérer un laboratoire par ID
    getEquipmentsById(id: number): Observable<Equipment> {
      return this.http.get<Equipment>(`${this.apiURL}/${id}`, { headers: this.getAuthHeaders() });
    }

addEquipment(equipment:Equipment):Observable<Equipment>{
  return this.http.post<Equipment>(`${this.apiURL}`, equipment, { headers: this.getAuthHeaders() });
}


  // Mettre à jour un laboratoire
  updateEquipment(equipment: Equipment, id: number): Observable<Equipment> {
    return this.http.put<Equipment>(`${this.apiURL}/${id}`, equipment, { headers: this.getAuthHeaders() });
  }

  // Supprimer un laboratoire
  deleteEquipment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`, { headers: this.getAuthHeaders() });
  }

}
