import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laboratory } from '../../models/Laboratory';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryServiceService {
  private apiURL = "http://localhost:8082/api/laboratories";

  constructor(private http: HttpClient) {}

  // ✅ Fonction pour récupérer le token stocké
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem("token"); // Récupérer le token
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`); // ✅ Ajouter le token
    }

    return headers;
  }

  // ✅ Récupérer tous les laboratoires
  getLaboratories(): Observable<Laboratory[]> {
    return this.http.get<Laboratory[]>(`${this.apiURL}`, { headers: this.getAuthHeaders() });
  }

  // ✅ Récupérer un laboratoire par ID
  getLaboratoriesById(id: number): Observable<Laboratory> {
    return this.http.get<Laboratory>(`${this.apiURL}/${id}`, { headers: this.getAuthHeaders() });
  }

  // ✅ Ajouter un laboratoire
  addLaboratory(laboratory: Laboratory): Observable<Laboratory> {
    return this.http.post<Laboratory>(`${this.apiURL}`, laboratory, { headers: this.getAuthHeaders() });
  }

  // ✅ Mettre à jour un laboratoire
  updateLaboratory(laboratory: Laboratory, id: number): Observable<Laboratory> {
    return this.http.put<Laboratory>(`${this.apiURL}/${id}`, laboratory, { headers: this.getAuthHeaders() });
  }

  // ✅ Supprimer un laboratoire
  deleteLaboratory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`, { headers: this.getAuthHeaders() });
  }
}
